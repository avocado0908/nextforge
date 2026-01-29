import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
      cache: "no-store",
    })

    if (!res.ok) return null
    return res.json()
  } catch (err) {
    console.error('getData error', err)
    return null
  }
}

export async function generateMetadata({ params }) {
  const post = await params;
  const data = await getData(post.id)

  if (!data) {
    return {
      title: 'Post not found',
      description: '',
    }
  }

  return {
    title: data.title || 'Untitled',
    description: data.desc || '',
  }
}




const BlogPost = async (props) => {
  const resolvedProps = await props
  const params = await resolvedProps.params
  const data = await getData(params.id)

  if (!data) {
    notFound()
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.image}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/4065136/pexels-photo-4065136.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.body}</p>
      </div>
    </div>
  )
}

export default BlogPost
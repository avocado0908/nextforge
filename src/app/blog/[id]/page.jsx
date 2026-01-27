import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image' 

const BlogPost = () => {
  return (
     <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>
            Description
          </p>
          <div className={styles.author}>
            <Image
              src={'https://images.pexels.com/photos/4065136/pexels-photo-4065136.jpeg?auto=compress&cs=tinysrgb&w=600q'}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={'https://images.pexels.com/photos/4065136/pexels-photo-4065136.jpeg?auto=compress&cs=tinysrgb&w=600q'}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         content
        </p>
      </div>
    </div>
  )
}

export default BlogPost
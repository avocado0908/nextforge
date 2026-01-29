import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button';
import {items} from "./data.js"
import {notFound} from 'next/navigation';

const getData = async (cat) => {
  const data = items[cat]

  if (data) {
    return data;
  }

  return notFound();
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
    const data = await getData(resolvedParams.category);

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

const Category = async ({ params }) => {
  const resolvedParams = await params;
    const data = await getData(resolvedParams.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{resolvedParams.category}</h1>

      {data.map((item) => ( 
        
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url='#'/>
          </div>
          <div className={styles.imgContainer}>
            <img src={item.image} alt="" className={styles.img} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category
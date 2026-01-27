import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button';

const Category = async ({ params }) => {
  const resolvedParams = await params;
  console.log(resolvedParams);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{resolvedParams.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button text="See More" url='#'/>
        </div>
        <div className={styles.imgContainer}>
          <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className={styles.img} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button text="See More" url='#'/>
        </div>
        <div className={styles.imgContainer}>
          <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className={styles.img} />
        </div>
      </div>
    </div>
  )
}

export default Category
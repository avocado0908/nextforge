import Image from "next/image";
import styles from "./page.module.css";
import React from "react";


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Turning your Idea into Reality. We bring together the teams from the
          global tech industry. </p>
          <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.imgContainer}>
      <Image src="/hero.png" className={styles.img} width={500} height={500} alt=""/>
      </div>
    </div>
  )
}

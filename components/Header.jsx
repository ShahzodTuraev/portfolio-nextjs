import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import background from '../public/assets/images/headerbackground.jpg'
const Header = () => {
  return (
    <div className={styles.header}>
        <Image className={styles.backgroundImg} src={background} alt='background image' />
      <div className={styles.main}>
        <h1 className={styles.heading}>웹 개발자 포트폴리오</h1>
        <div className={styles.line}></div>
        <p className={styles.supHeading}>안녕하세요. <br /> 공부가 취미인 풀 스택 웹 개발자입니다. <br />
            매우 꼼꼼한 성격, 그리고 공부를 밥 먹듯이 하는 습관이 저의 장점입니다.
        </p>
        <button className={styles.btnNext}>더 알아보기 ↓</button>
      </div>
    </div>
  )
}

export default Header

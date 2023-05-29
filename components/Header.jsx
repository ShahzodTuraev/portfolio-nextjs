import React from 'react'
import styles from '../styles/Home.module.css'
import { Link } from 'react-scroll'
const Header = () => {

  return (
    <div id='pageHeader' className={styles.header}>
        <div className={styles.filterBox}>
        </div>
      <div className={styles.headerCard}>
        <h1 className={styles.heading}>웹 개발자 포트폴리오</h1>
        <div className={styles.line}></div>
        <p className={styles.supHeading}>안녕하세요. <br /> 공부가 취미인 풀 스택 웹 개발자입니다. <br />
            매우 꼼꼼한 성격, 그리고 공부를 밥 먹듯이 하는 습관이 저의 장점입니다.
        </p>
        <Link to="pageAbout" spy={true} smooth={true} offset={0} duration={500} className={styles.btnNext}>더 알아보기 ↓</Link>
      </div>
    </div>
  )
}

export default Header

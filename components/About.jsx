import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import linkIcon from '../public/assets/icons/black-link.png'
import personIcon from '../public/assets/icons/person-fill.svg'
import calendarIcon from '../public/assets/icons/calendar-fill.svg'
import locationIcon from '../public/assets/icons/geo-alt-fill.svg'
import phoneIcon from '../public/assets/icons/telephone-fill.svg'
import emailIcon from '../public/assets/icons/envelope-fill.svg'
import eduIcon from '../public/assets/icons/pencil-fill.svg'
import { useEffect } from 'react'


const About = () => {
  const info = [
    {id:1, icon: personIcon, title: '이름', content: '샤흐저드 토라에브'},
    {id:2, icon: calendarIcon, title: '생년월일', content: '97.01.26'},
    {id:3, icon: locationIcon, title: '주소지', content: '서울특별시 강남구'},
    {id:4, icon: phoneIcon, title: '연락처', content: '010-5788-5120'},
    {id:5, icon: emailIcon, title: '이메일', content: 'turayevshahzodbek@gmail.com'},
    {id:6, icon: eduIcon, title: '이메일', content: '동아대학교'},
  ]
  return (
    <div className={styles.about}>
        <div className={styles.main}>
            <div className={styles.titleBox}>
              <Image className={styles.linkIcon} src={linkIcon} alt='link icon'/>
              <h1 className={styles.pageTitle}> ABOUT ME</h1>
            </div>
            <div className={styles.aboutBox}>
                {
                  info.map((item, index)=>{
                    return(
                      <div key={index} className={styles.infoBox}>
                        <Image className={styles.infoIcon} src={item.icon} alt='info icons'/>
                        <div className={styles.infoWrap}>
                          <p className={styles.infoName}>{item.title}</p>
                          {index === 3?
                          <a className={styles.infoContent} href="tel:01057885120">{item.content}</a>
                          :
                          ((index === 4) ? 
                          <a className={styles.infoContent} href='mailto:turayevshahzodbek@gmail.com'>{item.content}</a>:
                          <p className={styles.infoContent}>{item.content}</p>)}
                            
                        </div>
                      </div>
                    )
                  })
                }
            </div>
        </div>
    </div>
  )
}

export default About

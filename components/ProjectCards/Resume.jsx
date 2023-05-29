import React from 'react'
import styles from '../../styles/Home.module.css'
import { Carousel } from 'antd';
import Image from 'next/image';
import check from '../../public/assets/icons/check.svg'
import portfolio1 from '../../public/assets/images/portfolio-1.png'
import portfolio2 from '../../public/assets/images/portfolio-2.png'
import portfolio3 from '../../public/assets/images/portfolio-3.png'
import portfolio4 from '../../public/assets/images/portfolio-4.png'

const Resume = () => {
  return (
    <div>
      <h1 className={styles.projectTitle}>PORTFOLIO WEBSITE</h1>
      <p className={styles.projectDate}>2023.05(SELF Project)</p>
      <div className={styles.projectWrap}>
        <div className={styles.projectImg}>
          <div className={styles.corWrap}>
            <Carousel className='corusel'>
              <div>
                <Image className='coruselImg' src={portfolio1} alt='page1'/>
              </div>
              <div>
                <Image className='coruselImg' src={portfolio2} alt='page2'/>
              </div>
              <div>
                <Image className='coruselImg' src={portfolio3} alt='page3'/>
              </div>
              <div>
                <Image className='coruselImg' src={portfolio4} alt='page4'/>
              </div>
            </Carousel>
            <p className={styles.imgNumber}>5 pictures :</p>
          </div>
        </div>
      <div className={styles.projectContent}>
        <p>About :</p>
        <article>This website serves as my portfolio site, utilizing the advantages of Next.js to present my portfolio in a unified manner. I have focused on keeping the website simple and user-friendly since its purpose is to provide information. The navigation bar offers access to my resume in both English and Korean languages. Additionally, the site provides a concise introduction about myself, highlights my skills, and offers detailed information about my projects and career.</article>
        <br /><hr />
        <div className={styles.projectFeatures}>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Main Functions</p>
            <p>Brief self-introduction, technology stack, project experience, work experience, Google Analytics</p>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> GitHub</p>
            <a href="https://github.com/ShahzodTuraev/portfolio-nextjs">github.com/ShahzodTuraev/portfolio-nextjs</a>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> URL</p>
            <a href="https://s-portfolio.vercel.app/">s-portfolio.vercel.app</a>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Frontend</p>
            <p>Next js</p>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Deployment</p>
            <p>vercel </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Resume

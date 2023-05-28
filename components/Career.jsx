import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import linkIcon from '../public/assets/icons/black-link.png'
import webbrainLogo from '../public/assets/images/webbrain_logo.jpg'
import meverLogo from '../public/assets/images/mever_logo.png'
import { Link } from 'react-scroll'

const Career = () => {

  return (
    <div id='pageCareer' className={styles.career}>
        <div className={styles.main}>
            <div className={styles.titleBox}>
              <Link to="pageCareer" spy={true} smooth={true} offset={0} duration={500}>
                <Image className={styles.linkIcon} src={linkIcon} alt='link icon'/>
              </Link>
              <h1 className={styles.pageTitle}>CAREER</h1>
            </div>
            <div className={styles.careerBox}>
                <div className={styles.imgWrap}>
                    <Image src={meverLogo} className={styles.companymLogo} alt='company logo'/>
                </div>
                <div className={styles.companyBox}>
                    <h2>MEVER (주)메버</h2>
                    <p>2023.03 -</p>
                    <article>Working for this Korean company has provided me with invaluable real-world web development experience. The company's work culture embodies the Korean manner and emphasizes the importance of adapting to new frameworks and technologies. Within the company, I hold the role of a lead frontend developer, taking on significant responsibilities in that capacity. </article>
                    <ul>
                        <li>continuing exist projects</li>
                        <li>jQuery, React JS, SASS, Three JS</li>
                        <li>using APIs</li>
                        <li>using MatterPort</li>
                        <li>onServer deployment</li>
                    </ul>
                </div>
            </div>
            <div className={styles.careerBox}>
                <Image src={webbrainLogo} className={styles.companyLogo} alt='company logo'/>
                <div className={styles.companyBox}>
                    <h2>WebBrain Academy</h2>
                    <p>2022.11 - 2022.12</p>
                    <article>I embarked on my initial career journey in frontend development at WebBrain Academy. The primary objective of this internship was to gain practical experience in frontend development. During the internship, we worked on a project called 'Houzing.' It is worth mentioning that I participated in the internship remotely. </article>
                    <ul>
                        <li>using React JS</li>
                        <li>integrating Backend</li>
                        <li>project deployment</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Career

import React from 'react'
import styles from '../../styles/Home.module.css'
import { Carousel } from 'antd';
import Image from 'next/image';
import check from '../../public/assets/icons/check.svg'
import matterport1 from '../../public/assets/images/matterport-1.png'
import matterport2 from '../../public/assets/images/matterport-2.png'
import matterport3 from '../../public/assets/images/matterport-3.png'
import matterport4 from '../../public/assets/images/matterport-4.png'
import matterport5 from '../../public/assets/images/matterport-5.png'

const contentStyle = {
    margin: 0,
    height: '620px',
    width: '480px',
    textAlign: 'center',
  };
  const corusStyle = {
    height: "650px",
    width:'480px',
    background:'#242323'
  }
const Matterport = () => {
  return (
    <div>
      <h1 className={styles.projectTitle}>3D MATTERPORT WEBSITE</h1>
      <p className={styles.projectDate}>2023.04(Team Project)</p>
      <div className={styles.projectWrap}>
        <div className={styles.projectImg}>
          <div className={styles.corWrap}>
            <Carousel style={corusStyle}>
              <div>
                <Image style={contentStyle} src={matterport1} alt='page1'/>
              </div>
              <div>
                <Image style={contentStyle} src={matterport2} alt='page2'/>
              </div>
              <div>
                <Image style={contentStyle} src={matterport3} alt='page3'/>
              </div>
              <div>
                <Image style={contentStyle} src={matterport4} alt='page4'/>
              </div>
              <div>
                <Image style={contentStyle} src={matterport5} alt='page5'/>
              </div>
            </Carousel>
            <p className={styles.imgNumber}>5 pictures :</p>
          </div>
        </div>
      <div className={styles.projectContent}>
        <p>About :</p>
        <article>This project represents the main website of Mever Company located in Korea, which consists of multiple branches. The initial page showcases a visually appealing 3D display created using Three.js technology (picture 1). To access the site's content, users are required to provide their email and phone number. Moving on to the next page, users can find a news video focusing on AI and 3D technology (picture 2). This video is regularly updated using the YouTube API.
                  One of the website's branches focuses on offering online courses in AI 3D marketing (picture 3). Users can choose to subscribe to different types of subscriptions to gain access to the complete range of courses available on the site (picture 4). The subscription process is facilitated directly on the website (picture 5), utilizing the Toss API for seamless payment integration.
                  The story page provides users with general information about the company's activities (picture 6). In order to proceed with payment, users are required to complete a survey providing relevant details about themselves (picture 7). It's important to note that the website is currently in the testing environment and is not yet fully completed.</article>
        <p>My Role</p>
        <article>Developing all the Frontend part, using APIs</article>
        <br /><hr />
        <div className={styles.projectFeatures}>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Main Functions</p>
            <p>Toss API, YouTube Api, Consulting, Responsive Design</p>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> GitHub</p>
            <a href="https://github.com/ShahzodTuraev/sto">github.com/ShahzodTuraev/sto</a>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> GitHub</p>
            <a href="https://github.com/ShahzodTuraev/ceo-office">github.com/ShahzodTuraev/ceo-office</a>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> URL</p>
            <a href="https://mever.me/">mever.me</a>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Frontend</p>
            <p>React js, Three js, Component Styles</p>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Backend</p>
            <p>Java, Spring Framework</p>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Deployment</p>
            <p>Netlify, on-site Server </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Matterport

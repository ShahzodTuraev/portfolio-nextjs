import React from 'react'
import styles from '../../styles/Home.module.css'
import { Carousel } from 'antd';
import Image from 'next/image';
import check from '../../public/assets/icons/check.svg'
import portfolio1 from '../../public/assets/images/portfolio-1.png'
import portfolio2 from '../../public/assets/images/portfolio-2.png'
import portfolio3 from '../../public/assets/images/portfolio-3.png'
import portfolio4 from '../../public/assets/images/portfolio-4.png'

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
const Resume = () => {
  return (
    <div>
      <h1 className={styles.projectTitle}>PORTFOLIO WEBSITE</h1>
      <p className={styles.projectDate}>2023.05(SELF Project)</p>
      <div className={styles.projectWrap}>
        <div className={styles.projectImg}>
          <div className={styles.corWrap}>
            <Carousel style={corusStyle}>
              <div>
                <Image style={contentStyle} src={portfolio1} alt='page1'/>
              </div>
              <div>
                <Image style={contentStyle} src={portfolio2} alt='page2'/>
              </div>
              <div>
                <Image style={contentStyle} src={portfolio3} alt='page3'/>
              </div>
              <div>
                <Image style={contentStyle} src={portfolio4} alt='page4'/>
              </div>
            </Carousel>
            <p className={styles.imgNumber}>5 pictures :</p>
          </div>
        </div>
      <div className={styles.projectContent}>
        <p>About :</p>
        <article>Matterport plays a central role in this project, offering a technology that presents realistic 3D models of buildings or areas in a portable format. One of the showcased locations is an Art Gallery, where visitors not only have the opportunity to view current art pieces directly but also explore previous art collections through a sensor monitor at the entrance (depicted in picture 1). However, the primary objective of the project goes beyond the gallery experience.
                Within the Matterport interface, users can click on specific points to access additional information about the art pictures or items on display (as shown in picture 2). Furthermore, there is a payment link available, which, when clicked, directs users to the payment section (depicted in picture 3), where online banking systems are utilized for convenient online transactions (as depicted in picture 4). The project website also features 3D modules of other buildings, including a café. In the virtual realm, visitors can simulate the real-life experience of purchasing a coffee (as portrayed in picture 5). Additionally, users have the option to reserve and schedule payments for future dates by selecting a reservation date.</article>                
        <p>My Role</p>
        <article>Developing all the Frontend part, Connecting Matterport events to the website</article>
        <br /><hr />
        <div className={styles.projectFeatures}>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Main Functions</p>
            <p>MatterPort, 3D Models, Toss API, Responsive Design</p>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> GitHub</p>
            <a href="https://github.com/ShahzodTuraev/art_gallery-jquery">github.com/ShahzodTuraev/art_gallery-jquery</a>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> URL</p>
            <a href="https://mever.me/art2">mever.me/art2</a>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Frontend</p>
            <p>jQuery</p>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Backend</p>
            <p>Java, Spring Framework</p>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Deployment</p>
            <p>on-site Server </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Resume

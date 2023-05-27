import React from 'react'
import styles from '../../styles/Home.module.css'
import { Carousel } from 'antd';
import Image from 'next/image';
import check from '../../public/assets/icons/check.svg'
import tesla1 from '../../public/assets/images/tesla-1.png'
import tesla2 from '../../public/assets/images/tesla-2.png'
import tesla3 from '../../public/assets/images/tesla-3.png'
import tesla4 from '../../public/assets/images/tesla-4.png'
import tesla5 from '../../public/assets/images/tesla-5.png'
import tesla6 from '../../public/assets/images/tesla-6.png'
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
const Tesla = () => {
  return (
    <div>
      <h1 className={styles.projectTitle}>TESLA-CLONE WEBSITE</h1>
      <p className={styles.projectDate}>2023.04(Self Project)</p>
      <div className={styles.projectWrap}>
        <div className={styles.projectImg}>
          <div className={styles.corWrap}>
            <Carousel style={corusStyle}>
              <div>
                <Image style={contentStyle} src={tesla1} alt='page1'/>
              </div>
              <div>
                <Image style={contentStyle} src={tesla2} alt='page2'/>
              </div>
              <div>
                <Image style={contentStyle} src={tesla3} alt='page3'/>
              </div>
              <div>
                <Image style={contentStyle} src={tesla4} alt='page4'/>
              </div>
              <div>
                <Image style={contentStyle} src={tesla5} alt='page5'/>
              </div>
              <div>
                <Image style={contentStyle} src={tesla6} alt='page6'/>
              </div>
            </Carousel>
            <p className={styles.imgNumber}>6 pictures :</p>
          </div>
        </div>
      <div className={styles.projectContent}>
        <p>Background :</p>
        <article>I have recently acquired knowledge of a new web development technology called Next.js, and I must say it's truly impressive and convenient, especially for front-end developers familiar with React.js. As part of my learning journey, I embarked on my first independent project using Next.js called 'Tesla - Clone.' To create the design, I took inspiration from the actual Tesla website.</article>
        <p>About :</p>
        <article>The project serves as an introduction to Tesla's automobile models and other products offered by the company (picture 1). When the "Order Now" button is clicked, it directs the user to a dedicated page displaying the product features (picture 2). On this page, users can choose the type or specific features of the desired product. The "Demo Drive" function allows users to explore different Tesla automobile types and select one for a demonstration drive (picture 3). The "Shop" function in the navigation bar showcases Tesla car equipment available for purchase (picture 4). User authentication is implemented using Firebase technology, allowing users to sign in and access the authorized page (picture 5). Additionally, the project incorporates Google Analytics tools to gather data about user interactions and behavior.</article>
        <br /><hr />
        <div className={styles.projectFeatures}>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Main Functions</p>
            <p>User Authority, Sign in, Sign out, Google Analytics, Responsive Design</p>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> GitHub</p>
            <a href="https://github.com/ShahzodTuraev/tesla-clone-next-js">github.com/ShahzodTuraev/tesla-clone-next-js</a>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> URL</p>
            <a href="https://tesla-x.vercel.app/">tesla-x.vercel.app/</a>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Frontend</p>
            <p>Next js, Module CSS</p>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Backend</p>
            <p>Firebase</p>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Deployment</p>
            <p>Vercel</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Tesla

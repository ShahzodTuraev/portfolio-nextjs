import React from 'react'
import styles from '../../styles/Home.module.css'
import { Carousel } from 'antd';
import Image from 'next/image';
import check from '../../public/assets/icons/check.svg'
import housing1 from '../../public/assets/images/houzing-1.png'
import housing2 from '../../public/assets/images/houzing-2.png'
import housing3 from '../../public/assets/images/houzing-3.png'
import housing4 from '../../public/assets/images/houzing-4.png'
import housing5 from '../../public/assets/images/houzing-5.png'
import housing6 from '../../public/assets/images/houzing-6.png'
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
      <h1 className={styles.projectTitle}>TESLA WEBSITE</h1>
      <p className={styles.projectDate}>2022.12(Team Project)</p>
      <div className={styles.projectWrap}>
        <div className={styles.projectImg}>
          <div className={styles.corWrap}>
            <Carousel style={corusStyle}>
              <div>
                <Image style={contentStyle} src={housing1} alt='page1'/>
              </div>
              <div>
                <Image style={contentStyle} src={housing2} alt='page2'/>
              </div>
              <div>
                <Image style={contentStyle} src={housing3} alt='page3'/>
              </div>
              <div>
                <Image style={contentStyle} src={housing4} alt='page4'/>
              </div>
              <div>
                <Image style={contentStyle} src={housing5} alt='page5'/>
              </div>
              <div>
                <Image style={contentStyle} src={housing6} alt='page6'/>
              </div>
            </Carousel>
            <p className={styles.imgNumber}>6 images :</p>
          </div>
        </div>
      <div className={styles.projectContent}>
        <p>Background :</p>
        <article> After completing my front-end course, I participated in an internship as a front-end developer. During the internship, we worked on a project called 'Houzing' under the guidance of a senior developer. The purpose of the project was to test and apply the foundational knowledge of web development for new frontend developers, such as myself.</article>
        <p>About :</p>
        <article>The project offers a platform that enables users to borrow or rent houses based on their preferences, including type, price, size, location, and other features (picture 1). Initially, users are required to register on the website in order to access all the pages and features (picture 3). Upon registration, each user is provided with a personalized user page (picture 4) where they can add new rental properties, such as houses. Adding a new house involves providing comprehensive information about the property (picture 5). The added house card is then displayed on the 'Properties' page (picture 2), visible to all users. Alternatively, if a user intends to purchase a house, they can click on a house box on the 'Properties' page to navigate to the 'Details' page (picture 6). Here, they have the option to directly contact the house owner for rental inquiries.</article>
        <br /><hr />
        <div className={styles.projectFeatures}>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Main Functions</p>
            <p>User Authority, Sign in, Sign out, Saving data, data visible for all,  direct contact</p>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> GitHub</p>
            <a href="https://github.com/ShahzodTuraev/houzing">github.com/ShahzodTuraev/houzing</a>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> URL</p>
            <a href="https://webhouzing.netlify.app">webhouzing.netlify.app</a>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Frontend</p>
            <p>React js, Styled Components, React Query, Ant Design</p>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Backend</p>
            <p>Java, Spring Framework</p>
          </div>
          <div className={styles.featureItem}>
            <p><Image width={20} height={15} src={check} alt='check'/> Deployment</p>
            <p>Netlify</p>
          </div>
          <h4>( Due to some beckend servers issues, the site runs only front part )</h4>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Tesla

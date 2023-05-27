import React from 'react'
import styles from '../../styles/Home.module.css'
import { Carousel } from 'antd';
import Image from 'next/image';
import pic from '../../public/assets/images/deployTop.png'
const contentStyle = {
    margin: 0,
    height: '570px',
    width: '480px',
    color: '#e41313',
    textAlign: 'center',
    background: '#364d79',
  };
  const corusStyle = {
    height: "600px",
    width:'480px',
    background:'#242323'
  }
const Houzing = () => {
  return (
    <div>
      <h1 className={styles.projectTitle}>HOUSING WEBSITE</h1>
      <p className={styles.projectDate}>2022.12(Team Project)</p>
      <div className={styles.projectWrap}>
        <div className={styles.projectImg}>
            <Carousel style={corusStyle}>
              <div>
                <Image style={contentStyle} src={pic} alt='page1'/>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Houzing

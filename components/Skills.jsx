import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import linkIcon from '../public/assets/icons/black-link.png'
import frontTop from '../public/assets/images/frontTop.png'
import frontBottom from '../public/assets/images/frontBottom.png'
import node from '../public/assets/images/node.png'
import express from '../public/assets/images/express.png'
import mongo from '../public/assets/images/mongodb.png'
import firebase from '../public/assets/images/firebase.png'
import deployTop from '../public/assets/images/deployTop.png'
import deployBottom from '../public/assets/images/deployBottom.png'
import git from '../public/assets/images/git.png'
import github from '../public/assets/images/github.png'
import gitlab from '../public/assets/images/gitlab.png'
import chatgpt from '../public/assets/images/chatgpt.png'
import google from '../public/assets/images/google.png'
import matterport from '../public/assets/images/matterport.png'

const Skills = () => {
 
  return (
    <div className={styles.skills}>
      <div className={styles.main}>
        <div className={styles.titleBox}>
          <Image className={styles.linkIcon} src={linkIcon} alt='link icon'/>
          <h1 style={{borderBottom: '1px solid #000'}} className={styles.pageTitle}>SKILLS</h1>
        </div>
        <div className={styles.skillBox}>
          <div className={styles.frontBox }>
            <h2 className={styles.skillTitle}>Frontend</h2>
            <Image width={224} src={frontTop} alt='frontTop'/>
            <Image width={224} src={frontBottom} alt='frontBottom'/>
          </div>
          <div className={styles.backBox}>
            <div className={styles.backendBox}>
            <h2 className={styles.skillTitle}>Backend</h2>
              <Image width={224} src={node} alt='node'/>
              <Image width={224} src={express} alt='express'/>
              <Image width={224} src={mongo} alt='mongo'/>
              <Image width={224} src={firebase} alt='firebase'/>
            </div>
            <div className={styles.deployBox}>
            <h2 className={styles.skillTitle}>Deployment</h2>
              <Image width={224} src={deployTop} alt='deploy'/>
              <Image width={224} src={deployBottom} alt='deploy'/>
            </div>
          </div>
          <div className={ styles.versionBox}>
          <div className={styles.controlBox}>
          <h2 className={styles.skillTitle}>Version Control</h2>
            <Image width={170} height={50} src={git} alt='git'/>
            <Image width={224} src={github} alt='github'/>
            <Image width={224} src={gitlab} alt='gitlab'/>
          </div>
          <div className={styles.otherBox}>
          <h2 className={styles.skillTitle}>Others</h2>
            <Image width={180} height={50} src={chatgpt} alt='chatgpt'/>
            <Image width={224}  src={matterport} alt='matterport'/>
            <Image width={200} height={60} src={google} alt='google'/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

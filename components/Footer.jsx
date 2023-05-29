import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import github from '../public/assets/icons/github.webp'
import gmail from '../public/assets/icons/gmail.png'
import telegram from '../public/assets/icons/telegram.png'
import linkedin from '../public/assets/icons/linkedin.png'
import instagram from '../public/assets/icons/instagram.png'
import facebook from '../public/assets/icons/facebook.png'

const Footer = () =>{
  return (
    <div className={styles.footer}>
        <div className={styles.main}>
          <div className={styles.iconBox}>
            <a target='_blank' href="https://github.com/ShahzodTuraev">
              <Image className={styles.logoLink} src={github} alt='logo'/>
            </a>
            <a target='_blank' href="mailto:turayevshahzodbek@gmail.com">
              <Image className={styles.logoLink} src={gmail} alt='logo'/>
            </a>
            <a target='_blank' href="https://t.me/shahzodbek_turaev">
              <Image className={styles.logoLink} src={telegram} alt='logo'/>
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/shahzod-turaev-a71b0718b/">
              <Image className={styles.logoLink} src={linkedin} alt='logo'/>
            </a>
            <a target='_blank' href="https://www.instagram.com/shahzodbek0909/">
              <Image className={styles.logoLink} src={instagram} alt='logo'/>
            </a>
            <a target='_blank' href="https://www.facebook.com/shahzodbek.torayev.9/">
              <Image className={styles.logoLink} src={facebook} alt='logo'/>
            </a>
          </div>
          <p>© 2023. Shahzod Turaev. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer

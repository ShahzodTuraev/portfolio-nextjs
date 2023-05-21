import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.navbar}>
            <Link className={styles.logo} href='/'>SHT's Portfolio</Link>
            <ul className={styles.navbarNav}>
                <li className={styles.items}>About me</li>
                <li className={styles.items}>Skills</li>
                <li className={styles.items}>Projects</li>
                <li className={styles.items}>Career</li>
                <li className={styles.items}>CV</li>
            </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar

import React from 'react'
import Head from 'next/head'
import styles from '../styles/Resume.module.css'
import { Dropdown } from "@nextui-org/react";
const Resume = () => {
  return (
    <>
        <Head>
          <title>resume | SHT's Portfolio</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <div className={styles.container}>
        <Dropdown>
            <Dropdown.Button >Trigger</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="new">New file</Dropdown.Item>
                <Dropdown.Item key="alfa">New file</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
      
    </>
  )
}

export default Resume

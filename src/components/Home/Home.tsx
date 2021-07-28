import React from 'react'
import styles from './Home.module.scss'
export default function Home() {
    return (
        <div className={styles.welcome}>
            <h3 className={styles.h3}>Home</h3>
            <div>
                <p>Welcome to Product Management System</p>

                <p>Happy Shopping!!!!!</p>
            </div>
        </div>
    )
}

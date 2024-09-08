import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import { Playfair_Display } from 'next/font/google';


const playfairDisplay = Playfair_Display({
    subsets: ['latin'], // Specify the subsets you want
    weight: ['400', '700'], // Specify the weights you need
  });

const NavBar = () => {
    return(
        
        <div className={styles.navbar}>
            
            <div className={`${styles.title} ${playfairDisplay.className}`}>
                <Link href="/home" style={{ textDecoration:'none', color: 'black'}}>RecipEASY</Link>
            </div>
            <div className={styles.navButtonsContainer}>
                <div className={styles.navButtons}>
                    <Link href="/search"  style={{ textDecoration:'none', color: 'black' }}>search</Link>
                </div>

                <div className={styles.navButtons}>
                    <Link href="/explore"  style={{ textDecoration:'none', color: 'black' }}>explore</Link>
                </div>

                <div className={styles.navButtons}>
                    <Link href="/saved"  style={{ textDecoration:'none', color: 'black' }}>saved</Link>
                </div>

                <div className={styles.navButtons}>
                    <Link href="/account"  style={{ textDecoration:'none', color: 'black'}}>log in </Link>
                </div>

                <div className={styles.navButtons}>
                    <Link href="/account"  style={{ textDecoration:'none', color: 'black' }}>sign up</Link>
                </div>
            </div>

        </div>
    )
}

export default NavBar;
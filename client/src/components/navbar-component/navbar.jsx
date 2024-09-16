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
            <Link href="/home">
                <svg id={styles.logo} width="60" height="60" viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="61" cy="61" r="61" fill="#55828B"/>
                    <circle cx="60.5" cy="61.5" r="53.5" fill="#BCD1D5"/>
                    <path d="M108.926 69.2263C108.752 68.6694 107.886 67.8101 107.115 67.4251C105.766 66.7514 103.418 66.112 98.1281 64.9914C94.4308 64.2077 93.5002 64.0633 91.7486 64.0083C88.9271 63.9258 87.3447 64.4483 85.6279 66.0432C84.8317 66.7857 84.3142 67.4182 83.8564 68.2019C83.2543 69.24 83.0602 69.3982 82.2292 69.5563C81.3832 69.7213 78.6762 69.7557 68.1118 69.7625H57V70.3813V71H82.6124H108.22L108.469 70.78C108.946 70.3538 109.11 69.8107 108.926 69.2263Z" fill="black"/>
                    <path d="M58.3988 10.0274C58.3073 10.1441 58.2997 10.3892 58.2082 15.7169C58.1395 19.7783 58.048 23.7872 57.9489 27.125C57.9108 28.3329 57.8269 28.7939 57.5982 29.004L57.4533 29.1382L57.3313 28.9048C57.1102 28.508 57.0797 28.0645 56.9882 24.4116C56.9424 22.4509 56.8738 19.4865 56.8357 17.8176C56.7976 16.1487 56.7594 13.8612 56.7518 12.7408C56.7442 10.6284 56.7061 10.0799 56.5612 10.0449C56.4621 10.0216 56.363 10.2783 56.1418 11.1069C55.997 11.6438 55.9817 12.0289 55.9207 15.9795C55.8063 23.0694 55.6538 27.0842 55.4556 28.082C55.2345 29.1849 54.7312 29.3308 54.0298 28.4963L53.8391 28.2629L53.9306 21.3772C53.984 17.59 54.0526 13.8204 54.0831 12.9976C54.1518 11.4046 54.0908 10.2375 53.9459 10.1266C53.8163 10.0274 53.6638 10.2025 53.4732 10.6693C53.2597 11.2003 52.9699 13.7037 52.6039 18.2844C52.5429 19.0839 52.4057 20.7295 52.2989 21.9315C51.8414 27.1775 51.9024 29.7684 52.5277 31.7641C52.8632 32.8554 53.3054 33.5848 54.0145 34.215C55.4861 35.5221 56.3782 37.1735 56.6069 39C56.6603 39.426 56.6832 44.9696 56.6832 55.3098V63.1438V70.9778L57.1941 70.9953C57.4838 71.007 57.8574 70.9953 58.0328 70.9778L58.3607 70.9428L58.3835 54.7671L58.4064 38.5915L58.5665 38.0372C59.024 36.4849 59.7636 35.2945 60.8845 34.2909C61.8681 33.4214 62.3637 32.4994 62.6992 30.918C63.0728 29.2141 63.0957 26.2731 62.783 22.6901C62.6992 21.7098 62.5238 19.6616 62.4018 18.1386C61.9596 12.8167 61.7689 11.2178 61.5173 10.6051C61.2962 10.0741 61.1666 9.95738 61.0141 10.1558C60.8845 10.325 60.8845 11.9472 61.0141 16.7672C61.0598 18.7221 61.1056 22.1241 61.1056 24.3299V28.3329L60.8692 28.6072C60.5871 28.9281 60.2592 29.0857 60.0457 28.9923C59.8246 28.9048 59.6035 28.3913 59.512 27.7669C59.3824 26.8974 59.2909 24.7734 59.1994 20.7645C58.9935 11.3695 58.9935 11.5096 58.8181 10.8794C58.6199 10.1616 58.4903 9.9107 58.3988 10.0274Z" fill="black"/>
                </svg>
            </Link>
            <div className={`${styles.title} ${playfairDisplay.className}`}>
                <Link href="/home" style={{ textDecoration:'none', color: '#F0F2EF'}}> Recip<i>EASY</i></Link>

                
            </div>
            <div className={styles.navButtonsContainer}>
                <div className={styles.navButtons}>
                    <Link href="/search"  style={{ textDecoration:'none', color: 'rgb(243, 238, 238)' }}>search</Link>
                </div>

                <div className={styles.navButtons}>
                    <Link href="/explore"  style={{ textDecoration:'none', color: 'rgb(243, 238, 238)' }}>explore</Link>
                </div>

                <div className={styles.navButtons}>
                    <Link href="/saved"  style={{ textDecoration:'none', color: 'rgb(243, 238, 238)' }}>saved</Link>
                </div>

                <div className={styles.navButtons}>
                    <Link href="/account"  style={{ textDecoration:'none', color: 'rgb(243, 238, 238)'}}>log in </Link>
                </div>

                <div className={styles.navButtons}>
                    <Link href="/account"  style={{ textDecoration:'none', color: 'rgb(243, 238, 238)'}}>sign up</Link>
                </div>
            </div>

        </div>
    )
}

export default NavBar;
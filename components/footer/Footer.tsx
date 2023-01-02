import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <p className={styles.pFooter}>Made with</p>
        <div className={styles.footerImageDiv}>
          <Image src="/heart.ico" className={styles.imageFooter} alt="heart icon" width="25" height="25" />
        </div>
        <p className={styles.pFooter}>by</p>
        <div className={styles.footerImageDiv}>
          <a href='https://urbanobaz.com/'>
            <Image src="/favicon.ico" className={styles.imageFooter} alt="Icon" width="25" height="25" />
          </a>
        </div> 
      </div>
    </footer>
  )
    
}

export default Footer;
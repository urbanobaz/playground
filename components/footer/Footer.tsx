import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <p className={styles.pFooter}>Made with</p>
        <div className={styles.footerImageDiv}>
          <img src="/heart.ico" className={styles.imageFooter} />
        </div>
        <p className={styles.pFooter}>by</p>
        <div className={styles.footerImageDiv}>
          <a href='https://urbanobaz.com/'>
            <img src="/favicon.ico" className={styles.imageFooter} />
          </a>
        </div> 
      </div>
    </footer>
  )
    
}

export default Footer;
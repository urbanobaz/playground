import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

type Props = {
    children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Playground</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles:wght@400;700&family=Nanum+Pen+Script&display=swap" rel="stylesheet" />
      </Head>

      <nav className={styles.nav}>
        <Link href='/' className={styles.link}>Home</Link>
        <Link href='/shenzhen' className={styles.link}>Shenzhen</Link>
      </nav>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <p className={styles.pFooter}>Made with</p>
          <div className={styles.footerImageDiv}>
            <img src="/heart.ico" className={styles.imageFooter} />
          </div>
          <p className={styles.pFooter}>by</p>
          <div className={styles.footerImageDiv}>
            <img src="/favicon.ico" className={styles.imageFooter} />
          </div> 
        </div>
      </footer>
    </div>
  )
}

export default Layout;
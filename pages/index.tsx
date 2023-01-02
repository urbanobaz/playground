import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (<>
      <h1 className={styles.title}>
        Frontend Playground <Image src="/favicon.ico" className={styles.image} alt="title picture" width="50" height="50" />
      </h1>

      <div className={styles.grid}>
        <Link href="/shenzhen" className={styles.card}>
          <h2>See more projects</h2>
          <p>More projects description.</p>
        </Link>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Technologies used</h2>
          <p>Breakdown of our process.</p>
        </a>
      </div>
    </>
  )
}

export default Home;
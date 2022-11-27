import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (<>
      <h1 className={styles.title}>
        Frontend Playground <img src="/favicon.ico" className={styles.image} />
      </h1>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>See more projects</h2>
          <p>More projects description.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Technologies used</h2>
          <p>Breakdown of our process.</p>
        </a>
      </div>
    </>
  )
}

export default Home;
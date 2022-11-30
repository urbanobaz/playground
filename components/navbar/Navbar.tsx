import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/' className={styles.link}>Home</Link>
      <Link href='/shenzhen' className={styles.link}>Shenzhen</Link>
      <Link href='/colors' className={styles.link}>Colors</Link>
      <Link href='/daysOfOurLives' className={styles.link}>Days</Link>
    </nav>
  )
    
}

export default Navbar;
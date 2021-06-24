import styles from './Header.module.css';
import Link from 'next/link';

export default function Header () {
    return(
        <header className={styles.header}>
           <Link href="/">
               <a href="../pages/index..js">
                    <img src="/logo.jpg"/>
               </a>
            </Link>
        </header>
    )
}
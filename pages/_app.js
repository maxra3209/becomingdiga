import '../styles/globals.scss'
import 'carbon-components/scss/globals/scss/styles.scss';
import styles from '../styles/Footer.module.scss'
import style from '../styles/Header.module.scss'


function MyApp({ Component, pageProps }) {
  return <div>


<nav className={style.header}>
  <a  href="https://www.rank.health/"
      target="_blank"
      rel="noopener noreferrer">
      <img src="/Logo_plain_black no background.png" alt="rank.health Logo" className={styles.logoheader}/>
  </a>

  <a  href="https://www.rank.health/about"
      target="_blank"
      rel="noopener noreferrer">
      about
  </a>

</nav>


<Component {...pageProps} />


<footer className={styles.footer}>
  <a
    href="https://www.rank.health/"
    target="_blank"
    rel="noopener noreferrer"
  >
    With love 🖤{' '}
    <img src="/Logo_full_black no background.png" alt="rank.health Logo" className={styles.logofooter} />
  </a>

  <a
    href="https://www.rank.health/imprint"
    target="_blank"
    rel="noopener noreferrer"
  >
      Imprint
  </a>

  <a
    href="https://www.rank.health/data-privacy"
    target="_blank"
    rel="noopener noreferrer"
  >
      Data Privacy
  </a>

</footer>
</div>

}



export default MyApp

import '../styles/globals.scss'
import 'carbon-components/scss/globals/scss/styles.scss';
import styles from '../styles/Footer.module.scss'


function MyApp({ Component, pageProps }) {
  return <div>
<Component {...pageProps} />
<footer className={styles.footer}>
  <a
    href="https://www.rank.health/"
    target="_blank"
    rel="noopener noreferrer"
  >
    With love 🖤{' '}
    <img src="/Logo_full_black no background.png" alt="rank.health Logo" className={styles.logo} />
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

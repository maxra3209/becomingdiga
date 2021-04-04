import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          BECOMING <a>DiGA</a>
        </h1>

        <p className={styles.description}>
          How to get your product listed with BfArM
        </p>

        <div className={styles.grid}>
          <a
            href="/introduction"
            className={styles.card}>
            <h3>1. What is DVG? &rarr;</h3>
            <p>Learn about benefits and costs of becoming a DiGA.</p>
          </a>

          <a
            href="https://www.notion.so/Steps-to-becoming-listed-d009d0a92a744a298417a4140e74112a"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}>
            <h3>2. Steps to become DiGA &rarr;</h3>
            <p>What do you have to do to become DVG compliant?</p>
          </a>

          <a
            href="https://www.notion.so/771d29a875e540deb7f1be572c59a170?v=6b2a2c21dd97483495befd9a553b2e33"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>3. Requirements list &rarr;</h3>
            <p>An interpretation of BfArM's requirements with helpful links.</p>
          </a>

          <a
            href="https://rank.health/contact"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>4. Still questions left? &rarr;</h3>
            <p>
              Feel free to shoot me a text in case any questions remain open.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

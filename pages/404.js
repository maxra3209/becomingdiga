import styles from '../styles/404.module.scss'
import { Button } from 'carbon-components-react';
import Link from 'next/link'

function Error({ statusCode }) {
  return (
    <div className={styles.title}>
      <style jsx>{'body { background-color: black; }'}</style>
      <p>
      <img src="/404.gif" alt="Laika in Space" className={styles.img} />
        {statusCode
          ? `Seems like you're lost in ${statusCode}`
          : 'An error occurred on client'}
      </p>

      <div className={styles.space}>
        <Link href="/">
          <Button>
          Back to Earth
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Error

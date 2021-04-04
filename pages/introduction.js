import styles from '../styles/introduction.module.scss'
import { Button } from 'carbon-components-react';
import Link from 'next/link'

function About() {
  return <div>
  <main className={styles.main}>

    <h1 className={styles.title}>
      INTRO TO BECOMING A DiGA
    </h1>

    <div className={styles.container}>
      <p className={styles.description}>
        Through DVG the German lawmaker gives you a chance to make your product prescribable by doctors like any other medication and be reimbursed
        by public health insurances. That's great news 🎉. Because for the first time many health tech startups got the chance to build their business
        around a working business model. Because truth is: Nobody pays for health apps and selective contracts with health insurances rarely ever
        bring enough revenue because of the insurances' bargaining power.
      </p>
      <p className={styles.description}>
        Aye, so much for the nice part. Because becoming a digital health application (DiGA) also comes at a price. High regulatory demands will
        increase product development time (in my experience double it at least), entail lots of documentation requirements and restrict your freedom
        in building a product with great UX and added services that actually helps users.
      </p>
      <p className={styles.description}>
        However, if you decide you want your product to become a listed DiGA with BfArM (the authority which checks whether you actually fulfill all
        requirements) then you need to fulfill at least this
      </p>
      <p className={styles.description}>
        <ul>
        <li>→ have a product which does not create its medical value because of a added service such as coaching, therapists, etc.</li>
        <li>→ be a medical product (which in turn requires you to be MDR compliant / CE certified) of risk class I or IIa </li>

        </ul>
      </p>
      <p className={styles.description}>
        Start by following my step-by-step guide to becoming a DiGA
      </p>
    </div>

    <a
     href="https://www.notion.so/Steps-to-becoming-listed-d009d0a92a744a298417a4140e74112a"
     target="_blank"
     rel="noopener noreferrer">
      <Button>
        step-by-step guide
      </Button>
    </a>

  </main>
</div>
}

export default About

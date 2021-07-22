import styles from '../styles/Introduction.module.scss'
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
        With DVG the German lawmaker provides you an opportunity to make your product prescribable by doctors and be reimbursed
        by public health insurances. That's great news 🎉. For the first time many health tech startups got the chance to be build around a working business model.
        Because, let's face it: Nobody pays for health apps and selective contracts with health insurances rarely ever pay off.
      </p>
      <p className={styles.description}>
        Aye, so much for the good part. Because becoming a digital health application (DiGA) also comes at a price. High regulatory demands from many institutions will
        increase product development time (in my experience double it at least), entail lots of documentation requirements and restrict your freedom
        in building a product with great UX and added services that actually helps users.
        <br /><br />
      </p>
      </div>
      <div>
      <a><img src="/DVG and environment.png" alt="DVG and environment" className={styles.image} /></a>
      </div>
      <div className={styles.container}>
      <p className={styles.description}>
        <br /><br />
        Yeh, don't worry. There are more laws which apply to you and more regulation you have to follow. But these four require the largest chunk of work.
        If you decide you want to become a DiGA listed with BfArM (the authority which checks whether you actually fulfill all DVG requirements)
        then make sure your product is able to do at least this:
        <br /><br />
        ► Your product has measurable positive medical impact on people with a certain medical condition (or at least you believe it has) <br />
        ► The risk entailed by using your product does not cause significant physical or psychological harm (you are of low risk-class, I or IIa according to MDR) <br />
        Basically this means you are MDR compliant and carry a CE certification, which TÜV (or any other institution like them) will verify<br />
        ► Your product's effect does NOT rely on added services, like interaction with therapists, coaches, doctors etc. The effect must stem from the app itself.<br />
        There is a grey area, which I describe in <a
          href="https://www.rank.health/faq"
          target="_blank"
          rel="noopener noreferrer"
        >→the FAQ</a> because it's frequently asked<br /><br />
      </p>
      <p className={styles.description}>
        Got all this? Still want to become DiGA? Cool, then just follow this step-by-step guide and you'll be good to go.
        <br /><br /><br />
      </p>
    </div>

    <a
     href="https://www.notion.so/Steps-to-becoming-listed-d009d0a92a744a298417a4140e74112a"
     target="_blank"
     rel="noopener noreferrer">
      <Button>
        this step-by-step guide
      </Button>
    </a>

  </main>
</div>
}

export default About

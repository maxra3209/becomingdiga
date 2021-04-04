import styles from '../styles/about.module.scss'
import { Button } from 'carbon-components-react';
import Link from 'next/link'

function About() {
  return <div>
  <main className={styles.main}>

    <h1 className={styles.title}>
      ABOUT THIS PROJECT
    </h1>

    <div className={styles.container}>
    <p className={styles.description}>
      Just a few years ago I started my career as PO in a health tech startup. It was clear to me that I didn't want to spend my life working for
      companies which build products that actually just waste people's precious life time, such as mobile games.
      <br></br>Instead, I wanted to help fantastic teams to build great products that actually have an positive impact on people's lives and users love to use.
      Turns out that since then I basically spent most of my time (and my employers' money) on regulatory issues - either as product guy or regulatory consultant for DiGAs.
    </p>
    <p className={styles.description}>
      And that's exactly the point: Starting a health tech business in Germany is rough. Why? Not only because it's hard to find a working business model,
      but because suddenly so many regulatory requirements apply to you. And the toughest part isn't even to implement these requriements.
      But just to understand which of the many apply and what stuff like "state of the art transport encryption" (wrapped in complicated lawmaker's
      language nobody understands) actually means for practical implementation.
      <br></br>So, right from the start you need to burn hundred of thousands of your valuable funding on regulatory consultants, TÜV, maybe even
      legal counsel or technical writers and large parts of your employee's time to become regulatory compliant, sometimes even before having something
      out on the market.
      <br></br> But this would not even be an issue if the legal requirements would only help making your product and processes more safe.
      However the worst part is: A lot of the required documentation is just excessive regulatory frenzy and does not increase you product's security by a
      bit (literally 😄). I've never seen any "Datenschutzfolgenabschätzung" that actually led to a new feature or tool which helps securing your user's precious health data.
    </p>
    <p className={styles.description}>
      So, to make life a little easier for everyone (and hopefully save you some money) I decided to publish all of my practical experience as DiGA consultant
      on this website - for free (yes, free lunches are possible no matter what some Economists say about this). You're welcome. Hopefully it helps you
      spending more time on what actually matters: Your users.
      <br></br>
      <br></br>
      In case you still want to know more about me, click on the button.
    </p>
    </div>

    <a
     href="https://www.rank.health/about"
     target="_blank"
     rel="noopener noreferrer">
      <Button>
        the button
      </Button>
    </a>

  </main>
</div>
}

export default About

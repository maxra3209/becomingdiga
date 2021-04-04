import Head from 'next/head'
import '../styles/globals.scss'
import 'carbon-components/scss/globals/scss/styles.scss';
import styles from '../styles/Footer.module.scss'
import style from '../styles/Header.module.scss'
import {
  HeaderContainer,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderPanel,
  Switcher,
  SwitcherItem,
  SwitcherDivider,
} from 'carbon-components-react';

export default function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <title>Becoming DiGA</title>
    <link rel="icon" href="/Logo_plain_black no background.png" />
  </Head>
    <HeaderContainer
      render={ ({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Becoming DiGA">
          <img src="/Logo_plain_white no background.png" alt="rank.health Logo" className={style.logoheader} />
          <HeaderName href="/" prefix="">
            Becoming DiGA
          </HeaderName>

          <HeaderGlobalBar>
            <HeaderNavigation aria-label="Becoming DiGA">
              {/* maybe needed for later: <HeaderMenuItem isCurrentPage href="#">Link 1</HeaderMenuItem> , also isSelected for switcher */}
              <HeaderMenuItem href="/about">About this project</HeaderMenuItem>
              <HeaderMenu aria-label="Link 4" menuLinkName="Resources">
                <HeaderMenuItem href="https://www.notion.so/Schutzbedarfsanalyse-855b66449afe4fe9aa25578e0549bf8e" target="_blank"
                                rel="noopener noreferrer">Schutzbedarfsanalyse</HeaderMenuItem>
                <HeaderMenuItem href="https://www.notion.so/ISMS-9447d076fc364dd4bae4fb5190b716cd" target="_blank"
                                rel="noopener noreferrer">ISMS</HeaderMenuItem>
                <HeaderMenuItem href="/resources/tools">Non-US-Provider Tools</HeaderMenuItem>
                <HeaderMenuItem href="/resources/flows">App Start & Auth Flows</HeaderMenuItem>
                <HeaderMenuItem href="https://www.notion.so/Interoperability-4b6cb83365fc4f2a9d1499fc90159da0" target="_blank"
                                rel="noopener noreferrer">Interoperability</HeaderMenuItem>
                <HeaderMenuItem href="https://www.notion.so/Integrate-w-Insurances-4c00f1628f8543819bd8aa198b2a82d3" target="_blank"
                                rel="noopener noreferrer">Integrate w Insurances</HeaderMenuItem>
              </HeaderMenu>
              <HeaderMenuItem href="https://www.rank.health/contact" target="_blank"
                              rel="noopener noreferrer">Reach out</HeaderMenuItem>
            </HeaderNavigation>
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />

            <HeaderPanel aria-label="Header Panel" expanded={isSideNavExpanded}>
              <Switcher aria-label="Switcher Container">
                <SwitcherItem aria-label="Link 1" href="/about">
                  About
                </SwitcherItem>
                <SwitcherItem aria-label="Link 2" href="#">
                  Link1
                </SwitcherItem>
                <SwitcherDivider />
                <SwitcherItem href="#" aria-label="Link 3">
                  Link 2
                </SwitcherItem>
                <SwitcherItem href="#" aria-label="Link 4">
                  Link 3
                </SwitcherItem>
                <SwitcherItem href="#" aria-label="Link 5">
                  Link 4
                </SwitcherItem>
                <SwitcherDivider />
                <SwitcherItem href="https://www.rank.health/contact" aria-label="Link 6">
                  Reach out
                </SwitcherItem>
              </Switcher>
            </HeaderPanel>
          </HeaderGlobalBar>
        </Header>
      )}
    />

    <Component {...pageProps} />

    <footer className={styles.footer}>
      <p>With 🖤 by © rank.health{' '}
      <img src="/Logo_plain_black no background.png" alt="rank.health Logo" className={styles.logofooter} />
      </p>

      <p>2020-2021 All rights reserved</p>

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

      <a
      href="https://www.rank.health/cookies"
      target="_blank"
      rel="noopener noreferrer">
      No cookies for you 🍪
      </a>

      <a
        href="https://github.com/maxra3209/"
        target="_blank"
        rel="noopener noreferrer"
      >
      <img src="/Github.png" alt="Github Logo" className={styles.logofooter} />
      </a>

      <a
        href="https://www.linkedin.com/in/max-rank/"
        target="_blank"
        rel="noopener noreferrer"
      >
      <img src="/Linkedin.png" alt="Linkedin Logo" className={styles.logofooter} />
      </a>

    </footer>
</>
}

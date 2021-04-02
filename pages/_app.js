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
    <HeaderContainer
      render={ ({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Becoming DiGA">
          <img src="/Logo_plain_white no background.png" alt="rank.health Logo" className={style.logoheader} />
          <HeaderName href="#" prefix="">
            Becoming DiGA
          </HeaderName>

          <HeaderGlobalBar>
            <HeaderNavigation aria-label="Becoming DiGA">
              {/* maybe needed for later: <HeaderMenuItem isCurrentPage href="#">Link 1</HeaderMenuItem> , also isSelected for switcher */}
              <HeaderMenuItem href="#">About this project</HeaderMenuItem>
              <HeaderMenu aria-label="Link 4" menuLinkName="Templates">
                <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
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
                <SwitcherItem aria-label="Link 1" href="#">
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

    </footer>
</>
}

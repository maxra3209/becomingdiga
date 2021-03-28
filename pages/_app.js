import '../styles/globals.scss'
import 'carbon-components/scss/globals/scss/styles.scss';
import styles from '../styles/Footer.module.scss'
import style from '../styles/Header.module.scss'

import { HeaderContainer } from 'carbon-components-react';
import {
  Content,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderPanel,
  HeaderSideNavItems,
  SkipToContent,
  SideNav,
  // Temporarily commented these out until they're needed again
  // SideNavHeader,
  // SideNavDetails,
  // SideNavSwitcher,
  SideNavDivider,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  Switcher,
  SwitcherItem,
  SwitcherDivider,
} from 'carbon-components-react';
import { Modal } from 'carbon-components-react';
import { Button } from 'carbon-components-react';

SideNav.displayName = 'SideNav';
SideNavMenu.displayName = 'SideNavMenu';
SideNavMenuItem.displayName = 'SideNavMenuItem';

function MyApp({ Component, pageProps }) {
  return <div>
  export const HeaderBaseWNavigation = withReadme(readme, () => (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Becoming DiGA">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <img src="/Logo_plain_white no background.png" alt="rank.health Logo" className={style.logoheader} />
          <HeaderName href="#" prefix="">
            Becoming DiGA
          </HeaderName>
          <HeaderNavigation aria-label="Becoming DiGA">
            {/* }<HeaderMenuItem isCurrentPage href="#">Link 1</HeaderMenuItem> */}
            <HeaderMenuItem href="#">About this project</HeaderMenuItem>
            <HeaderMenu aria-label="Link 4" menuLinkName="Templates">
              <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
            </HeaderMenu>
            <HeaderMenuItem href="https://www.rank.health/contact">Reach out</HeaderMenuItem>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}>
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                  <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                </HeaderMenu>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
        </Header>
      )}
    />
  ));


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

</footer>
</div>

}

export default MyApp

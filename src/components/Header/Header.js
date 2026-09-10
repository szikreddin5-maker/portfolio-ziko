import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import {
  HeaderBar,
  Container,
  Logo,
  LogoCrest,
  LogoImg,
  LogoName,
  DesktopNav,
  NavLink,
  RightGroup,
  SocialIcons,
  CvButton,
  MenuButton,
  MobileMenu,
  MobileLink,
} from './HeaderStyles';

const navItems = [
  { href: '#projects', label: 'Projeler' },
  { href: '#skills', label: 'Yetenekler' },
  { href: '#hobbies', label: 'Hobiler' },
  { href: '#about', label: 'Hakkımda' },
  { href: '#contact', label: 'İletişim' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <HeaderBar>
      <Container>
        <Logo href="#" onClick={closeMenu} aria-label="Zikreddin Şık">
          <LogoCrest>
            <LogoImg src="/logo-mark.png?v=3" alt="" />
          </LogoCrest>
          <LogoName>Zikreddin Şık</LogoName>
        </Logo>

        <DesktopNav>
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </DesktopNav>

        <RightGroup>
          <SocialIcons href="https://github.com/szikreddin5-maker" target="_blank" rel="noreferrer" aria-label="GitHub">
            <AiFillGithub size="2.6rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/zikreddin%C5%9F%C4%B1k/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <AiFillLinkedin size="2.6rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/zikreddin00/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <AiFillInstagram size="2.6rem" />
          </SocialIcons>
          <CvButton href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            CV İndir
          </CvButton>
          <MenuButton type="button" onClick={() => setOpen((prev) => !prev)} aria-label="Menü">
            {open ? <AiOutlineClose size="2rem" /> : <AiOutlineMenu size="2rem" />}
          </MenuButton>
        </RightGroup>
      </Container>

      <MobileMenu open={open}>
        {navItems.map((item) => (
          <MobileLink key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </MobileLink>
        ))}
      </MobileMenu>
    </HeaderBar>
  );
};

export default Header;

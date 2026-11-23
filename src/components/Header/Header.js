import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {
  HeaderBar, Container, Logo, LogoCrest, LogoImg, LogoName, DesktopNav,
  NavLink, RightGroup, SocialIcons, CvButton, MenuButton, MobileMenu, MobileLink,
} from './HeaderStyles';

const navItems = [
  { href: '#projects', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <HeaderBar>
      <Container>
        <Logo>
          <LogoCrest as="a" href="#top" onClick={closeMenu} aria-label="Back to top">
            <LogoImg src="/logo-mark.png" alt="" />
          </LogoCrest>
          <LogoName href="#top" onClick={closeMenu}>Zikreddin Şık</LogoName>
        </Logo>
        <DesktopNav aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
          ))}
        </DesktopNav>
        <RightGroup>
          <SocialIcons href="https://github.com/szikreddin5-maker" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <AiFillGithub size="2.6rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/zikreddin%C5%9F%C4%B1k/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <AiFillLinkedin size="2.6rem" />
          </SocialIcons>
          <CvButton href="mailto:szikreddin5@gmail.com?subject=Portfolio%20inquiry">Let's talk</CvButton>
          <MenuButton type="button" onClick={() => setOpen((prev) => !prev)} aria-controls="mobile-navigation" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <AiOutlineClose size="2rem" /> : <AiOutlineMenu size="2rem" />}
          </MenuButton>
        </RightGroup>
      </Container>
      <MobileMenu id="mobile-navigation" open={open} aria-label="Mobile navigation">
        {navItems.map((item) => (
          <MobileLink key={item.href} href={item.href} onClick={closeMenu}>{item.label}</MobileLink>
        ))}
      </MobileMenu>
    </HeaderBar>
  );
};

export default Header;

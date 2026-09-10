import React, { useEffect, useState } from 'react';
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
  QuoteOverlay,
  QuoteBox,
  QuoteText,
  QuoteSign,
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
  const [showQuote, setShowQuote] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!showQuote) return undefined;

    const onKey = (event) => {
      if (event.key === 'Escape') setShowQuote(false);
    };

    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [showQuote]);

  return (
    <HeaderBar>
      <Container>
        <Logo>
          <LogoCrest
            type="button"
            onClick={() => {
              closeMenu();
              setShowQuote(true);
            }}
            aria-haspopup="dialog"
            aria-expanded={showQuote}
            aria-label="Kurucunun sözünü aç"
          >
            <LogoImg src="/logo-mark.png?v=3" alt="" />
          </LogoCrest>
          <LogoName href="#" onClick={closeMenu}>
            Zikreddin Şık
          </LogoName>
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

      {showQuote && (
        <QuoteOverlay onClick={() => setShowQuote(false)} role="presentation">
          <QuoteBox role="dialog" aria-modal="true" aria-labelledby="quote-text">
            <QuoteText id="quote-text">
              “Herkesin aynı rüyayı görme olasılığının olasılığı; yaşanıyor.”
            </QuoteText>
            <QuoteSign>— Zikreddin Şık</QuoteSign>
          </QuoteBox>
        </QuoteOverlay>
      )}
    </HeaderBar>
  );
};

export default Header;

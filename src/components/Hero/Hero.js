import React, { useEffect, useMemo, useState } from 'react';

import BgAnimation from '../BackgrooundAnimation/BackgroundAnimation';
import {
  HeroWrap,
  BgLayer,
  HeroGrid,
  LeftSection,
  RightSection,
  Badge,
  Title,
  NameAccent,
  Lead,
  ButtonRow,
  PrimaryButton,
  SecondaryButton,
  PhotoCard,
  ImageWrapper,
  ProfileImg,
  PhotoOverlay,
  TypeBadge,
  PhotoHint,
  Overlay,
  ModalCard,
  ModalBanner,
  ModalClose,
  ModalBody,
  ModalKicker,
  ModalTitle,
  TraitRow,
  Trait,
  ModalText,
  Terminal,
  TerminalBar,
  Dot,
  TerminalTitle,
  TerminalBody,
  CodeSizer,
  CodeTyped,
  Cursor,
  Kw,
  Key,
  Str,
  Punct,
  Plain,
} from './HeroStyles';

const CODE_TOKENS = [
  { t: 'kw', v: 'const' },
  { t: 'plain', v: ' engineer = ' },
  { t: 'punct', v: '{' },
  { t: 'plain', v: '\n  ' },
  { t: 'key', v: 'name' },
  { t: 'punct', v: ':' },
  { t: 'plain', v: ' ' },
  { t: 'str', v: '"Zikreddin Şık"' },
  { t: 'punct', v: ',' },
  { t: 'plain', v: '\n  ' },
  { t: 'key', v: 'role' },
  { t: 'punct', v: ':' },
  { t: 'plain', v: ' ' },
  { t: 'str', v: '"Computer Engineering Student"' },
  { t: 'punct', v: ',' },
  { t: 'plain', v: '\n  ' },
  { t: 'key', v: 'leadership' },
  { t: 'punct', v: ':' },
  { t: 'plain', v: ' ' },
  { t: 'str', v: '"President @ KBÜ AI Club"' },
  { t: 'punct', v: ',' },
  { t: 'plain', v: '\n  ' },
  { t: 'key', v: 'focus' },
  { t: 'punct', v: ':' },
  { t: 'plain', v: ' ' },
  { t: 'punct', v: '[' },
  { t: 'str', v: '"Game Systems (Unity/C#)"' },
  { t: 'punct', v: ',' },
  { t: 'plain', v: '\n               ' },
  { t: 'str', v: '"Web & AI Integration"' },
  { t: 'punct', v: '],' },
  { t: 'plain', v: '\n  ' },
  { t: 'key', v: 'personality' },
  { t: 'punct', v: ':' },
  { t: 'plain', v: ' ' },
  { t: 'str', v: '"ENTJ-A"' },
  { t: 'punct', v: ',' },
  { t: 'plain', v: '\n  ' },
  { t: 'key', v: 'status' },
  { t: 'punct', v: ':' },
  { t: 'plain', v: ' ' },
  { t: 'str', v: '"Building solutions & expanding ecosystems"' },
  { t: 'plain', v: '\n' },
  { t: 'punct', v: '};' },
];

const TOKEN_TAGS = {
  kw: Kw,
  key: Key,
  str: Str,
  punct: Punct,
  plain: Plain,
};

const CHAR_MS = 36;

const renderTokens = (tokens, charCount) => {
  let remaining = charCount;
  const nodes = [];

  tokens.forEach((token, index) => {
    if (remaining <= 0) return;
    const shown = token.v.slice(0, remaining);
    remaining -= shown.length;
    const Tag = TOKEN_TAGS[token.t] || Plain;
    nodes.push(<Tag key={`${token.t}-${index}`}>{shown}</Tag>);
  });

  return nodes;
};

const TypewriterCode = () => {
  const totalChars = useMemo(
    () => CODE_TOKENS.reduce((sum, token) => sum + token.v.length, 0),
    []
  );
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setVisibleChars(totalChars);
      return undefined;
    }

    let cancelled = false;
    let current = 0;
    let timeoutId;

    const tick = () => {
      if (cancelled) return;
      current += 1;
      setVisibleChars(current);
      if (current >= totalChars) return;
      timeoutId = window.setTimeout(tick, CHAR_MS);
    };

    timeoutId = window.setTimeout(tick, 420);
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [totalChars]);

  return (
    <TerminalBody aria-label="engineer.js">
      <CodeSizer aria-hidden="true">{renderTokens(CODE_TOKENS, totalChars)}</CodeSizer>
      <CodeTyped>
        {renderTokens(CODE_TOKENS, visibleChars)}
        <Cursor aria-hidden="true">|</Cursor>
      </CodeTyped>
    </TerminalBody>
  );
};

const Hero = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    if (!profileOpen) return undefined;

    const onKey = (event) => {
      if (event.key === 'Escape') setProfileOpen(false);
    };

    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [profileOpen]);

  return (
  <HeroWrap>
    <BgLayer>
      <BgAnimation />
    </BgLayer>
    <HeroGrid>
      <LeftSection>
        <Badge>// KBÜ Yapay Zeka Kulübü Başkanı & Bilgisayar Mühendisliği Öğrencisi</Badge>
        <Title>
          Fikirleri çalışan sistemlere, toplulukları ortak hedeflere dönüştürüyorum.{' '}
          <NameAccent>Ben Zikreddin Şık.</NameAccent>
        </Title>
        <Lead>
          Karabük Üniversitesi Yapay Zeka Kulübü Başkanı ve Bilgisayar Mühendisliği öğrencisiyim.
          Yüzlerce kişilik bir teknoloji topluluğunu yönetirken; Unity ile derin strateji mekanikleri,
          Android ve modern web mimarileriyle toplulukları harekete geçiren verimlilik ekosistemleri inşa ediyorum.
        </Lead>
        <ButtonRow>
          <PrimaryButton href="#projects">Projeleri Keşfet</PrimaryButton>
          <SecondaryButton href="#contact">İletişime Geç</SecondaryButton>
        </ButtonRow>
      </LeftSection>

      <RightSection>
        <PhotoCard type="button" onClick={() => setProfileOpen(true)} aria-haspopup="dialog" aria-expanded={profileOpen}>
          <ImageWrapper>
            <ProfileImg src="/profile.webp" alt="Zikreddin Şık" />
            <PhotoOverlay>
              <TypeBadge>ENTJ-A</TypeBadge>
              <PhotoHint>Profili aç →</PhotoHint>
            </PhotoOverlay>
          </ImageWrapper>
        </PhotoCard>

        <Terminal>
          <TerminalBar>
            <Dot color="#ff5f56" />
            <Dot color="#ffbd2e" />
            <Dot color="#27c93f" />
            <TerminalTitle>engineer.js</TerminalTitle>
          </TerminalBar>
          <TypewriterCode />
        </Terminal>
      </RightSection>
    </HeroGrid>

    {profileOpen && (
      <Overlay onClick={() => setProfileOpen(false)} role="presentation">
        <ModalCard
          role="dialog"
          aria-modal="true"
          aria-labelledby="profile-title"
          onClick={(event) => event.stopPropagation()}
        >
          <ModalClose type="button" onClick={() => setProfileOpen(false)} aria-label="Kapat">
            ×
          </ModalClose>
          <ModalBanner>
            <img src="/images/entj.webp" alt="" />
          </ModalBanner>
          <ModalBody>
            <ModalKicker>16 PERSONALITIES</ModalKicker>
            <ModalTitle id="profile-title">ENTJ-A · Komutan</ModalTitle>
            <TraitRow>
              <Trait>Vizyon</Trait>
              <Trait>Karar</Trait>
              <Trait>Sistem</Trait>
              <Trait>Liderlik</Trait>
            </TraitRow>
            <ModalText>
              Assertive Commander: hedefi net koyan, sistemi kuran, insanları aynı yöne çeken bir duruş.
              “A” tarafı baskı altında da ritmi bozmamak; kendi çıtasını kendi koymak.
            </ModalText>
            <ModalText>
              Bu profil bende etiket olarak durmuyor. 600+ kişilik bir yapay zeka kulübünü yönetmek,
              satrançta birkaç hamle sonrasını hesaplamak, münazarada argümanı keskinleştirmek ve
              kendi emeğimle yola çıkmak aynı omurgadan geliyor: soğukkanlı plan, hızlı icra.
            </ModalText>
          </ModalBody>
        </ModalCard>
      </Overlay>
    )}
  </HeroWrap>
  );
};

export default Hero;

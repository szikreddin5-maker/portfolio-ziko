import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Visible by default on the server, then reveals as sections enter the viewport.
// Motion is disabled for users who prefer reduced motion.
const Frame = styled.div`
  min-width: 0;
  opacity: ${p => p.$ready && !p.$visible ? 0 : 1};
  transform: ${p => p.$ready && !p.$visible ? 'translateY(24px)' : 'translateY(0)'};
  transition: opacity .72s cubic-bezier(.2,.75,.25,1), transform .72s cubic-bezier(.2,.75,.25,1);
  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

export default function Reveal({ children }) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return undefined;
    if (typeof window === 'undefined' || !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return undefined;
    }

    const node = ref.current;
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    observer.observe(node);
    setReady(true);
    return () => observer.disconnect();
  }, []);

  return <Frame ref={ref} $ready={ready} $visible={visible}>{children}</Frame>;
}

import React, { useState, useRef, useEffect } from 'react';

import { Section, SectionDivider, SectionText, SectionTitle, SectionSubText } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    if (node && typeof node.scrollTo === 'function') {
      return node.scrollTo({ left, behavior: 'smooth' });
    }
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionSubText>
        "Sistemleri algoritmalarla inşa eder, fikirlerle yönetirim."
      </SectionSubText>
      <SectionText>
      Ben Zikreddin Şık. Mühendisliğin getirdiği analitik disiplini felsefe, psikoloji ve stratejinin sağladığı insan odaklı derinlikle harmanlayan bir bilgisayar mühendisi adayıyım. Benim için yazılım, teknik bir zorunluluğun ötesinde; Hegel’in diyalektiğinden, Freud ve Jung’un insan zihnine dair teorilerinden beslenen karmaşık bir problem çözme sanatıdır.
      </SectionText>
      <SectionText>
      Bu vizyonu sadece kod satırlarında değil, Karabük Üniversitesi Yapay Zeka Kulübü Başkanı olarak 20'yi aşkın kişilik bir management ekibine liderlik ederken de sahaya yansıtıyorum. Analitik düşünce ve argümantasyon yeteneğimi ise yazılım mimarilerinin yanı sıra, Karabük’ü gururla temsil ettiğim 7. Türkiye Münazara Şampiyonası sahnelerinde kanıtlamayı seviyorum.
      </SectionText>
      <SectionText>
      Geliştirdiğim stratejik kart oyunu TROMPET ve verimlilik uygulamam Disiplin, zihnimdeki bu 'strateji ve sistem tasarımı' tutkusunun somut birer yansımasıdır. ENTP-A kimliğimin getirdiği sorgulayan ve statükoya meydan okuyan bakış açısıyla; teknolojiyi, sanatı ve düşünceyi bir araya getiren özgün projeler inşa etmeye devam ediyorum.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;

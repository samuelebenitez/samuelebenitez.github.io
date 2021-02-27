import {
  burguerIconDarkMode,
  burguerIcon,
  illustrationDev,
  illustrationDevDarkMode,
} from "../../styles/svg-resources";
import style from "./style.module.scss";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";

export default function Welcome() {
  let name = useRef(null);
  let surname = useRef(null);
  let illustration = useRef(null);
  let links = useRef(null);
  let subtitle = useRef(null);
  useEffect(() => {
    let homeTimeline = gsap.timeline({
      defaults: { opacity: 0, duration: 1, ease: "power2.inOut" },
    });
    homeTimeline.fromTo(name, { x: -100 }, { opacity: 1, x: 0 });
    homeTimeline.fromTo(surname, { x: -100 }, { opacity: 1, x: 0 });

    homeTimeline.fromTo(subtitle, { y: -50 }, { opacity: 1, y: 0 });
    homeTimeline.fromTo(illustration, { x: -200 }, { opacity: 1, x: 0 });
    homeTimeline.fromTo(links, { x: -100 }, { opacity: 1, x: 0 });

    homeTimeline.to(illustration, {
      yoyo: true,
      y: 2,
      repeat: -1,
      opacity: 1,
      duration: 0.5,
    });
  }, []);

  return (
    <section id="welcome" className={style.welcome}>
      <div className={style.top_container}>
        <h1 ref={(el) => (subtitle = el)} className={style.h1}>
          frontend developer jr
        </h1>
      </div>
      <div className={style.center_container}>
        <div className={style.name_box}>
          <h1 ref={(el) => (name = el)} className={style.big_name}>
            samuel
          </h1>
          <h1 ref={(el) => (surname = el)} className={style.big_surname}>
            benitez
          </h1>
        </div>
        <i ref={(el) => (illustration = el)} className={style.illustration}>
          {illustrationDevDarkMode}
        </i>
      </div>
      <div ref={(el) => (links = el)} className={style.bottom_container}>
        <div className={style.links_box}>
          <a href="#about" className={style.link}>
            sobre mí
          </a>
          <p>/</p>
          <a href="#projects" className={style.link}>
            proyectos
          </a>
          <p>/</p>
          <a href="#contact" className={style.link}>
            contacto
          </a>
        </div>
      </div>
    </section>
  );
}

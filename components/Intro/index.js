import style from "./style.module.scss";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { useRef, useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Intro({ title }) {
  let titleIntro = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleIntro,
      { autoAlpha: 0, x: -100 },
      {
        autoAlpha: 1,
        x: 0,
        scrollTrigger: {
          trigger: titleIntro,
          start: "top center",
          toggleActions: "play play none reverse",
        },
      }
    );
  }, []);

  return (
    <div className={style.box_intro}>
      <h1 ref={(el) => (titleIntro = el)} className={style.box_intro_text}>
        {title}
      </h1>
    </div>
  );
}

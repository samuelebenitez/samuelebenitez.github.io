import style from "../styles/Home.module.scss";
import Welcome from "../components/Welcome";
import { burguerIconDarkMode } from "../styles/svg-resources";

import gsap from "gsap";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  //References to the DOM
  let menuIcon = useRef(null);
  let sidebar = useRef(null);
  let sidebarLinks = useRef(null);
  let link = useRef(null);
  let link1 = useRef(null);
  let link2 = useRef(null);

  //toggle state to switch between functions applicated on burger icon
  const [show, setShow] = useState(false);
  useEffect(() => {
    gsap.fromTo(
      menuIcon,
      { y: -20, opacity: 0, delay: 2.5 },
      { y: 0, opacity: 1, delay: 2.5 }
    );
  }, []);
  // function to open sidebar
  function openSidebar() {
    gsap.to(sidebar, { x: 100, y: 100, scale: 15, duration: 1, ease: "slow" });
    gsap.to(sidebarLinks, { delay: 1, visibility: "visible" });
    gsap.to(link, { opacity: 1, y: -10, delay: 1.1 });
    gsap.to(link1, { opacity: 1, y: -10, delay: 1.3 });
    gsap.to(link2, { opacity: 1, y: -10, delay: 1.5 });
    setShow(true);
  }
  //funcion to close sidebar
  function closeSidebar() {
    gsap.to(sidebar, { x: 0, y: 0, scale: 1, duration: 0.5, ease: "circ" });
    gsap.to(sidebarLinks, { visibility: "hidden" });
    gsap.to(link, { opacity: 0, y: 0, delay: 1 });
    gsap.to(link1, { opacity: 0, y: 0, delay: 1 });
    gsap.to(link2, { opacity: 0, y: 0, delay: 1 });
    setShow(false);
  }

  return (
    <div className={style.home_container}>
      <button
        ref={(el) => (menuIcon = el)}
        onClick={!show ? openSidebar : closeSidebar}
        className={style.burger_icon}
      >
        {burguerIconDarkMode}
      </button>
      <div ref={(el) => (sidebar = el)} className={style.sidebar}></div>

      <div className={style.sidebar_links} ref={(el) => (sidebarLinks = el)}>
        <a ref={(el) => (link = el)} href="#about" onClick={closeSidebar}>
          Sobre mi
        </a>
        <a ref={(el) => (link1 = el)} href="#projects" onClick={closeSidebar}>
          Proyectos
        </a>
        <a ref={(el) => (link2 = el)} href="#contact" onClick={closeSidebar}>
          Contacto
        </a>
      </div>
      <Welcome />
      <section id="about" className={style.about}>
        <div className={style.box_intro}>
          <h1 className={style.box_intro_text}>Sobre mí</h1>
        </div>
        <div className={style.box_info}></div>
      </section>
      <section id="projects" className={style.about}>
        <div className={style.box_intro}>
          <h1 className={style.box_intro_text}>Proyectos</h1>
        </div>
        <div className={style.box_info}></div>
      </section>
      <section id="contact" className={style.about}>
        <div className={style.box_intro}>
          <h1 className={style.box_intro_text}>Contacto</h1>
        </div>
        <div className={style.box_info}></div>
      </section>
    </div>
  );
}

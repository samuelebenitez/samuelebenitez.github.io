import style from "../styles/Home.module.scss";
import projects from "../public/projects.json";
import Welcome from "../components/Welcome";
import Intro from "../components/Intro";
import SidebarLink from "../components/SidebarLink";
import Project from "../components/Project";
import { burguerIconDarkMode, downloadIcon } from "../styles/svg-resources";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { useRef, useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  //References to the DOM
  let menuIcon = useRef(null);
  let sidebar = useRef(null);
  let sidebarLinks = useRef(null);

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
    gsap.fromTo(
      sidebarLinks,
      { delay: 1, visibility: "hidden", y: -10, opacity: 0 },
      { delay: 1, visibility: "visible", y: 0, opacity: 1 }
    );
    setShow(true);
  }
  //funcion to close sidebar
  function closeSidebar() {
    gsap.to(sidebar, { x: 0, y: 0, scale: 1, duration: 0.5, ease: "circ" });
    gsap.to(sidebarLinks, { visibility: "hidden" });
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
        <SidebarLink
          label="Sobre mí"
          closeSidebar={closeSidebar}
          openSidebar={openSidebar}
          show={show}
          refname="#about"
        />
        <SidebarLink
          label="Proyectos"
          closeSidebar={closeSidebar}
          openSidebar={openSidebar}
          show={show}
          refname="#projects"
        />

        <SidebarLink
          label="Contacto"
          closeSidebar={closeSidebar}
          openSidebar={openSidebar}
          show={show}
          refname="#contact"
        />
      </div>
      <Welcome />
      <section id="about" className={style.section_container}>
        <Intro title="Sobre mí" />
        <div className={style.box_about}>
          <div className={style.container}>
            <div className={style.img_box}>
              <div className={style.img}></div>
              <div className={style.text}>
                <h2>
                  ¡Hola! Mi nombre es Samuel Benítez y soy desarrollador
                  frontend Jr
                </h2>
              </div>
            </div>
            <div className={style.profile_info}>
              <p>
                En marzo del año 2020 me decidí a estudiar programación (seré
                sincero) por la demanda constante que veía de este tipo de
                puestos. Previamente había abandonado mis estudios en la
                licenciatura de Diseño de Imagen y Sonido en la Universidad de
                Lanús, que si bien me gustaba bastante, los motivos fueron
                asociados tambien a la demanda laboral y a las muchas horas que
                demandaban las cursadas, junto con el trabajo. Debido a la
                cuarentena, tuve mucho tiempo libre en mi casa, el cual dediqué
                de lleno al frontend con esperanza de conseguir un trabajo
                mejor, y para mi grata sorpresa, descubrí un mundo lleno de
                posibilidades que venía tambien acompañado de la mano del
                diseño, que siempre me apasionó. Hoy día sigo perfeccionándome
                en tecnologías como React y Next JS para poder conseguir mi
                empleo en IT. Actualmente estoy estudiando de forma autodidacta
                programación e inglés.
              </p>
              <a
                href="https://drive.google.com/file/d/1aXuzxtr5Kx4qCQGc2lK_nmiWK-t7fWIS/view?usp=drivesdk"
                className={style.cv_icon}
                target="_blank"
              >
                <span>{downloadIcon}</span>
                <p>CV</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className={style.section_container}>
        <Intro title="Proyectos" />
        <div className={style.box_projects}>
          <div className={style.container}>
            {projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className={style.section_container}>
        <Intro title="Contacto" />
        <div className={style.box_contact}>
          <div className={style.container}></div>
        </div>
      </section>
    </div>
  );
}

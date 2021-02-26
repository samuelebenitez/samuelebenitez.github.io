import { useState } from "react";
import style from "../styles/Home.module.scss";
import {
  burguerIconDarkMode,
  burguerIcon,
  illustrationDev,
  illustrationDevDarkMode,
} from "../styles/svg-resources";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  function handleToggle() {
    setShowMenu((prevState) => !prevState);
  }

  return (
    <div className={style.home_container}>
      {showMenu ? (
        <section className={style.toggle_menu}>
          <div className={style.top}>
          <button
                onClick={() => handleToggle()}
                className={style.burger_icon}
              >
                {burguerIconDarkMode}
              </button>
          </div>
          <div className={style.bottom}>
            <a href="#about" className={style.link}>
              sobre mí
            </a>
            
            <a href="#projects" className={style.link}>
              proyectos
            </a>
            <a href="#contact" className={style.link}>
              contacto
            </a>
          </div>
        </section>
      ) : (
        <>
          <section id="welcome" className={style.welcome}>
            <div className={style.top_container}>
              <button
                onClick={() => handleToggle()}
                className={style.burger_icon}
              >
                {burguerIconDarkMode}
              </button>
              <h1 className={style.h1}>frontend developer jr</h1>
            </div>
            <div className={style.center_container}>
              <div className={style.name_box}>
                <h1 className={style.big_name}>samuel</h1>
                <h1 className={style.big_surname}>benitez</h1>
              </div>
              <i className={style.illustration}> {illustrationDevDarkMode} </i>
            </div>
            <div className={style.bottom_container}>
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
          <section id="about" className={style.about}>
            <div className={style.about_intro}>
              <h1>Sobre mí</h1>
            </div>
          </section>
          <section id="projects" className={style.about}>
            <div className={style.about_intro}>
              <h1>Proyectos</h1>
            </div>
          </section>
          <section id="contact" className={style.about}>
            <div className={style.about_intro}>
              <h1>Contacto</h1>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

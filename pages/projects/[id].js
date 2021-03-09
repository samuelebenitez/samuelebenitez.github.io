import projects from "../../public/projects.json";
import { useRouter } from "next/router";
import style from "./style.module.scss";
import {
  htmlIcon,
  scssIcon,
  javascriptIcon,
  reactIcon,
  nextjsIcon,
  backIcon,
} from "../../styles/svg-resources.js";

export default function ProjectPage() {
  const router = useRouter();
  console.log(router);
  const { id } = router.query;

  const selectedProject = projects.filter((project) => project.id == id);

  const selectedIcon = (len) => {
    switch (len) {
      case "HTML":
        return <span>{htmlIcon}</span>;

        break;
      case "CSS":
        return <span>{scssIcon}</span>;

        break;

      case "Vanilla Javascript":
        return <span>{javascriptIcon}</span>;

        break;
      case "Next JS":
        return <span>{nextjsIcon}</span>;

        break;

      default:
        break;
    }
  };

  return (
    <div className={style.projectpage_container}>
      <button onClick={() => router.back()} className={style.back_button}>
        {backIcon}
      </button>
      {selectedProject.map((pr) => (
        <>
          <h1 className={style.project_title}>{pr.name}</h1>
          <hr />
          <div className={style.imgs_container}>
            <img className={style.img1} src={pr.img} alt="" />
            {pr.img2 && <img className={style.img2} src={pr.img2} alt="" />}
          </div>
          <h3 className={style.h3}>descripción</h3>
          <p className={style.project_description}>{pr.description_short}</p>
          <p className={style.project_description}>{pr.description_large}</p>
          <div className={style.icons}>
            {pr.lenguages.map((lenguage) => selectedIcon(lenguage))}
          </div>

          <div className={style.buttons}>
            <a
              target="_blank"
              href={pr.deploy_url}
              className={style.button_depl}
            >
              ver sitio
            </a>
            <a
              target="_blank"
              href={pr.github_url}
              className={style.button_git}
            >
              ver repositorio
            </a>
          </div>
        </>
      ))}
    </div>
  );
}

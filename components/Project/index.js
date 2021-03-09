import style from "./style.module.scss";
import { useRouter } from "next/router";

export default function Project({ project }) {
  const router = useRouter();
  const { name, description_short, img, lenguages, id } = project;

  return (
    <div className={style.project_container}>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={style.bcg}
      ></div>
      <div className={style.content_wrapper}>
        <h1 className={style.title}>{name}</h1>
        <p className={style.description}>{description_short}</p>
        <div className={style.list}>
          {lenguages.map((len, key) => (
            <p key={key}>{len}</p>
          ))}
        </div>
        <button
          onClick={() => router.push(`/projects/${id}`)}
          className={style.more}
        >
          VER MÁS
        </button>
      </div>
    </div>
  );
}

//https://i.ibb.co/6DyP03B/courflix-desktop-img.webp
//https://i.ibb.co/W5XPT60/courflix-responsive-img.webp
//https://i.ibb.co/DwyBqVD/dev-blog-desktop-img.webp
//https://i.ibb.co/Yp6vDS8/dev-blog-responsive-img.webp
//https://i.ibb.co/t3M1wkt/musikit-artist-img.webp
//https://i.ibb.co/PtWhy9T/musikit-home-img.webp
//https://i.ibb.co/WnWRtvp/musikit-podcast-img.webp
//https://i.ibb.co/yNxYw18/profile-pic.webp

import style from "./style.module.scss";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { useRef, useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function SidebarLink({
  label,
  closeSidebar,
  openSidebar,
  show,
  refname,
}) {
  return (
    <a
      href={refname}
      onClick={!show ? () => openSidebar() : () => closeSidebar()}
      className={style.sidebar_link}
    >
      {label}
    </a>
  );
}

import React from "react";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { SiDotnet } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { TbWritingSign } from "react-icons/tb";

function Icon({ technologyName }) {
  const Tech =
    (technologyName === "angular" && (
      <FaAngular size={28} key={new Date().getTime()} color="red" />
    )) ||
    (technologyName === "react" && (
      <FaReact size={28} key={new Date().getTime()} color="blue" />
    )) ||
    (technologyName === "html5" && (
      <FaHtml5 size={28} key={new Date().getTime()} color="red" />
    )) ||
    (technologyName === "sass" && (
      <FaSass size={28} key={new Date().getTime()} color="#AA336A" />
    )) ||
    (technologyName === "javascript" && (
      <IoLogoJavascript size={28} key={new Date().getTime()} />
    )) ||
    (technologyName === "firebase" && (
      <IoLogoFirebase size={28} key={new Date().getTime()} color="orange" />
    )) ||
    (technologyName === "nodejs" && (
      <FaNodeJs size={28} key={new Date().getTime()} color="#006400" />
    )) ||
    (technologyName === "asp.net" && (
      <SiDotnet size={28} key={new Date().getTime()} color="blueviolet" />
    )) ||
    (technologyName === "postgres" && (
      <BiLogoPostgresql size={28} key={new Date().getTime()} color="blue" />
    )) ||
    (technologyName === "mongodb" && (
      <SiMongodb size={28} key={new Date().getTime()} color="#006400" />
    )) ||
    (technologyName === "figma" && (
      <FaFigma size={28} key={new Date().getTime()} color="black" />
    )) ||
    (technologyName === "writing" && (
      <TbWritingSign size={28} key={new Date().getTime()} color="black" />
    ));

  return Tech;
}
export default Icon;

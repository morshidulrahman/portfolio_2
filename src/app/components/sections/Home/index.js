import React from "react";
import TypeWriter from "../../elements/TypeWriter";
import { HomeData } from "../../../data/Home";
import Button from "../../elements/Button";
import { CgMouse } from "react-icons/cg";
import { Link } from "react-scroll";
import Homebg from "../../elements/Homebg";
function Home() {
  const { name, image, socialIcons, typeWriter } = HomeData;

  return (
    <>
      {/* <Homebg /> */}
      <div className="text-[#353353] flex flex-col h-screen justify-center items-center w-full container relative dark:text-white">
        <img
          src={image}
          alt={name}
          className="w-40 h-40 overflow-hidden mb-6 rounded-full object-cover"
        />
        <h1 className="font-bold mb-4 text-3xl ">{name}</h1>
        <p className="mb-2 text-xl">
          i am
          <TypeWriter title={typeWriter} />
        </p>
        <div className="flex items-center gap-5 py-4 mb-5">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              className="text-2xl duration-300 hover:text-[#FDD961]"
              href={item.link}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <Link spy={true} smooth={true} duration={500} to="contact">
          <Button title="Hire me" />
        </Link>
        <div className="flex flex-col justify-center items-center absolute bottom-4 ">
          <p className="mb-4 text-sm">scroll down</p>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-3xl animate-bounce"
          >
            <CgMouse />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;

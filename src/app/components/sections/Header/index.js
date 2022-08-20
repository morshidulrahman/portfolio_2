import { useState, useEffect } from "react";
import { HEADER } from "../../../data/hedaer";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Link, Events, scrollSpy } from "react-scroll";
import UseTheme from "../../../Theme/UseTheme";

function Header() {
  const [opened, setOpened] = useState(false);
  const [navbarSticky, setNavbarSticky] = useState(false);
  const [nextTheme, setTheme] = UseTheme();

  const { menus, logo } = HEADER;
  const handleclick = () => {
    setOpened(!opened);
  };
 
  return (
    <header
      className={` flex items-center z-50 sticky border-b border-b-[#ddd] py-3 top-0 w-full md:bg-transparent ${
        navbarSticky && "sticky md:!bg-white dark:md:!bg-bg-dark"
      } bg-white dark:border-b-[#787272] dark:!bg-[#353353]`}
    >
       
      <div className="container flex  flex-wrap md:flex-nowrap justify-between items-center">
        <span
          className="text-4xl font-bold capitalize"
          // to="home"
          // spy={true}
          // smooth={true}
          // duration={500}
        >
          {logo}
          <span className="text-secondary-color text-5xl">.</span>
        </span>

        {/* =====dark mode=== */}
       
        {/* ======Moblile menu====== */}
        <span className="text-4xl duration-300 md:hidden" onClick={handleclick}>
          {opened ? <AiOutlineMenu /> : <AiOutlineClose />}
        </span>

        {/* ===menubar=== */}
        <div
          className={`w-full mt-4 md:mt-0 md:flex md:w-auto items-center ${ opened && "hidden"}`}
        >
          <nav
            className={`flex flex-col md:flex-row justify-between md:space-x-8 pl-2 md:pl-0 `}
          >
            {menus?.map((item, index) => (
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                to={item.to}
                key={index}
                className={`font-bold capitalize text-base mb-3 md:mb-0 ${item.title}`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
       
      </div>


      <div
          className="mr-8"
          onClick={() => setTheme(nextTheme)}
        >
          {nextTheme === "dark" ? <BsMoonStarsFill /> : <BsFillSunFill />}
        </div>
    </header>
  );
}

export default Header;

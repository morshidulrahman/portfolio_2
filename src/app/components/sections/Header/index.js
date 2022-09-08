import { useState } from "react";
import { HEADER } from "../../../data/hedaer";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Link } from "react-scroll";
import UseTheme from "../../../Theme/UseTheme";

function Header() {
  const [opened, setOpened] = useState(false);
  const [nextTheme, setTheme] = UseTheme();

  const { menus, logo } = HEADER;
  const handleclick = () => {
    setOpened(!opened);
  };

  return (
    <header
      className={`fixed z-50 border-b border-b-[#ddd] py-3 top-0 w-full bg-white dark:border-b-[#787272] dark:!bg-[#353353]`}
    >
      <div className="container flex  flex-wrap md:flex-nowrap justify-between items-center">
        <Link
          className="text-4xl font-bold capitalize cursor-pointer"
          to="home"
          spy={true}
          smooth={true}
          activeClass="logo_active"
          duration={500}
        >
          {logo}
          <span className="text-secondary-color text-5xl">.</span>
        </Link>

        {/* =====dark mode=== */}

        {/* ======Moblile menu====== */}
        <span className="text-4xl duration-300 md:hidden" onClick={handleclick}>
          {!opened ? <AiOutlineMenu /> : <AiOutlineClose />}
        </span>

        {/* ===menubar=== */}
        <div
          className={`w-full mt-4 md:mt-0 md:flex md:w-auto items-center ${!opened ? "hidden" : " "}`}
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
                className={`font-bold capitalize text-base mb-3 md:mb-0 ${item.title} cursor-pointer`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

      </div>


      <div
        className="absolute top-8 right-24 md:top-7"
        onClick={() => setTheme(nextTheme)}
      >
        {nextTheme === "dark" ? <BsMoonStarsFill /> : <BsFillSunFill />}
      </div>
    </header>
  );
}

export default Header;

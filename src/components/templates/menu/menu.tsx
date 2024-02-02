import logo from "@/assets/seaside.png";
import { useMenu } from "@/hooks/useMenu";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";

const nav = [
  {
    to: "/",
    page: "Home",
  },
  {
    to: "/offers",
    page: "Offers",
  },
  {
    to: "/rooms",
    page: "Rooms",
  },
];

const Menu = () => {
  const { showMenu, setShowMenu } = useMenu();
  return (
    <div
      className={`${
        showMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      } fixed w-screen h-screen bg-black/50 z-[1000] backdrop-blur-sm
    flex items-center justify-center flex-col  transition duration-700`}
    >
      <X
        className="fixed top-5 right-10 md:right-16 text-white w-12 h-12 cursor-pointer
       hover:text-orange duration-500 ease-in-out"
        onClick={() => setShowMenu((prev) => !prev)}
      />
      <img src={logo} alt="seaside" className="mb-16" />
      <nav
        className="flex flex-col gap-8
     text-white text-4xl md:text-6xl font-[500] tacking-wider uppercase text-center"
      >
        {nav.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className="hover:text-orange duration-500 ease-in-out"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            {link.page}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Menu;

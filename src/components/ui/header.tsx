import icon from "@/assets/seaside.png";
import { useMenu } from "@/hooks/useMenu";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { setShowMenu } = useMenu();
  return (
    <header
      className="fixed inset-0 top-0 text-white p-10 md:p-16 py-5 h-fit
    flex justify-between z-[999]"
    >
      <Link to="/">
        <img src={icon} alt="Seaside" className="w-[7rem] md:w-auto" />
      </Link>

      <button
        type="button"
        className=" cursor-pointer"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <Menu className="w-12 h-12" />
      </button>
    </header>
  );
};

export default Header;

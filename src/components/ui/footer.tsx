import { Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-[#24211f] text-white px-10 py-5 font-[300]
    flex justify-between items-center"
    >
      <span className="md:text-base text-sm">
        @ Copyright 2023 - Seaside Hotel
      </span>
      <div className="flex gap-7">
        <Facebook
          fill="white"
          className="w-8 h-8 p-1 md:w-10 md:h-10 md:p-2 hover:bg-orange hover:fill-black 
          hover:text-black transition duration-500 cursor-pointer"
        />
        <Twitter
          fill="white"
          className="w-8 h-8 p-1 md:w-10 md:h-10 md:p-2 hover:bg-orange hover:fill-black 
          hover:text-black transition duration-500 cursor-pointer"
        />
      </div>
    </footer>
  );
};

export default Footer;

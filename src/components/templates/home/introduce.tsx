import misc1 from "@/assets/home/misc1.jpeg";
import misc2 from "@/assets/home/misc2.jpeg";
import { ChevronRight } from "lucide-react";

const Introduce = () => {
  return (
    <section
      className="bg-[#79552a] flex-col lg:flex-row flex  w-screen
    lg:gap-10 justify-center items-center p-12 lg:p-20 text-white"
    >
      <div className="flex gap-5 md:gap-8">
        <img
          className="lg:w-[18rem] lg:h-[30rem] w-[8rem] h-[18rem] object-cover lg:mt-10"
          src={misc1}
          alt="misc"
        />
        <img
          className="lg:w-[18rem] lg:h-[30rem] w-[8rem] h-[18rem] object-cover"
          src={misc2}
          alt="misc"
        />
      </div>
      <div className="lg:w-[40%] flex flex-col mt-10 lg:mt-0 justify-center lg:h-[30rem]">
        <h3 className="text-white/80 text-2xl lg:text-4xl font-bold leading-tight">
          The Luxury Experience You'll Remember{" "}
        </h3>
        <div className="bg-[#ca8e46] h-0.5 my-5 w-12 rounded-full" />
        <p className="text-sm lg:text-base font-[300] tracking-wide">
          Welcome to our luxurious hotel, where sophistication, impeccable
          service, and unparalleled comfort await you. From the moment you step
          into our grand lobby, you'll be immersed in an atmosphere of opulence
          and refined elegance. As you enter our elegant establishment, you will
          be greeted by a captivating ambiance that exudes sophistication and
          tranquility.
        </p>
        <button className="button w-fit py-2 px-5 group" type="button">
          <span className="flex z-50">
            BOOK NOWS
            <ChevronRight
              className="text-orange text-5xl font-bold group-hover:text-white duration-500
            ease-in-out group-hover:translate-x-2"
            />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Introduce;

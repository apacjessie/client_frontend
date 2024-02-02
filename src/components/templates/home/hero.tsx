import heroImg from "@/assets/home/hero.png";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
      }}
      className="w-screen h-screen text-white flex items-center "
    >
      <div className=" lg:w-[40%] padding space-y-4">
        <h1 className="text-4xl md:text-[54px] xl:text-[64px] font-bold leading-tight">
          Enjoy Your Dream Vacation
        </h1>
        <p className="tracking-wide text-lg font-[500]">
          The Seaside Hotel is the right choice for visitors who are searching
          for a combination of charm, peace and comfort.
        </p>
        <button className="hover:bg-orange/75 cursor-pointer bg-orange px-4 py-2 tracking-wide font-[500]">
          CHOOSE ROOM
        </button>
      </div>
    </section>
  );
};

export default Hero;

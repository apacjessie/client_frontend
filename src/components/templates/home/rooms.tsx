import roomImg from "@/assets/home/bedbg.jpeg";
import bed1 from "@/assets/home/bed1.jpeg";
import bed2 from "@/assets/home/bed2.jpeg";
import bed3 from "@/assets/home/bed3.jpeg";
import { ChevronRight } from "lucide-react";

const Card = ({
  img,
  title,
  desc,
  price,
}: {
  img: string;
  title: string;
  desc: string;
  price: number;
}) => {
  const random = Math.floor(Math.random() * 3) + 1;
  return (
    <div className="text-white bg-[#423f3c]/60 flex flex-col">
      <div className="relative">
        <span className="absolute top-3 right-3 bg-orange px-2 py-.5 tracking-wide">
          ONLY {random} ROOM LEFT
        </span>
        <img className="flex-1 w-full" src={img} alt="bed" />
      </div>

      <div className="p-5">
        <span className="text-lg font-bold uppercase tracking-wider leading-loose">
          {title}
        </span>
        <p className="font-[300] tracking-wide">{desc}</p>
        <button type="button" className="button group">
          <span className="z-50 m-auto flex">
            BOOK NOW FOR ${price}
            <ChevronRight
              className="text-orange text-4xl font-bold group-hover:text-white duration-500
            ease-in-out group-hover:translate-x-5"
            />
          </span>
        </button>
      </div>
    </div>
  );
};

const Rooms = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${roomImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className=" text-white w-screen lg:h-screen flex flex-col px-12 lg:px-40 py-10 lg:py-0 items-center justify-center"
    >
      <h2 className="text-3xl font-bold mt-8 lg:mt-0 tracking-wide">
        Our Rooms
      </h2>
      <div className="bg-[#ca8e46] h-0.5 my-8 w-12 rounded-full" />
      <div
        className="flex flex-col lg:grid lg:gap-10  w-full justify-around items-center
        lg:grid-cols-3"
      >
        <Card
          img={bed1}
          title="STANDARD ROOM"
          desc="Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility offers luxury..."
          price={29}
        />
        <Card
          img={bed2}
          title="DELUXE ROOM"
          desc="Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility offers luxury..."
          price={29}
        />
        <Card
          img={bed3}
          title="PREMIER ROOM"
          desc="Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility offers luxury...."
          price={29}
        />
      </div>
    </section>
  );
};

export default Rooms;

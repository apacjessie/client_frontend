import { ChevronRight } from "lucide-react";
import room1 from "@/assets/rooms/room1.jpeg";
import room2 from "@/assets/rooms/room2.jpeg";
import room3 from "@/assets/rooms/room3.jpeg";
import room4 from "@/assets/rooms/room4.jpeg";
import room5 from "@/assets/rooms/room5.jpeg";
import room6 from "@/assets/rooms/room6.jpeg";

const rooms = [
  {
    img: room1,
    title: "Standard Room",
    desc: "Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility offers luxury....",
    price: 29,
  },
  {
    img: room2,
    title: "Deluxe Room",
    desc: "Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility offers luxury....",
    price: 39,
  },
  {
    img: room3,
    title: "Premier Room",
    desc: "Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility offers luxury....",
    price: 49,
  },
  {
    img: room4,
    title: "Family Suite",
    desc: "Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility offers luxury....",
    price: 59,
  },
  {
    img: room5,
    title: "Luxury Room",
    desc: "Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility offers luxury....",
    price: 79,
  },
  {
    img: room6,
    title: "Presidential Suite",
    desc: "Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility offers luxury....",
    price: 99,
  },
];

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
    <div className="text-white bg-[#423f3c]/60 flex flex-col z-50">
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

const RoomGrid = () => {
  return (
    <section className="grid lg:grid-cols-2 lg:grid-rows-2 px-24 lg:px-32 gap-8">
      {rooms.map((room) => (
        <Card
          title={room.title}
          desc={room.desc}
          img={room.img}
          price={room.price}
        />
      ))}
    </section>
  );
};

export default RoomGrid;

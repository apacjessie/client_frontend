import offer1 from "@/assets/offer/offer1.jpeg";
import offer2 from "@/assets/offer/offer2.jpeg";
import offer3 from "@/assets/offer/offer3.jpeg";

const Card = ({
  title,
  desc,
  image,
  type,
}: {
  title: string;
  desc: string;
  image: string;
  type: string;
}) => {
  return (
    <div className="relative flex group overflow-hidden cursor-pointer">
      <div
        className="z-50 text-white w-full h-full flex flex-col items-center justify-around
    bg-black/50 py-10 border-2 border-dashed  group-hover:bg-black/25 duration-500 ease-in-out"
      >
        <span
          className="bg-black/50 w-[80%] flex justify-center py-0.5 rounded-full
        text-lg tracking-wide font-[300]"
        >
          26th - 28th Feb 2024
        </span>
        <div className="flex-1 flex items-center justify-center flex-col">
          <span className="z-50 text-2xl md:text-3xl font-bold tracking-wider mb-5">
            {title}
          </span>
          <p className="font-[300] text-lg md:text-xl px-10 leading-relaxed">
            {desc}
          </p>
        </div>

        <span className="tracking-[.8em] uppercase font-bold">{type}</span>
      </div>
      <img
        src={image}
        alt="offer"
        className="absolute w-full h-full flex-1 group-hover:scale-110 duration-500 ease-in-out"
      />
    </div>
  );
};

const OfferGrid = () => {
  return (
    <section
      className="grid lg:grid-cols-3 grid-rows-[repeat(3,_22rem)] grid-cols-[20rem] lg:grid-rows-[28rem] gap-10 lg:px-40
    mt-20 lg:mt-0"
    >
      <Card
        title="SHABU & GRILL"
        desc="Enjoy tasty meat and vegetables package cook in hot pot and grill pan."
        image={offer1}
        type="Culinary"
      />
      <Card
        title="PAY 1 GET 1"
        desc="Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore."
        image={offer2}
        type="Culinary"
      />
      <Card
        title="FLASH DEAL 60% OFF"
        desc="Quis cupidatat quis dolore amet aliquip ea exercitation labore proident dolore."
        image={offer3}
        type="Hotel room"
      />
    </section>
  );
};

export default OfferGrid;

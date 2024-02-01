import bg from "@/assets/offer/bgoffer.jpeg";
import OfferGrid from "@/components/templates/offer/offer-grid";

const Offer = () => {
  return (
    <main
      style={{ backgroundImage: `url(${bg})` }}
      className="w-screen lg:h-screen flex items-center justify-center flex-col
      py-52 lg:py-0"
    >
      <h1
        className="text-white text-5xl tracking-widest font-bold mb-10
      flex flex-col text-center leading-[2.6rem]"
      >
        <span className="font-[Courgette] text-orange">Specials</span>
        Offers
      </h1>
      <OfferGrid />
    </main>
  );
};

export default Offer;

import bg from "@/assets/rooms/bg.jpeg";
import RoomGrid from "@/components/templates/rooms/room-grid";

const Rooms = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="w-screen  flex items-center justify-center flex-col
      py-52 lg:py-36 relative"
    >
      <div className="fixed bg-black/50 w-screen h-screen inset-0" />
      <h1
        className="text-white text-5xl tracking-widest font-bold mb-10
      flex flex-col text-center leading-[2.6rem] z-50"
      >
        <span className="font-[Courgette] text-orange">Select</span>
        ROOMS
      </h1>
      <RoomGrid />
    </main>
  );
};

export default Rooms;

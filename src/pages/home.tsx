import Hero from "@/components//templates/home/hero";
import Information from "@/components/templates/home/information";
import Introduce from "@/components/templates/home/introduce";
import Rooms from "@/components/templates/home/rooms";
import Testimonial from "@/components/templates/home/testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <Information />
      <Rooms />
      <Introduce />
      <Testimonial />
    </main>
  );
};

export default Home;

import bg from "@/assets/home/testimonial.jpeg";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen md:h-screen py-10 md:py-0 text-white flex flex-col items-center justify-center"
    >
      <h4 className=" text-3xl md:text-4xl font-bold mb-10">Testimonials</h4>
      <div className="bg-[#ca8e46] h-[2.5px] my-2 w-16 rounded-full" />
      <div className="flex items-center justify-center flex-col gap-10 mt-10">
        <Quote
          className="text-[#ca8e46] rotate-180 w-[2rem] h-[2rem]"
          fill="#ca8e46"
          rotate={299}
        />
        <p className="w-[80%] lg:w-[60%] md:text-justify font-[Courgette] tracking-wide text-xl md:text-3xl leading-relaxed">
          They were extremely accommodating and allowed us to check in early at
          like 10am. We got to hotel super early and I didn’t wanna wait. So
          this was a big plus. The sevice was exceptional as well. Would
          definitely send a friend there.
        </p>
        <span className="text-sm md:text-base">
          Doretta Mccourtney, Customer
        </span>
      </div>
    </section>
  );
};

export default Testimonial;

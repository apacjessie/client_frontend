import { Clock3, Headphones, Home } from "lucide-react";
import { ElementType } from "react";

const Card = ({
  Icon,
  title,
  desc,
  bgColor,
}: {
  Icon: ElementType;
  bgColor: string;
  title: string;
  desc: string;
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex items-center p-10 gap-4 text-white"
    >
      <Icon className="w-[2.5rem] h-[2.5rem]" />
      <div className="flex flex-col">
        <span className="uppercase font-bold tracking-wide text-sm">
          {title}
        </span>
        <span className="text-sm font-[300]">{desc}</span>
      </div>
    </div>
  );
};

const Information = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3  justify-between bg-blue-500">
      <Card
        bgColor="#a37238"
        Icon={Clock3}
        title="opening times"
        desc="Monday - Friday: 09:00 - 18:00"
      />
      <Card
        bgColor="#7a5529"
        Icon={Home}
        title="our location"
        desc="1:00 S Main St. Los Angeles, CA"
      />
      <Card
        bgColor="#51391d"
        Icon={Headphones}
        title="customer support"
        desc="+208 303 9296"
      />
    </div>
  );
};

export default Information;

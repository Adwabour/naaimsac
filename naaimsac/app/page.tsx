
import Events from "@/components/Home/Events";
import Hero from "@/components/Home/Hero";
import SectionText from "@/components/Home/SectionText";
import Image from "next/image";
import React from "react";

const MISSION_VISION = [
  {
    title: "Our Mission",
    description:
      "To empower and inspire individuals to excel in their careers through technology-driven learning and mentorship programs.",
  },
  {
    title: "Our Vision",
    description:
      "To be the leading platform for promoting excellence in materials chemistry and advanced science in Africa, empowering researchers and institutions to achieve global recognition and contribute to sustainable development.",
  },
];

function page() {
  return (
    <div className="p-10 flex-1 h-full flex flex-col space-y-14">
      <Hero />
      <div className="w-full flex space-x-10">
        <div className="w-1/3">
          <Image
            src="/Images/placeholder.avif"
            alt="vision"
            width={500}
            height={500}
            className="w-full object-cover"
          />
        </div>
        {MISSION_VISION.map((info, index) => (
          <SectionText
            key={index}
            title={info.title}
            description={info.description}
          />
        ))}
      </div>
      <Events />
    </div>
  );
}

export default page;

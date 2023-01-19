import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

export default function PersonCard(props) {
  return (
    <div className="rounded-lg bg-[#BDBEBD] p-10 flex flex-col justify-center items-center gap-12 w-64 ">
      <div className="md:w-32 md:h-32 w-16 h-16">
        <Image
          src={props.image}
          alt="Vladimir"
          className="rounded-full my-auto"
        />
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font">{props.name}</h3>
        <p>{props.field}</p>
      </div>
      <div>
        {props.socials.map((item, key) => (
          <SocialIcon
            key={key}
            url={item}
            fgColor="grey"
            bgColor="transparent"
          />
        ))}
      </div>
    </div>
  );
}

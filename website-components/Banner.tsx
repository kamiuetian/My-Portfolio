"use client";

import React from "react";
import { config } from "@/constant";
import Image from "next/image";
import Profile from "@/public/images/profile.png";
import Title from "@/website-components/ui/Title";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Paragraph from "./ui/Paragraph";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";

function Banner() {
  const router = useRouter();

  const handleNavigation = (href: string) => {
    if (!href) {
      return;
    }

    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    router.push(href);
  };

  return (
    <div className="flex relative z-10 flex-col md:flex-row-reverse md:items-center md:justify-between gap-10 pt-6 pb-12" id="home">
      <div>
        <Image src={Profile} alt="Muhammad Kamran" className="max-w-sm w-80 m-auto" data-aos="fade-up" />
      </div>
      <div className="max-w-2xl">
        <Title title={config.banner.title} />
        <h1 className="text-4xl md:text-5xl text-slate-600 font-bold mb-4 leading-tight" data-aos="fade-up">
          {config.banner.headline.leading}{" "}
          <span className="text-green-500">{config.banner.headline.highlight}</span>{" "}
          {config.banner.headline.trailing}
        </h1>
        <Paragraph content={config.banner.subTitle} />
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center" data-aos="fade-up">
          {config.banner.actionButton.map((button, index) => (
            <Button
              key={index.toString()}
              variant={index === 1 ? "plain" : "default"}
              onClick={() => handleNavigation(button.href)}
            >
              {index === 1 ? (
                <>
                  <ArrowTopRightIcon />
                  <span>{button.name}</span>
                </>
              ) : (
                <span>{button.name}</span>
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;

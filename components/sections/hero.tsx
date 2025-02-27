import type React from "react";
import Image from "next/image";
import { Cover } from "../ui/cover";
import { Button } from "../ui/button";
import { ArrowRightIcon, LayoutDashboard } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 my-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h1 className="text-3xl font-extrabold lg:text-6xl">
            Smart City With <Cover>Computer Vision</Cover>
          </h1>
          <p className="text-balance text-muted-foreground lg:text-lg max-w-prose mx-auto lg:mx-0">
            Finely crafted components built with React, Tailwind and Shadcn UI.
            Developers can copy and paste these blocks directly into their
            project.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button className="group w-fit bg-green-100 hover:bg-green-200 dark:text-black" variant="secondary">
              <LayoutDashboard
                className="-ms-1 opacity-60"
                size={16}
                aria-hidden="true"
              />
              Discover all components
              <ArrowRightIcon
                className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/diagrams/main-diagram.gif"
            alt="system overview diagram"
            width={500}
            height={500}
            className="w-full max-w-md lg:max-w-full rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

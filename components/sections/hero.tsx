'use client'
import { useRouter } from 'next/navigation'
import React from "react";
import { Button } from "../ui/button";
import parse from 'html-react-parser';
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const Hero = ({ layout, badge, title, text }) => {
  const router = useRouter()

  return (
    <section className="flex justify-center px-5">
      {layout == "layout_1" && (
        <div
          className="max-w-fluid w-full flex flex-col md:flex-row justify-between gap-10 items-end px-4 py-7 sm:p-7 md:p-11 rounded-3xl"
          id="hero"
        >
          <h2 className="text-2.5xl sm:text-3xl lg:text-4xl xl:text-5xl md:w-[37%] lg:w-[47%] xl:w-[30%]	leading-none text-white">
            Experience the ultimate hookah
          </h2>
          <div className="md:w-2/5">
            <p className="text-white text-base sm:text-xl">
              Discover the unparalleled and luxurious hookah experience that
              sets Nefes apart from any other establishment.
            </p>
            <div className="mt-7">
              <Button variant="outlineWhite">Watch our story</Button>
            </div>
          </div>
        </div>
      )}

      {layout == "layout_2" && (
        <div className="w-full pt-10 pb-20 px-5 flex gap-8 justify-between items-start ">
          <Button variant="gray" className="hidden sm:block p-6 mt-4" onClick={()=> router.push('/', { scroll: true })}>
            <ArrowLeftIcon className="w-8 h-8"/>
          </Button>
          <div className="flex flex-col items-start gap-7	w-[60rem]">
            <Button variant="gray">{badge}</Button>
            <h4 className="max-w-[53rem] text-2.5xl sm:text-3xl xl:text-4xl leading-none">
              {parse(title)}
            </h4>
            <p className="max-w-[45rem] text-base sm:text-xl">{text}</p>
          </div>
        </div>
      )}

      {layout == "layout_3" && (
        <div
          className="w-full pt-10 pb-40 px-5 flex gap-10 justify-between items-start rounded-3xl"
          id="heroinner"
        >
          <Button variant="gray" className="hidden sm:block p-6 mt-4" onClick={()=> router.push('/', { scroll: true })}>
            <ArrowLeftIcon className="w-8 h-8"/>
          </Button>
          <div className="flex flex-col items-start gap-7 w-[60rem]">
            <Button variant="gray">{badge}</Button>
            <h4 className="max-w-[53rem] text-2.5xl sm:text-3xl xl:text-4xl leading-none text-white">
            {parse(title)}
            </h4>
            <p className="max-w-[45rem] text-base sm:text-xl text-white">{text}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

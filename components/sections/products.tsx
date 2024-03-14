'use client'

import Image from "next/image";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeftIcon,ArrowRightIcon } from "@radix-ui/react-icons";

const Products = () => {
  const Obj = [
    { img: "/product2.png" },
    { img: "/product2.png" },
    { img: "/product2.png" },
    { img: "/product2.png" },
    { img: "/product2.png" },
    { img: "/product2.png" },
    { img: "/product2.png" },
    { img: "/product2.png" },
  ];

  return (
    <>
      <section className="flex justify-center px-5">
        <div className="w-full p-4 sm:p-7 md:p-11">
          <div className="flex justify-center mt-8 mb-10">
            <Button variant="gray">The perfect balnce between</Button>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl text-center leading-none">
            Beauty & <br /> <span>Functionality</span>
          </h1>
        </div>
      </section>

      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselPrevious className="hidden md:block absolute left-8 top-[-40px]">
        <Button variant="gray" className="hidden sm:block p-6 mt-4">
            <ArrowRightIcon className="w-10 h-10"/>
          </Button>
        </CarouselPrevious>
        <CarouselContent className="productSlider">
          {Obj.map((res, index) => {
            return (
              <CarouselItem
              key={index}
              className="basis-sm md:basis-md flex justify-center m-10 relative"
              >
                <div className="bg-gray-100 absolute w-full h-5/6	left-0 right-0 bottom-0 z-[-1] rounded-3xl"></div>
                <Image
                  src={res.img}
                  width={300}
                  height={80}
                  alt=""
                  priority
                  className="object-fill	"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
          <CarouselNext className="hidden md:block absolute right-8 top-[-40px]" >
          <Button variant="gray" className="hidden sm:block p-6 mt-4">
            <ArrowLeftIcon className="w-8 h-8"/>
          </Button>
          </CarouselNext>
      </Carousel>
    </>
  );
};

export default Products;

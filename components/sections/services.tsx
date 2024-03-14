"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  let heightRef = React.createRef();
  let objectRef = React.createRef();
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true);
  }, []);

  useEffect(() => {
    if (hasRendered) {
      let scrollerHeight = heightRef.current.offsetHeight - objectRef.current.offsetHeight - 100;

      let tween = gsap.to(".mybox", { opacity:1}),
        st = ScrollTrigger.create({
          trigger: ".mybox",
          start: "center center", 
          pin: ".mybox",
          end: () => "+=" + scrollerHeight,
          animation: tween,
          scrub: true,
      });
    }
  }, [hasRendered]);

  return (
<>
<section className="flex justify-center px-5">
      <div className="w-full p-4 sm:p-7 md:p-11 flex justify-between gap-[2rem] lg:gap-[5rem] items-start" ref={heightRef}>
        <div className="lg:w-[500px] flex flex-col gap-[3rem] lg:gap-[13rem] pt-16 ">
          <div>
            <div className="lg:hidden relative w-full mb-6 mx-auto img-container">
              <Image
                alt=""
                src={"/serviceImg.png"}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h5 className="text-2xl sm:text-2.5xl xl:text-3xl leading-none">
              Premium{" "}
              <span className="text-nefesprimary-100">Shisha Outsourcing</span>{" "}
              for Businesses
            </h5>
            <p className="text-grayDark my-6">
              Experience the top-rated hookah outsourcing and selling services,
              designed to meet all your needs and preferences, ensuring the
              highest level of satisfaction for you and your customers.
            </p>
            <Button variant="grayOutline">Read more</Button>
            <Button className="ml-4" variant="secondary">
              Book now
            </Button>
          </div>

          <div>
          <div className="lg:hidden relative w-full mb-6 mx-auto img-container">
              <Image
                alt=""
                src={"/serviceImg.png"}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h5 className="text-2xl sm:text-2.5xl xl:text-3xl leading-none">
              High-Quality{" "}
              <span className="text-nefesprimary-100">Shisha Selling</span> for
              Individuals
            </h5>
            <p className="text-grayDark my-6">
              Satisfy your hookah needs with top-quality products and
              personalized service from experienced professionals in the field.
              We do not outsource, ensuring high quality for individual
              customers.
            </p>
            <Button variant="grayOutline">Read more</Button>
            <Button className="ml-4" variant="secondary">
              Book now
            </Button>
          </div>
        </div>
        <div className="hidden lg:block relative w-full max-w-[40rem] xl:max-w-[47.375rem] my-0 mx-auto rounded-3xl overflow-hidden img-container mybox" ref={objectRef}>
          <Image
            alt=""
            src={"/serviceImg.png"}
            fill
            style={{ objectFit: "cover" }}
            
          />          
        </div>
      </div>
    </section>


</>

  );
};

export default Services;

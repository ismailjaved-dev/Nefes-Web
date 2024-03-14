'use client'
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

import { usePathname } from 'next/navigation'

const Footer = () => {

  const pathname = usePathname()

  return (
    pathname.includes('/admin')  ? "" : <>
    {pathname !== "/login" && 
    <>
    <section className="flex justify-center px-5">
     <div className="flex flex-col	lg:flex-row gap-10 bg-gray-100 p-4 sm:p-7 md:p-11 w-full justify-between py-16 rounded-3xl">
       <div className="flex flex-col justify-between items-start w-full lg:w-1/3	 2xl:w-1/4	">
         <h6 className="text-lg sm:text-2.5xl xl:text-3xl leading-none mb-4 sm:mb-0">
           TEAM WITH OVER 10 YEARS OF EXPERIENCE IN Shisha Catering
         </h6>
         <Button variant="tertiary">Read More</Button>
       </div>
       <div className="lg:w-[55%]">
         <h4 className="text-2.5xl sm:text-3xl xl:text-4xl leading-none mb-4">
           Based in Dubai, Operating Worldwide
         </h4>
         <p className="text-base sm:text-xl text-grayDark">
           Lorem ipsum dolor sit amet consectetur. Sodales quis nulla egestas
           aliquet id pharetra aliquam blandit. Semper pretium proin at
           laoreet vivamus vitae. Nullam faucibus varius euismod fermentum
           aliquam consectetur sapien. Molestie vitae urna ac in commodo.
           Viverra pulvinar vitae dignissim nibh sem tincidunt.
         </p>
       </div>
     </div>
   </section>

   <section className="flex justify-center px-5 pb-3 pt-0">
     <div className="block sm:flex max-w-fluid w-full bg-purple text-white px-4 py-7 sm:p-7 md:p-11 rounded-3xl">
       <div className="w-2/4 h-20 sm:h-96 flex flex-col justify-between items-start">
         <span>
           <Link href="" className="text-base sm:text-xl">PRIVACY POLICY</Link><br/>
           <Link href="" className="text-base sm:text-xl">Terms And Conditions</Link>
         </span>
         <h3 className="hidden sm:flex text-3xl lg:text-4xl xl:text-5xl leading-none">Say Hello</h3>
       </div>
       <div className="w-2/4 text-2.5xl sm:text-3xl xl:text-4xl flex flex-col items-start justify-end leading-none">
         <Link href="" >Facebook</Link>
         <Link href="">Instagram</Link>
         <Link href="">LinkedIn</Link>
       </div>
     </div>
   </section>
    <p className="text-grayDark px-11">© 2024 Nefes. All rights reserved.</p>
    </>
    }

 </>
  );
};

export default Footer;

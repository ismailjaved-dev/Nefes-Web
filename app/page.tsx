import About from "@/components/sections/about";
import AgeAlert from "@/components/sections/ageAlert";
import Cookies from "@/components/sections/cookies";
import Gallery from "@/components/sections/gallery";
import Hero from "@/components/sections/hero";
import Info from "@/components/sections/info";
import Products from "@/components/sections/products";
import Services from "@/components/sections/services";

import Link from "next/link";
export default function Home() {
  return (
    <main className="">
      <Hero
        layout="layout_1"
        title="Revolutionizing Shisha <span>Outsourcing</span>"
        badge="Service"
        text="Experience the highest quality shisha outsourcing service for your business. Increase customer satisfaction and boost your revenue with our premium hookah offerings."
      />
      <About
        image={false}
        title="created by professionals in the hookah service industry"
        text="The Nefes is Dubai born brand which purposing serve world-class hookah service to all around the World. Nefes created by professionals in the hookah service industry and hospitality field, the main idea of the company is to provide the highest quality of service, as well as a unique product with unrepeatable equipments & extraordinary flavors that will act on marketing and capture the public. The Nefes as brand vision to cooperate with high-end brands that aim to serve the best in the world."
      />
      <Services />
      <Products />
      <Gallery layout="layout_1" />
    </main>
  );
}

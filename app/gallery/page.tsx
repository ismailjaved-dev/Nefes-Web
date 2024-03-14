import Gallery from "@/components/sections/gallery";
import Hero from "@/components/sections/hero";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero
        layout="layout_3"
        title="Lorem ipsum dolor sit amet consectetur"
        badge="Gallery"
        text="Lorem ipsum dolor sit amet consectetur. Et netus porta ut habitasse pulvinar odio tempus sed. Non enim dictum justo ornare sociis lorem. Purus sit sit nulla arcu facilisi."
      />
      <div className="translate-y-[-12rem]">
      <Gallery layout="layout_2" />
      </div>
    </div>
  );
};

export default page;

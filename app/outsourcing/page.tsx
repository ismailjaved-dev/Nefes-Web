import About from '@/components/sections/about'
import Gallery from '@/components/sections/gallery'
import Hero from '@/components/sections/hero'
import Info from '@/components/sections/info'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero layout="layout_2" title="Revolutionizing Shisha <span>Outsourcing</span>" badge="Service" text="Experience the highest quality shisha outsourcing service for your business. Increase customer satisfaction and boost your revenue with our premium hookah offerings."/>
      <About image={true} title="" text="Lorem ipsum dolor sit amet consectetur. Et netus porta ut habitasse pulvinar odio tempus sed. Non enim dictum justo ornare sociis lorem. Purus sit sit nulla arcu facilisi. Fermentum quam facilisis aliquam leo penatibus lacinia sit. In nullam duis neque tincidunt augue est ut. Sed sagittis quis id arcu pellentesque pretium." />
      <Info />
      <Gallery layout="layout_1"/>
    </div>
  )
}

export default page

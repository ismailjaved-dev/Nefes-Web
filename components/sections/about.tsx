import Image from 'next/image'
import React from 'react'

const About = ({title, image, text}) => {
  return (
   <>
   
    <section className="flex justify-center px-5 flex-wrap">
    {
    image && <Image src={'/aboutImg.png'} alt='' width={1000} height={200} priority className='w-full min-h-[10rem] rounded-3xl'/>
   }
      <div className="w-full p-4 py-8 sm:p-7 md:p-11 flex flex-col lg:flex-row justify-between gap-10 items-center rounded-3xl  bg-gray-100">
        {
            title !== "" && <h6 className='text-2xl leading-none lg:max-w-[22.25rem]'>{title}</h6>
        }
        <p className='lg:max-w-[47.375rem]  lg:w-[55%] text-grayDark'>{text}</p>
      </div>
    </section>
   </>
  )
}

export default About

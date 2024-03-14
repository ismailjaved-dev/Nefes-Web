"use client"
import { Button } from '../ui/button'

const Cookies = () => {

  return (
    <div className='border border-gray-200 rounded-3xl max-w-[500px] p-8  m-5 fixed bottom-0 bg-white z-10'>
      <h3 className='text-lg sm:text-2xl lg:text-3xl'>Have Some Cookies</h3>
      <p className='text-base sm:text-xl text-darkGray my-4'>By clicking “Accept all cookies”, you agree Nefes can store cookies on your device and disclose information in accordance with our Cookie Policy.</p>
     <div className='flex gap-2 flex-wrap justify-center'>
      <Button variant="gray" className='w-full'>Necessary cookies only</Button>
     <Button className='w-full'>Accept Cookies</Button>
     </div>
    </div>
  )
}

export default Cookies

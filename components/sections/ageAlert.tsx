"use client"
import { Button } from '../ui/button'

const AgeAlert = () => {

  const hideModal = () =>{
    document.getElementById("ageModal").style.display = 'none'
  }

  return (
    <section className='flex justify-center px-5 bg-black-200/30 fixed top-0 bottom-0 left-0 right-0 items-center z-20' id='ageModal'>
      <div className='p-11 bg-white border border-gray-200 rounded-3xl shadow-lg shadow-black-100/50'>
      <h3 className='text-3xl'>Are You 18 plus?</h3>
      <div className='flex gap-3 mt-3'>
        <Button variant="secondary" className='w-2/4' onClick={()=> window.location.reload()}>No</Button>
        <Button  className='w-2/4' onClick={()=> hideModal()}>Yes</Button>
      </div>
      </div>
    </section>
  )
}

export default AgeAlert

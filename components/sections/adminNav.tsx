"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AdminNav = () => {

    const pathName = usePathname();

    const links = [
        {name:'Gallery',link:"/admin/gallery"},
        {name:'carousel',link:"/admin/carousel"},
        {name:'Accordian',link:"/admin/accordian"}
    ]

    return pathName.includes("/admin") &&   (
        <section className='flex justify-center p-5 border'>
          <div className='flex justify-between gap-6'>
            {
                links.map((res,index)=>{
                 return(
                    <Link key={index} href={res.link} className={`hover:bg-gray-200 rounded-lg p-3 ${pathName == res.link && 'bg-gray-200'}`}>{res.name}</Link>
                 )
                })
            }
          </div>
        </section>
      )
  
}

export default AdminNav

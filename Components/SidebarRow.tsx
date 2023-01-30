import React, {SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string 
}

function SidebarRow({Icon, title}: Props) {
  return (
    <div className='flex max-w-fit items-center space-x-2 px-4 py-4 rounded-full hover:bg-gray-100 transition-all-200
    cursor-pointer group'>
       <Icon className='h-6 w-6'/>
       <p className='hidden text-base font-light group-hover:text-twitter md:inline-flex  lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow

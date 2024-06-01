import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 py-5 flex items-center justify-between'>
    <div className='logo font-semibold text-2xl'>dope</div>
    <div className="links flex gap-10 capitalize">
        {["Services","Our Work","About Us", "Insights", "Contact"] .map((item , index)=> (
        <a key={index} href="" className={`text-md font-semibold ${index === 4 && "ml-32 "} `}>{item}</a>
        ))}
    </div>
    </div>
  )
}

export default Navbar
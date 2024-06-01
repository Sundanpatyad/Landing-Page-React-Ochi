import React, { useEffect, useState } from 'react'


function Eyes() {
     const [rotate , setrotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let detltaX = mouseX - window.innerWidth/2;
            let detltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(detltaY , detltaX) * (180/Math.PI);
            setrotate(angle-180);
          
        })
    })
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.6" className='h-full relative bg-cover bg-center  w-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className='absolute   flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='flex  items-center justify-center w-[20vw] h-[20vw] rounded-full bg-zinc-100'>
                <div className=' relative w-1/2 h-1/2 rounded-full bg-zinc-900'>
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>

                <div className='w-10 h-10 rounded-full bg-zinc-300'></div>
                </div>

                </div>

                </div>
                <div className='flex items-center justify-center w-[20vw] h-[20vw] rounded-full bg-zinc-100'>
                <div className=' relative flex items-center justify-center w-1/2 h-1/2 rounded-full bg-zinc-900'>
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>

                <div className='w-10 h-10 rounded-full bg-zinc-300'></div>
                </div>

                </div>

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Eyes
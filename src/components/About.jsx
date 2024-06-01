import React from 'react'

function About() {
  return (
    <div className='w-full  bg-[#cdea68] rounded-t-3xl text-black '>
        <h1 className=' text-[3vw] p-20 leading-[3.5vw ]  tracking-tight '>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full border-t-[1px] px-20  py-4 flex border-[#727a54]'>
        <div className=' w-1/2 '>
            <h1 className='text-6xl'>Our Approach :</h1>
            <button className='text-white flex items-center justify-center gap-10 bg-zinc-900 mt-10 rounded-full px-10 py-4 text-2xl font-light'>Read More
            <div className='w-3 h-3 bg-zinc-100 rounded-full'></div></button>
        </div>
        <div className='w-1/2  h-[60vh] bg-[#9baf53] rounded-xl overflow-hidden'>
          <video autoPlay muted loop className='h-full w-full object-cover' src="https://videos.pexels.com/video-files/2759481/2759481-uhd_3840_2160_30fps.mp4"></video>
        </div>
            
        </div>

    </div>
  )
}

export default About;
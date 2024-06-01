import React from 'react';


function Cards() {
  return (
    <div  className='h-screen flex items-center gap-5 p-20 bg-zinc-400' >
        <div className='cardcontainner h-[50vh] w-1/2'>
            <div className='card flex relative  justify-center items-center w-full h-full rounded-xl bg-green-900'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 border-2 left-10 rounded-full bottom-10'> &copy; Hello We are Dope
                
                </button>
            </div>
        </div>
        <div className='cardcontainner flex gap-5 h-[50vh] w-1/2'>
        <div className='card  flex items-center justify-center w-1/2 relative rounded-xl  bg-zinc-900'>
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 border-2 left-10 rounded-full bottom-10'> &copy; Hello We are Dope</button>
        </div>
        <div className='card flex items-center justify-center w-1/2 relative rounded-xl bg-zinc-700'>
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 border-2 left-10 rounded-full bottom-10'> &copy; Hello We are Dope</button>
        </div>


        </div>
    </div>
  )
}

export default Cards
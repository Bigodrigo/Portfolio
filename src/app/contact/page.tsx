import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center bg-palet-two-pri">
        <div className="bg-palet-two-sec p-8 rounded-3xl mt-24 max-w-[1240px] mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-palet-two-qua ">Contact</h2>
            <div className="bg-palet-two-ter p-8 rounded-2xl my-4">
                <h3 className="text-2xl font-bold mb-4 ">Let&apos;s work together</h3>
                <div className="flex gap-8 justify-center">
                    <div className="w-900 h-640 bg-palet-two-qua p-8 text-justify flex flex-col justify-center rounded-xl">
                        <form className='max-w-[600px] m-auto'>
                            <div className='grid grid-cols-2 gap-2'>
                                <input className='border shadow-lg p-3 rounded-xl' type="text" placeholder='Name' />
                                <input className='border shadow-lg p-3 rounded-xl' type="email" placeholder='Email' />
                            </div>
                            <input className='border shadow-lg p-3 w-full my-2 rounded-xl' type="text" placeholder='Subject' />
                            <textarea className='border shadow-lg p-3 w-full' cols={30} rows={10} placeholder='Message'></textarea>
                            <button className='border-0 shadow-lg p-3 w-full mt-2 bg-palet-two-ter text-2xl font-bold rounded-xl'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
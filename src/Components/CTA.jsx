import React from 'react'

const CTA = () => {
  return (
    <div className="w-full flex bg-[#F0F0F0] space-y-8">
        <div className="p-6 flex flex-col items-center w-full space-y-2 my-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Let’s Get In Touch{" "}
          </h1>
          <p className="font-semibold text-[#353535] text-sm sm:text-lg">
            We’re here to answer your questions and help you find your next
            property.
          </p>
          <div className="p-2 w-full flex mt-8 justify-center items-center">
            <input
              type="text"
              className="w-full max-w-2xl h-10 outline-1 outline-[#999999] rounded-lg pl-2 bg-white"
              placeholder="Your email id"
            />
            <button className="bg-[#999999] h-10 w-24 sm:w-32 text-white rounded-lg">
              Notify Me
            </button>
          </div>
        </div>
      </div>
  )
}

export default CTA
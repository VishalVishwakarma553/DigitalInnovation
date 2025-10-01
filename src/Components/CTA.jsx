import React from 'react'

const CTA = () => {
  return (
    <div className="w-full flex justify-center">
        <div className="p-6 flex bg-[#FFDCB5] flex-col items-center rounded-2xl border border-[#353535] w-[80%] space-y-2 my-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Let’s Get In Touch{" "}
          </h1>
          <p className="font-semibold text-[#353535] text-sm sm:text-lg">
            We’re here to answer your questions and help you find your next
            property.
          </p>
          <div className="p-2 flex  flex-wrap justify-center items-center gap-1 rounded-full border border-[#000000] bg-[#D8A451]">
            <input
              type="text"
              className="w-[200px] sm:w-[300px] h-10 outline-2 outline-black rounded-full pl-2 bg-white"
              placeholder="Your email id"
            />
            <button className="px-8 py-1 bg-black text-white rounded-full">
              Notify Me
            </button>
          </div>
        </div>
      </div>
  )
}

export default CTA
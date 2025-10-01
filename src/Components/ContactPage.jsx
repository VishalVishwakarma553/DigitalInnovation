import React from "react";

const ContactPage = () => {
  return (
    <div>
      <img
        src="./contact.png"
        alt="contact"
        className="md:h-[450px] sm:h-[380px] h-[320px]"
      />
      <div className="p-12 space-y-16">
        <div>
          <span className="px-6 py-2 border border-[#DD8D0C] rounded-full text-[#DD8D0C] text-lg">
            Contact Us
          </span>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mt-4">
            Let’s Connect
          </h1>
        </div>
        <div className="flex gap-6 justify-center">
          {/* form */}
          <div className="p-6 shadow-2xl rounded-2xl w-full sm:w-1/2 flex flex-col justify-evenly items-center gap-2">
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="text-sm ">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="border border-[#DEA724] bg-[#FAFAFA] p-2 rounded-lg w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="text-sm ">
                Phone
              </label>
              <input
                id="name"
                type="text"
                placeholder="Phone"
                className="border border-[#DEA724] bg-[#FAFAFA] p-2 rounded-lg w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="text-sm ">
                Email id
              </label>
              <input
                id="name"
                type="text"
                placeholder="Email id"
                className="border border-[#DEA724] bg-[#FAFAFA] p-2 rounded-lg w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="text-sm ">
                Reason
              </label>
              <input
                id="name"
                type="text"
                placeholder="Reason"
                className="border border-[#DEA724] bg-[#FAFAFA] p-2 rounded-lg w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="text-sm ">
                short Message
              </label>
              <textarea
                id="name"
                type="text"
                placeholder="short Meassage"
                className="border border-[#DEA724] bg-[#FAFAFA] p-2 rounded-lg w-full"
              />
            </div>
            <button className="bg-[#080808] px-15 py-4 text-lg rounded-full font-bold text-white">
              Submit
            </button>
          </div>
          {/* Image */}
          <img
            src="./contactperson.png"
            alt="contactPerson"
            className="overflow-hidden hidden sm:block  self-end"
          />
        </div>
        <div className="space-y-8 md:p-16 sm:p-12 p-8">
          <div className="">
            <h1 className="font-bold sm:text-3xl text-2xl mb-1">
              Get in touch
            </h1>
            <p className="sm:text-lg text-sm">
              Your goals matter to us. Reach out and experience real estate with
              honesty, care, and dedication.
            </p>
          </div>
          <p className="py-[1px] bg-[#A9A9A9]"></p>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-18">
            <div className="flex gap-2 items-start">
              <img src="./Frame 142.svg" alt="frame" />
              <div>
                <h3 className="sm:text-3xl font-semibold text-2xl">Location</h3>
                <p className="md:text-xl lg:text-lg">
                  T81, 45 Burrendah Boulevard, Willetton WA 6155 Southland
                  Boulevard Shopping Center
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <img src="./Frame 143.svg" alt="frame" />
              <div>
                <h3 className="sm:text-3xl font-semibold text-2xl">Email Me</h3>
                <p className="md:text-xl lg:text-lg">
                  ali@idealrealtywa.com.au
                </p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-18 items-center">
            <div className="border-t-2 border-t-[#A9A9A9]">
              <h1 className="font-bold sm:text-3xl text-2xl mb-1 mt-4">Follow me</h1>
              <div className="flex gap-8 mt-2 ">
                <img
                  src="./instagram.png"
                  alt="Instagram"
                  className="h-[44px] cursor-pointer hover:scale-110 transition-transform"
                />
                <img
                  src="./facebook.png"
                  alt="Facebook"
                  className="h-[44px] cursor-pointer hover:scale-110 transition-transform"
                />
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <img src="./Frame 144.svg" alt="frame" />
              <div>
                <h3 className="sm:text-3xl font-semibold text-2xl">Call Me</h3>
                <p className="md:text-xl lg:text-lg">
                  893843949348
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="./Basemap image.png" alt="base" />
    </div>
  );
};

export default ContactPage;

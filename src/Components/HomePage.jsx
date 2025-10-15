import { ChevronRight } from "lucide-react";
const HomePage = () => {
  const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="w-full">
      <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[826px] overflow-hidden">
        {/* Background Image */}
        <div className="w-full h-full absolute inset-0">
          <img
            src="./heroPage.png"
            alt="header"
            className="h-full w-full object-cover"
          />
        </div>
        <img
          src="mohsin image 3.png"
          alt="m"
          className="h-[335px] xs: sm:h-[435px]  md:h-[536px] lg:h-[909px] object-cover absolute bottom-0 top-[14px] -right-15 lg:left-[285px]"
        />
        {/* <p className="absolute top-[37%] text-[#FF9D00] font-semibold font-['Poltawski_Nowy'] pl-3 sm:pl-6 md:pl-8 lg:pl-3 text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[140px]">
          Mohsin Ali <br /> Khan
        </p> */}
        <div className="absolute top-[35%] sm:top-[28%]  md:top-[250px] left-[20px] sm:left-[30px] md:left-[95px] text-[#6B2938]">
          <h1 className="font-[400] font-headland text-[40px] sm:text-[50px] md:text-[75px] lg:text-[90px]">
            MOHSIN <br /> ALI KHAN{" "}
          </h1>
          <p className="text-xs sm:text-lg md:text-[23.84px] font-[500] font-poppins mt-0.5 sm:mt-1.5 ml-0 sm:ml-1 md:ml-4 text-[#141212]">
            YOUR TRUSTED REAL ESTATE SPECIALIST
          </p>
          <button className="px-2 md:px-4 py-1 md:w-[300px] md:h-[60px] font-poppins font-[500] rounded-sm sm:rounded-[10px] bg-[#3D2836] text-[#D1BDA4] text-sm sm:text-lg md:text-[20px] mt-[20px] sm:mt-[60px]">
            FIND YOUR DREAM HOME
          </button>
        </div>
      </div>
      {/* Introduction Section */}
      <div className="space-y-3 sm:space-y-5 md:space-y-7">
        <div className="sm:my-14 my-10">
          <h1 className="text-[#141212] text-center font-poppins font-[500] md:text-[40px] sm:text-3xl text-2xl mb-4 sm:mb-8">
            Introducing Mohsin Ali Khan
          </h1>
          <div className="px-4 sm:px-7 md:px-10 font-[400] md:text-[17px] sm:text-xl text-lg md:space-y-9 sm:space-y-7 space-y-5 max-w-[1222px] mx-auto text-[#000000]">
            <p className="font-opensans">
              With a reputation built on trust and dedication, Mohsin Ali Khan
              is a rising name in Perth’s real estate market. His strong
              background in sales and customer service has shaped a client-first
              approach that focuses on honesty, results, and genuine care.
              Whether it’s a first home, a family upgrade, or an investment
              property, clients choose Mohsin for his ability to listen,
              understand, and deliver.
            </p>
            <p>
              Mohsin brings a modern, people-focused approach to real
              estate—using innovative marketing strategies and clear
              communication to create campaigns that connect with buyers and
              achieve strong outcomes. His clients value his integrity,
              approachable nature, and commitment to making the sales process as
              smooth and stress-free as possible.
            </p>
            <p>
              When you choose Mohsin to represent your property, you gain more
              than an agent—you gain a dedicated partner who goes the extra mile
              at every stage. From the very first conversation to final
              settlement, he ensures no detail is overlooked and that your goals
              are always the top priority.
            </p>
            <p>
              While achieving the best possible result is always his focus,
              Mohsin understands that the journey matters just as much as the
              destination. He prides himself on building long-term relationships
              through exceptional service, transparency, and trust.
            </p>
            <p>
              Driven, approachable, and passionate about real estate, Mohsin
              treats every client’s property as if it were his own—working
              tirelessly to secure the right result
            </p>
            <p>
              Ultimately, if you’re looking for clear communication, tailored
              marketing, strong negotiation, and someone who will stand by you
              every step of the way, Mohsin Ali Khan is the sales consultant you
              can count on.
            </p>
          </div>
        </div>
        {/* Examples Section */}
        <div className="px-4 sm:px-7 md:px-[60px] ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-5">
            {exampleArray.map((value) => (
              <div
                key={value}
                className="relative w-full h-[307px] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={`${value}.png`}
                  alt="img"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl flex items-center justify-center bg-[#E5A438] opacity-0 group-hover:opacity-80 text-white transition-opacity duration-300">
                  <button className="cursor-pointer opacity-95 px-4 py-2 rounded-full border font-medium text-lg">
                    View Property
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center py-[22px]">
            <button className="flex justify-center items-center mt-6 h-[40px] w-[120px] md:h-[50px] md:w-[155px] rounded-full border border-[#DD8D0C] text-[#DD8D0C] font-inter font-[500] text-[18px]">
              View more <ChevronRight />
            </button>
          </div>
        </div>
        {/* Achievement Section */}
        <div className="py-6 sm:py-8 md:py-10  bg-[#E7E7E7]">
          <h1 className="py-4 sm:py-6 md:py-8 text-center font-[400] text-2xl sm:text-3xl md:text-[40px] font-poppins text-[#4B2F3C] mb-14">
            Our Achievements
          </h1>
          <div className="flex justify-center items-center h-[201px] my-8 w-full sm:w-[70vw] mx-auto">
            <img
              src="./awards.png"
              alt="award"
              className="h-full lg:w-[1159px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#4B2F3C] px-4 sm:px-7 md:px-10 py-28">
        <h1 className="text-center text-white font-bold text-2xl sm:text-3xl md:text-4xl md:mb-28 sm:mb-8 mb-6">
          Current Development Projects
        </h1>
        <div className="sm:max-w-[80%] grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 sm:gap-x-7 md:gap-x-10 mx-auto">
          {[17, 18, 19, 20, 21, 22].map((value) => {
            {
              if (value != 22) {
                return (
                  <img
                    src={`./Rectangle ${value}.png`}
                    alt="ims"
                    className="h-[300px] "
                  />
                );
              } else {
                return (
                  <div className="relative ">
                    <img
                      src={`./Rectangle 20.png`}
                      alt="ims"
                      className="h-[300px] "
                    />
                    <div className="absolute inset-0 w-full h-full rounded-3xl bg-[#DD8D0C] opacity-50 flex justify-center items-center">
                      <p className="flex items-center text-5xl text-[#FFFFFF] ">
                        View more{" "}
                        <span className="font-bold pl-1.5">&#8250; </span>{" "}
                        <span className="font-bold">&#8250;</span>{" "}
                      </p>
                    </div>
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

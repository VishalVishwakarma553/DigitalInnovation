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
          className="h-[335px] xs: sm:h-[435px]  md:h-[536px] lg:h-[878px] object-cover absolute bottom-0 top-16 -right-15 lg:-right-12"
        />
        {/* <p className="absolute top-[37%] text-[#FF9D00] font-semibold font-['Poltawski_Nowy'] pl-3 sm:pl-6 md:pl-8 lg:pl-3 text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[140px]">
          Mohsin Ali <br /> Khan
        </p> */}
        <div className="absolute top-[35%] sm:top-[28%]  md:top-[30%] lg:top-[37%] left-[20px] sm:left-[30px] md:left-[50px] lg:left-[80px] text-[#6B2938]">
          <h1 className="font-semibold font-['HeadlandOne'] text-[40px] sm:text-[50px] md:text-[75px] lg:text-[90px]">Mohsin <br /> Ali Khan </h1>
          <p className="text-xs sm:text-lg md:text-xl font-medium font-['Poppins'] mt-0.5 sm:mt-1.5 ml-0 sm:ml-1 md:ml-4">Your Trusted Real Estate Partners</p>
          <button className="px-2 md:px-4 py-1 md:py-2 font-medium font-[Poppins] rounded-sm sm:rounded-lg bg-[#3D2836] text-[#D1BDA4] text-sm sm:text-lg md:text-xl mt-6 sm:mt-10 ml-2 sm:ml-3 md:ml-6">Find your dream home</button>
        </div>
      </div>
      {/* Introduction Section */}
      <div className="space-y-3 sm:space-y-5 md:space-y-7">
        <div className="sm:my-14 my-10">
          <h1 className="text-[#141212] text-center font-['Poppins'] font-bold md:text-5xl sm:text-3xl text-2xl mb-4 sm:mb-8">
            Introducing Mohsin Ali Khan
          </h1>
          <div className="px-4 sm:px-7 md:px-10 font-medium md:text-2xl sm:text-xl text-lg md:space-y-9 sm:space-y-7 space-y-5 font-openSans">
            <p>
              With a reputation built on trust, dedication, and results, Mohsin
              Ali Khan is an emerging leader in Perth’s real estate market.
              Backed by a strong background in sales, customer service, and
              property knowledge, Mohsin has developed a client first philosophy
              that places honesty, integrity, and genuine care at the heart of
              every transaction.
            </p>
            <p>
              Whether assisting with established properties, first home
              purchase, a family upgrade or downsize, an investment property, or
              development opportunities, Mohsin is recognised for his ability to
              listen, understand, and deliver tailored solutions that align with
              each client’s goals.
            </p>
            <div>
              <p>
                In addition to his expertise in real estate sales, Mohsin
                possesses a valuable understanding of the building and
                construction sector. This insight allows him to provide clients
                with informed guidance on:
              </p>
              <ul className="list-disc p-3 sm:p-5 md:p-8">
                <li>Property potential and improvements.</li>
                <li>Marketability of new builds and renovations.</li>
                <li>Marketability of new builds and renovations.</li>
                <li>
                  Working with developers, builders, and investors to maximise
                  returns.
                </li>
              </ul>
            </div>
            <p>
              His ability to combine market knowledge with a practical
              appreciation of construction makes him a trusted advisor for both
              homeowners and property investors seeking to make confident,
              well-informed decisions. Mohsin brings a modern, people-focused
              approach to real estate leveraging innovative marketing
              strategies, strong negotiation skills, and clear communication to
              create campaigns that connect with buyers and achieve premium
              results. His approachable nature, transparency, and attention to
              detail ensure that the sales process remains as smooth and stress
              free as possible for every client.
            </p>
            <p>
              When you appoint Mohsin, you gain more than a sales consultant you gain a dedicated partner who goes the extra mile from the very first conversation through to final settlement. He prides himself on building long term relationships founded on service excellence, open communication, and trust.
              <br />
              Above all, Mohsin treats every client’s property with the same
              care as his own, working tirelessly to secure the right outcome.
              For those seeking clear guidance, tailored marketing, strong
              industry knowledge, and a trusted advocate by their side, Mohsin
              Ali Khan is the professional you can count on in Perth’s
              competitive property market.
            </p>
          </div>
        </div>
        {/* Examples Section */}
        <div className="px-4 sm:px-7 md:px-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-5">
            {exampleArray.map((value) => (
              <img
                src={`${value}.png`}
                key={value}
                alt="img"
                className="w-full h-[307px] object-cover rounded-2xl"
              />
            ))}
          </div>
          <div className="w-full flex justify-center">
            <button className="flex mt-6 px-4 py-2 rounded-full border border-[#DD8D0C] text-[#DD8D0C]">
              View more <ChevronRight />
            </button>
          </div>
        </div>
        {/* Achievement Section */}
        <div className="py-6 sm:py-8 md:py-10  bg-[#E7E7E7]">
          <h1 className="py-4 sm:py-6 md:py-8 text-center font-bold text-2xl sm:text-3xl md:text-5xl font-['Open Sans']">
            Our Achievements
          </h1>
          <div className="flex justify-center items-center h-[120px] my-8 w-full sm:w-[70vw] mx-auto sm:flex-nowrap">
            <img
              src="./image 11.png"
              alt="award"
              className="h-full hidden sm:block "
            />
            <img
              src="./awrads-Photoroom 1.png"
              alt="award"
              className="h-[180px] w-full"
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

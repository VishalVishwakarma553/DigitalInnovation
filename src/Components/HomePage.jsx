import { ChevronRight } from "lucide-react";
const HomePage = () => {
  const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="w-full">
      <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[826px] overflow-hidden">
        {/* Background Image */}
        <img
          src="./header.png"
          alt="header"
          className="w-full h-full object-cover absolute inset-0"
        />
        <p className="absolute top-[37%] text-[#FF9D00] font-semibold font-['Poltawski_Nowy'] pl-3 sm:pl-6 md:pl-8 lg:pl-3 text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[140px]">
          Mohsin Ali <br /> Khan
        </p>
      </div>
      {/* Introduction Section */}
      <div className="px-4 sm:px-7 md:px-10 space-y-3 sm:space-y-5 md:space-y-7">
        <div className="sm:my-14 my-10">
          <h1 className="text-[#141212] font-bold md:text-5xl sm:text-3xl text-2xl ">
            Introducing Mohsin Ali Khan
          </h1>
          <div className="font-medium md:text-2xl sm:text-xl text-lg md:space-y-9 sm:space-y-7 space-y-5">
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
        <div>
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
        <div>
          <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-5xl">
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
      <div className="bg-[#1B1B1B] px-4 sm:px-7 md:px-10 py-14">
        <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
          Current Development Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
          {[17, 18, 19, 20, 21, 22].map((value) => {
            {
              if (value != 22) {
                return (
                  <img
                    src={`./Rectangle ${value}.png`}
                    alt="ims"
                    className="h-[384px] rounded-2xl "
                  />
                );
              } else {
                return (
                  <div className="relative ">
                    <img
                      src={`./Rectangle 20.png`}
                      alt="ims"
                      className="h-[384px] rounded-2xl"
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

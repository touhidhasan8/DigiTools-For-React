import AiImg from "../../assets/Group 5.png";
import BannerImage from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 mt-10 md:mt-20 mb-10 md:mb-20 flex flex-col-reverse md:flex-row items-center gap-10">

      {/* Left Content */}
      <div className="space-y-5 text-center md:text-left">
        
        {/* Badge */}
        <div className="badge badge-soft badge-primary flex items-center gap-2 mx-auto md:mx-0 w-fit">
          <img src={AiImg} alt="" className="w-4 h-4" />
          <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold text-xs md:text-sm">
            New: AI-Powered Tools Available
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
          Supercharge Your <span className="text-purple-500">Digital Workflow</span>
        </h1>

        {/* Description */}
        <p className="text-[#627382] text-sm md:text-base">
          Access premium AI tools, design assets, templates, and productivity <br className="hidden md:block" />
          software—all in one place. Start creating faster today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="btn bg-[#4F39F6] rounded-full text-white w-full sm:w-auto">
            Explore Products
          </button>
          <button className="btn btn-outline btn-primary rounded-full w-full sm:w-auto">
            Watch Demo
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2">
        <img src={BannerImage} alt="" className="w-full max-w-md mx-auto md:max-w-full" />
      </div>
    </div>
  );
};

export default Banner;
import AiImg from "../../assets/Group 5.png"
import BannerImage from '../../assets/banner.png'
const Banner = () => {
    return (
        <div className="flex justify-center items-center mt-20 mb-20 container mx-auto ">
            <div className="space-y-5 ">
                <div className="badge badge-soft badge-primary flex items-center gap-2">
                    <img src={AiImg} alt="" className="w-4 h-4" />

                    <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
                        New: AI-Powered Tools Available
                    </span>
                </div>
                <h1 className="text-7xl font-semibold">Supercharge Your Digital Workflow</h1>
                <p className="text-[#627382] ">Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />
                    Explore Products
                </p>
                <div className="flex gap-5">
                    <button className="btn bg-[#4F39F6] rounded-full text-white">Explore Products</button>
                    <button className="btn btn-outline btn-primary rounded-full">Watch Demo</button>

                </div>
            </div>
            <div>
                <img src={BannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;
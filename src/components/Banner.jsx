import { TypeAnimation } from "react-type-animation";
import { FaCloudDownloadAlt } from "react-icons/fa";


const Banner = () => {
    return (
        <div className="flex flex-col-reverse gap-y-6 lg:gap-y-0 lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2">
                <div className="text-4xl lg:text-6xl font-semibold">
                <h1>
                    I am a
                </h1>
                <div className="bg-gradient-to-r from-[#EE4E4E] via-[#A1DD70] to-green-500 text-transparent bg-clip-text animate-gradient bg-300%">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Web Developer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Frontend Developer',
                            1000,
                            'React Js Developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
                </div>
                <div
                    className="max-w-max bg-transparent items-center justify-center flex border-2 border-[#A1DD70] text-lg font-medium shadow-lg hover:bg-[#A1DD70] text-[#A1DD70] hover:text-black duration-300 cursor-pointer active:scale-[0.98] mt-8"
                >
                    <button className="px-5 py-2">Download Resume <FaCloudDownloadAlt className="inline ms-2" /></button>
                </div>

            </div>
            <div className="lg:w-1/2">
                <img src="/myImage.png" alt="" className="w-full" />
            </div>
        </div>
    );
};

export default Banner;
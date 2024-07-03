import { TypeAnimation } from "react-type-animation";
import "./Banner.css"


const Banner = () => {


    return (

        <div>

            <div className="banner h-[500px] lg:h-[700px] justify-center lg:justify-start">
                <div className="banner-content">
                    
                    <div className="text-3xl lg:text-5xl font-semibold mb-5">
                        <h1 className="text-center">
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
                    <p className="banner-description opacity-80">
                        Crafting efficient and scalable web applications using MongoDB, Express, React, and Node.js.
                    </p>
                    <div
                        className="max-w-max mx-auto bg-transparent items-center justify-center flex border-2 border-[#A1DD70] text-lg font-medium shadow-lg hover:bg-[#A1DD70] text-[#A1DD70] hover:text-black duration-300 cursor-pointer active:scale-[0.98]"
                    >
                        <a href="#projects">
                            <button className="px-5 py-2">View My Work</button>
                        </a>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Banner;
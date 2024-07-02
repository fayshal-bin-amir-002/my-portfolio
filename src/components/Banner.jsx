import { TypeAnimation } from "react-type-animation";
import { Parallax } from "react-parallax";


const Banner = () => {
    return (
        <div>
            <Parallax
                blur={{ min: -10, max: 15 }}
                bgImage={'/myImage.png'}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="flex flex-col items-center justify-center h-[400px] lg:h-[700px]">
                    <div className="">
                        <div className="text-4xl lg:text-6xl font-semibold">
                            <h1 className="text-center" style={{textShadow: "2px 2px 4px black"}}>
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
                    </div>
                    

                </div>
                {/* <div style={{ height: '400px', objectFit: "cover" }} /> */}
            </Parallax>

        </div>
    );
};

export default Banner;
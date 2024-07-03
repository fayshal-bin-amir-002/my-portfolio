import { FaCloudDownloadAlt } from "react-icons/fa";
import { RiContactsBook3Line } from "react-icons/ri";
import "./About.css"

const About = () => {
    return (
        <div>
            <div id="about" className="relative overflow-hidden my-12 md:my-16 lg:my-24">
                <h2 className="text-center mb-12 border-b-2 border-[#A1DD70] max-w-max mx-auto pb-2 md:mb-16 text-3xl tracking-tight font-extrabold  md:text-4xl">About Me</h2>
                <div className="w-full flex flex-col-reverse lg:flex-row  gap-8 lg:gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <p className="opacity-80">
                            Hi, i&apos;m Fayshal Bin Amir from Rangpur, Bangladesh. I&apos;m currently studying BSc in Computer Science and Engineering at Begum Rokeya University, Rangpur. I&apos;m gaining knowledge about Web Development. I have learnt html, css, tailwind css, react and little about mongodb, node js, express js. I have a great passion about web development. I am also focusing to my problem solving skill.
                        </p>
                        <div className="flex items-center flex-wrap gap-2 lg:gap-5 mt-8 md:mt-12 lg:mt-16">
                            <div
                                className="max-w-max bg-transparent items-center justify-center flex border-2 border-[#A1DD70] text-lg font-medium shadow-lg hover:bg-[#A1DD70] text-[#A1DD70] hover:text-black duration-300 cursor-pointer active:scale-[0.98]"
                            >
                                <a href="/myImage.png" download="/myImage.png">
                                    <button className="px-5 py-2">Download Resume<FaCloudDownloadAlt className="inline ms-2" /></button>
                                </a>
                            </div>
                            <div
                                className="max-w-max items-center justify-center flex border-2 border-[#A1DD70] text-lg font-medium shadow-lg bg-[#A1DD70] text-black hover:bg-transparent hover:text-[#A1DD70] duration-300 cursor-pointer active:scale-[0.98]"
                            >
                                <a href="#contact">
                                    <button className="px-5 py-2">Contact<RiContactsBook3Line className="inline ms-2" /></button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="card">
                            <div className="imgbox">
                                <div className="img"></div>
                            </div>
                            <div className="details">
                                <h2 className="title">Fayshal Bin Amir</h2>
                                <span className="caption">Web Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;



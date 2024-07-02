import { FaCloudDownloadAlt } from "react-icons/fa";
import { RiContactsBook3Line } from "react-icons/ri";

const About = () => {
    return (
        <div>
            <div id="about" className="relative overflow-hidden my-12 md:my-16 lg:my-24">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-black">
                        <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-black transform translate-x-1/2"
                            fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100"></polygon>
                        </svg>

                        <div className="pt-1"></div>

                        <main className="mx-auto max-w-7xl">
                            <div className="sm:text-center lg:text-left">
                                <h2 className="mb-4 md:mb-6 text-3xl tracking-tight font-extrabold  md:text-4xl">
                                    About me
                                </h2>

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
                                        className="max-w-max bg-transparent items-center justify-center flex border-2 border-[#A1DD70] text-lg font-medium shadow-lg bg-[#A1DD70] text-black hover:bg-transparent hover:text-[#A1DD70] duration-300 cursor-pointer active:scale-[0.98]"
                                    >
                                        <button className="px-5 py-2">Contact<RiContactsBook3Line className="inline ms-2" /></button>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-transparent">
                    <img className="h-56 w-full object-contain object-center sm:h-72 md:h-96 lg:w-full lg:h-full" src="/image.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
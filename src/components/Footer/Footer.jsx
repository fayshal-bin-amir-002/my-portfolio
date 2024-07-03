import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="w-full">
            <div>

                <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
                    <a href="#" className="flex justify-center ">
                        <span
                            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#EE4E4E] via-[#A1DD70] to-green-500 text-transparent bg-clip-text animate-gradient bg-300%"
                        >
                            &lt; Fayshal /&gt;
                        </span>

                    </a>
                    <ul className="text-lg text-center sm:flex items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
                        <li className="sm:my-0 my-2"><a className="text-white hover:text-gray-400">Blog</a></li>
                        <li ><a className="text-white hover:text-gray-400">Support</a></li>
                    </ul>
                    <div className="flex  space-x-4 sm:justify-center  ">
                        <a href="mailto:foyshalbinamir@gmail.com" target="_blank" className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-[#A1DD70] hover:text-black">
                            <MdEmail />
                        </a>
                        <a href="https://www.facebook.com/foyshal.binamir.3" target="_blank" className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-[#A1DD70] hover:text-black">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.linkedin.com/in/fayshal-bin-amir" target="_blank" className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-[#A1DD70] hover:text-black">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <div className="py-7 border-t border-gray-700">
                    <div className="flex items-center justify-center">
                        <span className="text-gray-400 ">&copy; Fayshal Bin Amir || 2024, All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import "./Projects.css"
import { FaGithub } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";

const Project2 = () => {
    return (
        <div data-aos="flip-up" data-aos-duration="2000" data-aos-delay="600" className="relative group cursor-pointer group overflow-hidden text-gray-50 h-96 rounded-2xl hover:duration-700 duration-700 border border-white overflow-x-scroll">
            <div className={`w-full h-96 bg2 text-gray-800`}>
            </div>
            <div className="absolute h-96 w-full bg-black -bottom-[315px] p-3 flex flex-col group-hover:-bottom-0 group-hover:duration-600 duration-500 text-white overflow-y-scroll">
                <div className="h-full flex flex-col justify-between">
                    <div>
                        <span className="font-bold text-xl mb-1">Book Hut</span>
                        <p className="mb-1">It is a digital library management website.</p>
                        <div className="flex flex-col opacity-80 mb-1">
                            <small>	&#8594; A user can borrow a book from here but must be a user of our digital library.</small>
                            <small>	&#8594; After reading he/she can return the book with the return book confirmation in website.</small>
                            <small>	&#8594; Here as a librarian, who can add books and update books.</small>
                        </div>
                        <div className="text-xs flex flex-wrap items-center gap-2 text-[#A1DD70] mb-2">
                            <span>Tailwind Css</span>
                            <span>React</span>
                            <span>Node Js</span>
                            <span>Express Js</span>
                            <span>Mongodb</span>
                        </div>
                    </div>
                    <div className="pt-3 flex flex-wrap justify-center gap-y-3 gap-x-4 lg:gap-x-8 items-center">
                        <div
                            className="max-w-max bg-transparent items-center justify-center flex border-2 border-[#A1DD70] text-lg font-medium shadow-lg hover:bg-[#A1DD70] text-[#A1DD70] hover:text-black duration-300 cursor-pointer active:scale-[0.98]"
                        >
                            <a href="https://github.com/fayshal-bin-amir-002/book-hut" target="_blank" rel="noopener noreferrer">
                                <button className="px-4 py-2"><FaGithub className="inline mr-2" />View Code(client)</button>
                            </a>
                        </div>
                        <div
                            className="max-w-max bg-transparent items-center justify-center flex border-2 border-[#A1DD70] text-lg font-medium shadow-lg hover:bg-[#A1DD70] text-[#A1DD70] hover:text-black duration-300 cursor-pointer active:scale-[0.98]"
                        >
                            <a href="https://github.com/fayshal-bin-amir-002/book-hut-server-side" target="_blank" rel="noopener noreferrer">
                                <button className="px-4 py-2"><FaGithub className="inline mr-2" />View Code(server)</button>
                            </a>
                        </div>
                        <div
                            className="max-w-max bg-transparent items-center justify-center flex border-2 border-[#A1DD70] text-lg font-medium shadow-lg hover:bg-[#A1DD70] text-[#A1DD70] hover:text-black duration-300 cursor-pointer active:scale-[0.98]"
                        >
                            <a href="https://book-hut-digital-library.netlify.app" target="_blank" rel="noopener noreferrer">
                                <button className="px-4 py-2"><IoRocketOutline className="inline mr-2" />Live Link</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project2;
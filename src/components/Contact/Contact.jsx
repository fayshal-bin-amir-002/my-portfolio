import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import fbImg from "../../assets/fb.png";
import linkdImg from "../../assets/ld.png";


const Contact = () => {
    return (
        <div id="contact" className="my-12 md:my-16 lg:my-24">
            <h2 className="text-center mb-12 md:mb-16 text-3xl tracking-tight font-extrabold  md:text-4xl border-b-2 border-[#A1DD70] max-w-max mx-auto pb-2">Contact Me</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-6 md:gap-8">
                        <img src="/myImage.png" alt="" className="size-[280px] mx-auto lg:mx-0 rounded-full border-2 border-white object-cover bg-[#A1DD70]" />
                        <div className="space-y-4">
                            <a href="tel:+8801755288840" className="text-lg flex items-center"><FaPhoneSquareAlt className="inline mr-2" /><span className="font-medium opacity-80">+8801755288840</span></a>
                            <a href="mailto:foyshalbinamir@gmail.com" className="text-lg flex items-center"><MdEmail className="inline mr-2" /><span className="font-medium opacity-80">foyshalbinamir@gmail.com</span></a>
                            <div className="flex items-center gap-4">
                                <a href="https://www.facebook.com/foyshal.binamir.3" target="_blank" rel="noopener noreferrer">
                                    <img src={fbImg} alt="" className="size-12" />
                                </a>
                                <a href="https://www.linkedin.com/in/fayshal-bin-amir" target="_blank" rel="noopener noreferrer">
                                    <img src={linkdImg} alt="" className="size-12" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full text-black">
                    <form action="https://getform.io/f/pbgxxeya" method="post">
                        <div className="mb-3 w-full">
                            <label className="block font-medium mb-[2px] text-[#A1DD70]" htmlFor="exampleInput90">
                                Name
                            </label>
                            <input type="text" name="name" className="px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90" placeholder="Name" />
                        </div>

                        <div className="mb-3 w-full">
                            <label className="block font-medium mb-[2px] text-[#A1DD70]" htmlFor="exampleInput90">
                                Email
                            </label>
                            <input type="email" name="email" className="px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90"
                                placeholder="Enter your email address" />
                        </div>

                        <div className="mb-3 w-full">
                            <label className="block font-medium mb-[2px] text-[#A1DD70]" htmlFor="exampleInput90">
                                Message
                            </label>
                            <textarea className="px-2 h-20 py-2 border rounded-[5px] w-full outline-none" name="message" id="message"></textarea>
                        </div>

                        <button type="submit"
                            className="mb-6 inline-block w-full rounded bg-[#A1DD70] px-6 py-2.5 font-medium uppercase leading-normal text-black text-lg hover:shadow-md ">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
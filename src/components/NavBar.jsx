import { useState } from "react";

const NavBar = () => {

    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const navLinks = [
        {
            title: "Home",
            link: "#"
        },
        {
            title: "About",
            link: "#about"
        },
        {
            title: "Skills",
            link: "#skills"
        },
        {
            title: "Projects",
            link: "#projects"
        },
    ]

    return (

        <header className="border-b-1 relative z-20 w-full after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full lg:after:hidden">
            <div className="relative mx-auto w-full">
                <nav
                    aria-label="main navigation"
                    className="flex h-[5.5rem] w-full items-stretch justify-between font-medium text-white"
                    role="navigation"
                >

                    <a
                        id="WindUI"
                        aria-label="WindUI logo"
                        aria-current="page"
                        className="flex items-center gap-2 whitespace-nowrap py-3 focus:outline-none lg:flex-1"

                    >
                        <span
                            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#EE4E4E] via-[#A1DD70] to-green-500 text-transparent bg-clip-text animate-gradient bg-300%"
                        >
                            &lt; Fayshal /&gt;
                        </span>
                    </a>

                    <button
                        className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${isToggleOpen
                                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                                : ""
                            }
              `}
                        onClick={() => setIsToggleOpen(!isToggleOpen)}
                        aria-expanded={isToggleOpen ? "true" : "false"}
                        aria-label="Toggle navigation"
                    >
                        <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                            <span
                                aria-hidden="true"
                                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
                            ></span>
                            <span
                                aria-hidden="true"
                                className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
                            ></span>
                            <span
                                aria-hidden="true"
                                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
                            ></span>
                        </div>
                    </button>

                    <ul
                        role="menubar"
                        aria-label="Select page"
                        className={`absolute left-0 top-0 z-[-1]  w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:gap-16 lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                            ? "visible opacity-100 backdrop-blur-sm"
                            : "invisible opacity-0"
                            }`}
                    >
                        {
                            navLinks.map((item, i) => <a key={i}
                                role="menuitem"
                                aria-haspopup="false"
                                href={item.link}
                                className="flex text-lg items-center gap-2 py-2 lg:py-4 transition-colors duration-300 hover:text-[#A1DD70] focus:text-[#A1DD70] focus:outline-none focus-visible:outline-none bg-white text-black justify-center border border-black mb-1 rounded-lg lg:bg-transparent lg:text-white lg:border-none lg:mb-0"
                            >
                                <span className="cursor-pointer">{item.title}</span>
                            </a>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </header>


    );
};

export default NavBar;
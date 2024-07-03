const Education = () => {
    return (
        <div className="w-full" id="education">
            <h2 className="text-center mb-12 md:mb-16 text-3xl tracking-tight font-extrabold  md:text-4xl border-b-2 border-[#A1DD70] max-w-max mx-auto pb-2">Education</h2>

            <div className="p-4">
                <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
                    <div className="flex md:contents flex-row-reverse">
                        <div
                            className="relative lg:w-[450px] p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <small>2019 - 2021</small>
                            <h3 className="text-lg font-semibold lg:text-xl">Higher Secondary School Certificate</h3>
                            <p className="mt-2 leading-6">Armed Police Battalion Public School & College, Bogura</p>
                            <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">HSC</span>
                        </div>
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-[#A1DD70] rounded-t-full bg-gradient-to-b from-[#A1DD70] to-[#A1DD70]">
                                </div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-[#A1DD70] rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div className="flex md:contents">
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-[#A1DD70]"></div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-[#A1DD70] rounded-full top-1/2"></div>
                        </div>
                        <div className="relative lg:w-[450px] p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                            <small>2023 - Present</small>
                            <h3 className="text-lg font-semibold lg:text-xl">Bachelor of Science</h3>
                            <small>Computer Science and Engineering</small>
                            <p className="mt-2 leading-6">Begum Rokeya University, Rangpur</p>
                            <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">B.Sc</span>
                        </div>
                    </div>


                </div>
            </div>

            {/* <div className="flex flex-col gap-4 items-center text-black">

                <div className="flex flex-col md:flex-row max-w-lg space-y-4 md:space-y-0 md:space-x-4 ">
                    <div className="flex-shrink-0 -mb-6 mt-10 z-20">
                        <div className="h-12 w-12 bg-[#A1DD70] rounded-full flex items-center justify-center font-bold">B.Sc
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="bg-gray-200 rounded-lg p-4">
                            <p>2023 - Present</p>
                            <h3 className="font-medium text-lg">Bachelor of Science</h3>
                            <small>Computer Science and Engineering</small>
                            <p className="mt-2">Begum Rokeya University, Rangpur</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row max-w-lg space-y-4 md:space-y-0 md:space-x-4 ">
                    <div className="flex-shrink-0 -mb-6 mt-8 z-20">
                        <div className="h-12 w-12 bg-[#A1DD70] rounded-full flex items-center justify-center font-bold">HSC
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="bg-gray-200 rounded-lg p-4">
                            <p>2019 - 2021</p>
                            <h3 className="font-medium text-lg mb-2">Higher Secondary School Certificate</h3>
                            <p className=""></p>
                        </div>
                    </div>
                </div>

            </div> */}
        </div>
    );
};

export default Education;
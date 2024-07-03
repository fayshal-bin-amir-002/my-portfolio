import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

const Projects = () => {
    return (
        <div className="mb-12 md:mb-16 lg:mb-24" id="projects">
            <h2 className="text-center mb-12 md:mb-16 text-3xl tracking-tight font-extrabold  md:text-4xl border-b-2 border-[#A1DD70] max-w-max mx-auto pb-2" data-aos="fade-down" data-aos-duration="500">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-hidden">
                <Project1></Project1>
                <Project2></Project2>
                <Project3></Project3>
            </div>
        </div>
    );
};

export default Projects;
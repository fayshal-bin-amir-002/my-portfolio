import htmlImg from "../assets/icons8-html-480.png";
import cssImg from "../assets/icons8-css-400.png";
import tailImg from "../assets/icons8-tailwind-css-480.png";
import jsImg from "../assets/icons8-javascript-480.png";
import reactImg from "../assets/icons8-react-native-480.png";
import mongoImg from "../assets/icons8-mongodb-480.png";
import nodeImg from "../assets/icons8-nodejs-480.png";
import exImg from "../assets/icons8-express-js-480.png";


const Skills = () => {

    const imgs = [htmlImg, cssImg, tailImg, jsImg, reactImg, mongoImg, nodeImg, exImg];

    return (
        <div className="mb-12 md:mb-16 lg:mb-24" id="skills">
            <h2 className="text-center mb-12 md:mb-16 text-3xl tracking-tight font-extrabold  md:text-4xl border-b-2 border-[#A1DD70] max-w-max mx-auto pb-2">My Skills</h2>
            <div className="flex justify-center items-center gap-6 lg:gal-8 flex-wrap">
                {
                    imgs.map((img, i) => <div key={i} className="w-[100px] md:w-[150px] border-white border p-3 rounded-lg shadow-[#A1DD70] shadow-md hover:-translate-y-2 transition duration-300">
                        <img src={img} alt="" className="w-full" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Skills;
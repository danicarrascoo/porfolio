import React from "react";
import SkillCard from "./Helper/SkillCard";

const Skills = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-black ">
            <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
                <div className="col-span-3">
                    <p className="heading__mini">My Skills</p>
                    <h1 className="heading__primary">Let´s Explore Popular <span className="text-yellow-300">Skills</span>{" "} & Experience</h1>
                    <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quibusdam, laborum fuga consectetur praesentium quis minima vitae officia fugiat, similique optio assumenda repellat, sunt quos maxime. Itaque minus facere at?
                    </p>
                    <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2x1 transition-all before:absolute before:h-8 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                        <span className="relative z-10">Learn More</span>
                    </button>
                </div>
                <div className="col-span-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-[1rem] items-center">
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center">
                            <SkillCard title="React" image="/image/react.svg" percente="90%" />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
                            <SkillCard title="CSS" image="/public/image/css.scg" percente="97%" />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="400">
                            <SkillCard title="JavaScript" image="/image/js.svg" percente="77%" />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="600">
                            <SkillCard title="TypeScript" image="/image/ts.svg" percente="67%" />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="800">
                            <SkillCard title="HTML" image="/image/html.svg" percente="67%" />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1000">
                            <SkillCard title="Node JS" image="/image/node.svg" percente="77%" />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1200">
                            <SkillCard title="MongoDB" image="/image/mongo.svg" percente="65%" />
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1400">
                            <SkillCard title="Python" image="/image/python.svg" percente="55%" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;

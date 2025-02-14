import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

const AboutMe = () => {
    return (
        <div className="mt-[3rem] bg-black pb-[3rem]">
            <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]"> 
                <div>
                    <p className="heading__mini">AboutMe</p>
                    <h1 className="heading__primary">
                        Profesional <span className="text-yellow-400">website</span> for your business 
                    </h1>
                    <p className="text-[15px] mt-[1.3rem] text-white opacity-75">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos beatae molestiae, quae cumque rerum adipisci sapiente eveniet nisi. Excepturi, corporis a! Officia eum repellat culpa. Exercitationem illum optio voluptatum aliquid!
                    </p>
                    <div className="mt-[2rem] space-y-3">
                        <div className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                            <p className="text-[18px] text-white">Frontend Development</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                            <p className="text-[18px] text-white">Backend Development</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                            <p className="text-[18px] text-white">Web Development</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                            <p className="text-[18px] text-white">Mern Development</p>
                        </div>
                    </div>
                </div>
                <div className="lg:ml-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
                        <div
                            data-aos="zoom-in"
                            data-aos-anchor-placement="top-center"
                            className="p-6 text-center bg-yellow-500">
                            <p className="text-[20px] text-black font-bold">2</p>
                            <p className="text-[20px] text-black font-600">
                                Year of Experience
                            </p>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-anchor-placement="top-center"
                            data-aos-delay="200"
                            className="p-6 text-center bg-yellow-500">
                            <p className="text-[20px] text-black font-bold">200</p>
                            <p className="text-[20px] text-black font-600">
                                Happy Clients
                            </p>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-anchor-placement="top-center"
                            data-aos-delay="400"
                            className="p-6 text-center bg-yellow-500">
                            <p className="text-[20px] text-black font-bold">2</p>
                            <p className="text-[20px] text-black font-600">
                                Experience :P
                            </p>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-anchor-placement="top-center"
                            data-aos-delay="600"
                            className="p-6 text-center bg-yellow-500">
                            <p className="text-[20px] text-black font-bold">2</p>
                            <p className="text-[20px] text-black font-600">
                                Experience :P
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;

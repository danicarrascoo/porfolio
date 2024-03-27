import React from "react";
import ProjectCard from "./Helper/ProjectCard";

const Project = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-gray-900">
            <div className="text-center">
                <p className="heading__mini">Recent Works</p>
                <h1 className="heading__primary">
                    My Best <span className="text-yellow-300">Projects</span>
                </h1>
            </div>
            <ProjectCard 
                title="E-commerce website" 
                tech1="React" 
                tech2="Next.js" 
                tech3="Tailwind" 
                tech4="TypeScript"
                image="/image/p1.png"
            />
            <ProjectCard 
                title="Portfolio website" 
                tech1="React" 
                tech2="Next.js" 
                tech3="Tailwind" 
                tech4="TypeScript"
                image="/image/p2.png"
            />
            <ProjectCard 
                title="Fullstack Food delivery webapp" 
                tech1="React" 
                tech2="Next.js" 
                tech3="Node.js" 
                tech4="TypeScript"
                image="/image/p3.png"
            />
            <ProjectCard 
                title="Travel website" 
                tech1="React" 
                tech2="Next.js" 
                tech3="Tailwind" 
                tech4="TypeScript"
                image="/image/p4.png"
            />
        </div>
    );
};

export default Project;

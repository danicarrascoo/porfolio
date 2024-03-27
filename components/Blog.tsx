import React from "react";
import BlogCard from "./Helper/BlogCard";

const Blog = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-black">
            <div className="text-center">
                <p className="heading__mini">My Blog</p>
                <h1 className="heading__primary">
                    My Latest <span className="text-yellow-300">Blog</span> and news
                </h1>
            </div>
            <div className="w-[80%] mx-auto pt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[2rem]">
                <div 
                    data-aos="zoom-in"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="200">
                    <BlogCard
                        title="Fullstack developer Roadmap"
                        comment="4"
                        date=""
                        image="/image/b1.jpg" /> 
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="400">
                    <BlogCard
                        title="Starting with React Js"
                        comment="8"
                        date=""
                        image="/image/b2.jpg" /> 
                </div>
                <div 
                    data-aos="zoom-in"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="600">
                    <BlogCard
                        title="Time Management In Tech Job"
                        comment="4"
                        date=""
                        image="/image/b3.jpg" /> 
                </div>
            </div>
        </div>
    );
};

export default Blog;

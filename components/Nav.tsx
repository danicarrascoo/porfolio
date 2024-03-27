import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

interface Props {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {

    const [navSticky, setNavSticky] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavSticky(true);
            }
            if (window.scrollY <= 90) {
                setNavSticky(false);
            }
        };
        window.addEventListener("scroll", handler);
    }, []);

    const stickyStyle = navSticky ? "bg-[#21248] shadow-gray-900 shadow-sm" : "";

    return (
        <div className={`fixed w-[100%] ${stickyStyle}  transition-all duration-300 z-[1000]`}
        >
            <div className="flex items-center h-[12vh] justify-between w-[80%] mx-auto">
                <div className="font-logo text-[18px]">
                    <span className="text-[30px] md:text-[40px]">DC</span>
                    Daniela Carrrasco
                </div>
                <ul className="md:flex hidden items-center space-x-10">
                    <li>
                        <a className="nav_link" href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">
                            Contact
                        </a>
                    </li>
                </ul>
                <Bars3CenterLeftIcon
                    onClick={openNav}
                    className="w-[2.rem] md:hidden rotate-180"
                />
            </div>
        </div>
    );
};

export default Nav;

import React, { useState } from 'react';
import { IoReorderThree } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { mainu } from './SidebarConfig';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const navigate = useNavigate();

    const handleTabClick = (title) => {
        setActiveTab(title);
        if (title === "Profile") {
            navigate("/username");
        } else if (title === "Home") {
            navigate("/");
        }
    };

    return (
        <div className="sticky top-0 h-[100vh]">
            <div className="flex flex-col justify-between h-full px-10">
                <div>
                    <div className="pt-10">
                        <img className="w-40" src="https://i.imgur.com/zqpwkLQ.png" alt="Sidebar Logo" />
                    </div>
                    <div className="ml-10">
                        {mainu.map((item, index) => (
                            <div
                                onClick={() => handleTabClick(item.title)}
                                key={index}
                                className="flex items-center mb-5 cursor-pointer text-lg"
                                role="button"
                                tabIndex={0}
                            >
                                {activeTab === item.title ? item.activeIcon : item.icon}
                                <p className={`${activeTab === item.title ? "font-bold" : "font-semibold"} ml-3`}>
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center cursor-pointer pb-10">
                    <IoReorderThree className="text-2xl" />
                    <p className="ml-5">More</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

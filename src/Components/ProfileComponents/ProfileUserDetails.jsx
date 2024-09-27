import React from 'react';
import { TbCircleDashed } from "react-icons/tb";

const ProfileUserDetails = () => {
    return (
        <div className="py-10 w-full">
            <div className="flex items-center">
                <div className="w-[15%]">
                    <img
                        className="w-32 h-32 rounded-full"
                        src="https://cdn.pixabay.com/photo/2024/09/05/12/55/white-cheeked-turaco-9024880_640.jpg"
                        alt="White-cheeked turaco"
                    />
                </div>
                <div className="space-y-5 text-xl">
                    <div className="flex space-x-10 items-center">
                        <p>username</p>
                        <button className="text-blue-500">Edit Profile</button>
                        <TbCircleDashed className="text-2xl" />
                    </div>
                    <div className="flex space-x-10">
                        <div>
                            <span className="font-semibold mr-2">10</span>
                            <span>posts</span>
                        </div>
                        <div>
                            <span className="font-semibold mr-2">5</span>
                            <span>followers</span>
                        </div>
                        <div>
                            <span className="font-semibold mr-2">7</span>
                            <span>following</span>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">Full Name</p>
                        <p className="font-thin text-sm">I'm the master of my sea</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileUserDetails;

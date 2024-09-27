import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Homepage from '../HomePage/HomePage'; 
import Profile from '../Profile/Profile'; 

const AppRouter = () => {
    return (
    <div>
        <div className="flex">
            <div className="w-[20%] border border-1-slate-500">
            <Sidebar />
            </div>
            <div className="w-full">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/username" element={<Profile />} /> 
                </Routes>
            </div>
        </div>
    </div>
    );
};

export default AppRouter;

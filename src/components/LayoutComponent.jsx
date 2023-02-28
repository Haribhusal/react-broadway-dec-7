
import "./../index.css";

import React, { useState, useEffect } from 'react'
// {sth} => named export 

import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import SideBarComponent from './SideBarComponent'

const LayoutComponent = () => {
    return (
        <div className="page">
            <Navbar />

            <main className="flex flex-col md:flex-row gap-5 px-5 py-5">
                <div className="sidebar w-full  md:w-[20%] p-5 shadow-md">
                    <SideBarComponent />
                </div>
                <div className="content w-full md:w-[80%] bg-slate-300 p-5 ">
                    <Outlet />
                </div>



            </main>
        </div>
    );
}

export default LayoutComponent;

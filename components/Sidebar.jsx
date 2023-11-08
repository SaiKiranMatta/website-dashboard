import React from "react";

const Sidebar = () => {
    return (
        <div className=" md:w-[30%] sm:w-40 w-20 bg-gray-300">
            <h1 className=" text-gray-900 w-min mx-auto my-4 hidden sm:block sm:text-xl">
                Options
            </h1>
            <div className=" flex flex-col justify-evenly items-center">
                <div className=" bg-gray-400 h-16 sm:h-24 md:w-[70%] sm:w-24 flex flex-col items-center p-2 rounded-2xl m-4 shadow-sm">
                    options
                </div>
                <div className=" bg-gray-400 h-16 sm:h-24 md:w-[70%] sm:w-24 flex flex-col items-center p-2 rounded-2xl m-4 shadow-sm">
                    options
                </div>
                <div className=" bg-gray-400 h-16 sm:h-24 md:w-[70%] sm:w-24 flex flex-col items-center p-2 rounded-2xl m-4 shadow-sm">
                    options
                </div>
                <div className=" bg-gray-400 h-16 sm:h-24 md:w-[70%] sm:w-24 flex flex-col items-center p-2 rounded-2xl m-4 shadow-sm">
                    options
                </div>
                <div className=" bg-gray-400 h-16 sm:h-24 md:w-[70%] sm:w-24 flex flex-col items-center p-2 rounded-2xl m-4 shadow-sm">
                    options
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

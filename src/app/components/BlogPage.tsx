import React from "react";

export const BlogPage = () => {
    return (
        <div className="container w-full md:max-w-3xl mx-auto pt-20">
            {/*title*/}
            <div className="font-sans">
                <p className="text-base md:text-sm text-green-500 font-bold">&lt; <a href="#"
                                                                                     className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">BACK
                    TO BLOG</a></p>
                <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">Welcome
                    to Minimal Blog</h1>
                <p className="text-sm md:text-base font-normal text-gray-600">Published 19 February 2019</p>
            </div>
            {/*title*/}

            <h1 className="text-3xl font-bold underline">
                Hello world :)
            </h1>
        </div>
    );
}

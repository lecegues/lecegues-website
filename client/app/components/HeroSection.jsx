import React from 'react';
import Image from 'next/image';
import '../../styles/LandingPage.css';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">

                {/* First 7 columns (out of 12) */}
                <div className="col-span-7 place-self-center">

                    {/* Header */ }
                    <h1 className="text-[#37444B] lg:text-6xl text-4xl font-extrabold">
                        Hello, I'm <span className="text-[#4A90E2]">John</span>,
                    </h1>
                    <h1 className="text-[#37444B] mt-2 lg:text-6xl text-4xl font-extrabold">and I love to</h1>
                    <h1 className="text-[#4A90E2] mt-2 mb-4 lg:text-6xl text-4xl font-extrabold">Code|</h1>
                    

                    {/* SubHeader */}
                    <p className="text-[#37444B] text-lg mb-6 lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed incidunt deleniti labore rem enim aspernatur nesciunt dolorum sequi voluptatum. Quae aut sint suscipit magnam molestias aspernatur beatae, soluta culpa.
                    </p>

                    {/* Buttons */}
                    {/* @TODO: change hover colors*/}
                    <div>
                        <button className="px-12 py-3 rounded-xl mr-4 bg-[#4A90E2] hover:bg-[#37444B] text-white font-semibold">
                            Blog
                        </button>
                        <button className="px-10 py-3 rounded-xl  ml-1 bg-transparent hover:bg-slate-300 text-black border border-black mt-3 font-semibold">
                            Contact Me
                        </button>
                    </div>

                </div>

                {/* Last 5 columns (out of 12) */}
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">

                    {/* Hero Image */}
                    <div className="w-[250px] h-[250px] sm:w-[325px] sm:h-[325px] md:w-[400px] md:h-[400px] relative">
                        <div className="hero-image"/>
                    </div>
                
                </div>
            </div>

        </section>
    )
}

export default HeroSection;
'use client'

import React from 'react';
import '../../styles/LandingPage.css';
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">

                {/* First 7 columns (out of 12) */}
                <div className="col-span-7 place-self-center">

                    {/* Header*/ }
                    {/* Note: Changes must be applied to all 3 <h1>'s */}
                    <h1 className="text-[#37444B] text-4xl md:text-5xl lg:text-6xl font-extrabold">
                        Hello, I'm <span className="text-[#4A90E2]">John</span>,
                    </h1>
                    <h1 className="text-[#37444B] mt-2 text-4xl md:text-5xl lg:text-6xl font-extrabold">and I love to</h1>
                    <h1 className="text-[#4A90E2] mt-2 mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold">
                        <TypeAnimation
                            sequence={[
                            
                            'Code.',
                            1000,
                            'Fence.',
                            1000,
                            'Learn.',
                            1000,
                            'Ball.',
                            1000
                            ]}
                            wrapper="span"
                            speed={10}
                            repeat={Infinity}
                        />
                    </h1>
                    

                    {/* SubHeader */}
                    <p className="text-[#37444B] text-lg mb-6 lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed incidunt deleniti labore rem enim aspernatur nesciunt dolorum sequi voluptatum. Quae aut sint suscipit magnam molestias aspernatur beatae, soluta culpa.
                    </p>

                    {/* Buttons */}
                    {/* @TODO: change hover colors*/}
                    <div>
                        <button className="px-12 py-3 w-full sm:w-fit rounded-xl mr-4 bg-[#4A90E2] hover:bg-[#37444B] text-white font-semibold">
                            Blog
                        </button>
                        <button className="px-10 py-3 w-full sm:w-fit rounded-xl  ml-1 bg-transparent hover:bg-slate-300 text-black border border-black mt-3 font-semibold">
                            Contact Me
                        </button>
                    </div>

                </div>

                {/* Last 5 columns (out of 12) */}
                <div className="col-span-5 place-self-center mt-5 lg:mt-0 md:ml-5">

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
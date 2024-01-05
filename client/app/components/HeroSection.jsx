import React from 'react';
import Image from 'next/image';
import '../../styles/LandingPage.css';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">

                {/* First 7 columns (out of 12) */}
                <div className="col-span-7 place-self-center">
                    <h1 className="text-black mb-4 lg:text-6xl text-4xl font-extrabold">
                        Hello, I'm John
                    </h1>
                    <p className="text-black text-lg lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed incidunt deleniti labore rem enim aspernatur nesciunt dolorum sequi voluptatum. Quae aut sint suscipit magnam molestias aspernatur beatae, soluta culpa.
                    </p>
                </div>

                {/* Last 5 columns (out of 12) */}
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <div className="hero-image"/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSection;
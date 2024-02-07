"use client"
import React, { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { config } from '../tsParticleConfig';;
import TypeWriter from 'typewriter-effect'
const phrases = ["Razin Tailor", "An Artist", "Passionate about Machine Learning", "Intrigued by Computer Vision"];
const Hero = () => {
    const [init, setInit] = useState(false);
    const options = React.useMemo(() => (config), []);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        })
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className="relative">
            <div className="bg-[url('/razin-background.jpeg')] bg-cover bg-center h-screen flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-black bg-opacity-65"></div>
                {init ? (
                    <Particles
                        id="tsparticles"
                        particlesLoaded={particlesLoaded}
                        options={options}
                        className='absolute top-0 left-0 w-full h-full'
                    />
                ) : null}
                <div className="z-10 max-w-3xl">
                    <h1 className="text-white text-center text-4xl sm:text-3xl">Welcome</h1>
                    <div className="text-white text-center text-4xl ">
                        I'M <TypeWriter
                            options={
                                {
                                    strings: phrases,
                                    autoStart: true,
                                    loop: true
                                }
                            }
                        />

                    </div>
                    <p className="text-white text-center text-sm pt-10">Data is like people—interrogate it hard enough and it will tell you whatever you want to hear.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
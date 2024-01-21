"use client"
import React, { useState, useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { config } from '../tsParticleConfig';

const phrases = ["Razin Tailor", "An Artist", "A Machine Learning/Computer Vision Enthusiast"];

const Hero = () => {
    const [init, setInit] = useState(false);
    const [phrase, setPhrase] = useState(phrases[0]);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const options = useMemo(() => (config),[]);

    // this should be run only once per application lifetime
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
        });
    }, []);
    useEffect(() => {
        const phraseInterval = setInterval(() => {
            setPhraseIndex(i => (i + 1) % phrases.length);
            setPhrase(phrases[phraseIndex]);
        }, 4000); // Change phrase every 4 seconds
        return () => {
            clearInterval(phraseInterval);
        };
    }, [phraseIndex]);

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className="relative">
            <div className="bg-[url('/razin-background.jpeg')] bg-cover bg-center h-screen flex flex-col justify-center items-center">
            {/* For the black overlay over the background image */}
            <div className="absolute inset-0 bg-black bg-opacity-65"></div> 
                {init ? (<>
                    <Particles
                        id="tsparticles"
                        particlesLoaded={particlesLoaded}
                        options={options}
                        className='absolute top-0 left-0 w-full h-full'
                    />
                </>) : (<></>)}
                <div className="z-10 max-w-lg">
                    <h1 className="text-white text-center text-4xl sm:text-3xl">Welcome</h1>
                    <div className="text-white text-center text-4xl ">I'M  <span className=' text-bold fade-in-out'>{phrase}</span></div>
                    <p className="text-white text-center text-sm pt-10">Data is like people—interrogate it hard enough and it will tell you whatever you want to hear.</p>
                </div>
            </div>

        </div>
    );
};

export default Hero;


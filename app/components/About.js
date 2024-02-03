import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <div className="bg-gray-800 text-gray-300 p-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div className="w-full h-full relative mb-8 md:mb-0">
                    {/* Update these image paths as necessary */}
                    <div className="w-full h-full relative">
                        <Image
                            src={'/razin-about-bnw.jpg'}
                            alt="A contemplative moment captured in black and white"
                            layout="fill"
                            objectFit="contain"
                            className="rounded transition-opacity duration-500 ease-in-out hover:opacity-0"
                        />
                    </div>
                    <div className="w-full h-full absolute top-0 left-0">
                        <Image
                            src={'/razin-about-color.jpg'}
                            alt="The vibrant hues of creativity and innovation"
                            layout="fill"
                            objectFit="contain"
                            className="rounded absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"
                        />
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-4">About Me</h1>
                    <p className="mb-4">
                    In the ever-evolving tech landscape, I find myself at the intersection of innovation and creativity. With a tenure at Sportsseam that spans six enriching years, I've delved into the intricacies of Sports Analytics, not just to observe but to transform the field. My journey is marked by a relentless pursuit of knowledge and application, from pioneering in Machine Learning to navigating the complexities of Computer Vision.
                    </p>
                    <p className="mb-4">
                    <b>The Craftsman behind Spontasy:</b> Spearheading the development of Spontasy, an Android app that has charmed over 5,000 users on Google Play Store, I led a team with a vision. This wasn't just about building an app; it was about crafting an experience. Steering both the web and Android development, I ensured that every aspect of Spontasy reflected precision and passion. My role extended beyond development; I orchestrated the CI/CD pipelines and backend testing, ensuring that our technical performance was as seamless as the user experience we aimed to deliver.
                    </p>
                    <p className="mb-4">
                    <b>A Conductor of Technologies:</b> My toolkit is diverse—ReactJS for crafting dynamic web applications, Android for bringing mobile visions to life, and a blend of AWS services to keep the engine running smoothly. Each project is an opportunity to blend these technologies, creating a symphony of solutions that resonate with users and meet business goals.
                    </p>
                    <p className="mb-4">
                    <b>Marketing Insights:</b> Venturing into the realm of marketing with Spontasy, I've gleaned insights into brand storytelling, user engagement, and the strategic nuances that transform a good product into a great one. This journey has been as much about understanding the pulse of the market as it has been about technical execution
                    </p>
                    <p className="mb-4">
                    In moments of respite, I turn to music and photography, avenues that keep the creative spark alive and remind me that at the heart of technology lies human expression and experience.
                    </p>
                    <a
                        href="/path/to/your/cv.pdf" // Ensure this is the correct path to your CV
                        className="bg-gray-900 text-white rounded px-12 py-3 hover:bg-gray-700 transition-colors"
                        download
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;

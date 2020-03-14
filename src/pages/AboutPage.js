// React imports
import React from 'react';

// Custom imports
import Navbar from '../components/Navbar'
import newsImage from '../media/animations/news-bird.gif'
import contributeImage from '../media/animations/contribute-piggy.gif'
import GifButton from '../components/GifButton'

const AboutPage = () => {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Navbar />
            <div className="flex flex-col items-center">
                <h1 className="text-bold text-xl pt-4">ABOUT PLAY IT FORWARD</h1>
                <p className="text-center pt-2">Play It Forward is an application inspired from a Hackathon project
                    made by Jennifer Williams and Shawn Huang Fernandes. It's purpose 
                    is to lower the barrier for volunteer engagement by gamifying the 
                    volunteering experience. This is currently a work in progress, so stay
                    tuned to see where it goes!
                </p>
                <div className="flex justify-center w-screen pt-8 pb-4">
                    <a href=""><GifButton image={contributeImage} caption="Help Us Out"/></a>
                    <a href=""><GifButton image={newsImage} caption="Read About PIF"/></a>
                </div>
                <div className="flex justify-center w-screen">
                    <a href="https://jenniferwilliams.dev/"><GifButton image={newsImage} caption="About Jen"/></a>
                    <a href="https://shawnhuangfernandes.netlify.com"><GifButton image={contributeImage} caption="About Shawn"/></a>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
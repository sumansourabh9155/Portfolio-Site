import Button from '@mui/material/Button';
import React from 'react'
import Typed from 'react-typed';
import heroImage from "../../../assets/homeImage.png"

const HeroSection = () => {
    return (
        <div className=" ">
            <div class="text-white container flex flex-col-reverse lg:flex-row items-center gap-12 mt-1  lg:mt-8 pl-4 lg:pl-8">

                <div className="flex flex-1 flex-col items-center lg:items-start lg:pt-6">
                    <p className="text-[#c14848] font-semibold text-lg md:text-left">Suman Sourabh</p>

                    <h2 class="text-3xl font-bold text-white text-3xl sm:text-5xl md:text-6xl text-center lg:text-left mb-6 ">
                        Website Dev and User Interface Designer
                    </h2>
                    <div className='text-2xl  sm:text-3xl md:text-3xl lg:text-4xl font-bold md:py-4 text-gray-300 md:flex md:item-start text-center'>
                        <p className="">I can help in &nbsp;</p>
                        <div className='text-gray-600 text-center'>
                            <Typed
                                strings={[
                                    'UI/UX Designer',
                                    'Full Stack Development',
                                    'Android Development']}
                                typeSpeed={120}
                                backSpeed={130}
                                loop />
                        </div>
                    </div>


                    <p className="text-gray-400 font-bold text-md text-center lg:text-left mb-6">
                        Over the past 2 years, I’ve worked on many Projects and

                        up-and-coming startups to successfully help them reach

                        their full potential and attract new customers.
                    </p>
                    <div className="flex justify-center flex-wrap gap-6">
                        <Button variant="contained" color="error" sx={{ fontWeight: 'bold' }} >
                            Resume
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontWeight: 'bold' }} >
                            Let's Talk
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 ">
                    <img className="w-60 h-auto sm:w-70 sm:h-auto md:w-[53%] md:h-full" src={heroImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
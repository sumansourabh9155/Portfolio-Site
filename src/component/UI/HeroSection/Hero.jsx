import Button from '@mui/material/Button'
import Typed from 'react-typed';
import Typography from '@mui/material/Typography';

const Hero = () => {
    return (<div className="pl-10">
        <div className="text-white container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-20">

            {/* Text at the left */}

            <div className="flex flex-1 flex-col item-center lg:items-start max-w-[800] mt-[-96] w-full h-screen mx-auto text-center">

                <p className="text-[#c14848] font-semibold text-lg md:text-left">Suman Sourabh</p>

                <h1 className="text-3xl font-bold text-white text-3xl sm:text-5xl md:text-7xl font-bold md:py-3 md:text-left">Website Dev and User <br></br>Interface Designer</h1>

                <div className='flex item-center text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold md:py-4 text-gray-300'>
                    <p className="">I can help in &nbsp;</p>
                    <div className='text-gray-600'>
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

                <div className='text-gray-500 font-bold md:text-left text-sm'>
                    <p>Over the past 2 years, I’ve worked on many Projects and</p>
                    <p>up-and-coming startups to successfully help them reach</p>
                    <p>their full potential and attract new customers.</p>
                </div>

                <div className="pt-7 flex gap-8 " >
                    <div className=" hidden md:block">
                        <Button variant="contained" color="error" sx={{ fontWeight: 'bold' }} >
                            Resume
                        </Button>
                    </div>
                    <div className=" hidden md:block">
                        <Button variant="contained" color="error" sx={{ fontWeight: 'bold' }} >
                            Let's Talk
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    </div>)
}
export default Hero;  // export default Hero;
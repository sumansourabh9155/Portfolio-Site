import Typed from 'react-typed';

const Hero = () => {
    return (<div className="p-4">
        <div className="text-white container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-20">

            {/* Text at the left */}

            <div className="flex flex-1 flex-col item-center lg:items-start">

                <p className="text-[#F55B5B] font-bold">Suman Sourabh</p>

                <h1 className="text-3xl font-bold text-white text-3xl sm:text-5xl md:text-7xl font-bold md:py-3">Website and User <br></br>Interface Designer</h1>

                <div className='flex item-center text-2xl sm:text-3xl md:text-4xl font-bold md:py-4'>
                    <p className="">I can help in &nbsp;</p>
                    <Typed
                        strings={[
                            'UI/UX Designer',
                            'Full Stack Developer',
                            'Android Developer']}
                        typeSpeed={120}
                        backSpeed={130}
                        loop />
                </div>

                <p>Over the past 2 years, as an UI/UX designer, I’ve worked on many Projects and <br></br>up-and-coming startups to successfully help them reach their <br></br>full potential and attract new customers.</p>

                <div className="pt-4">
                    <button className="pr-5">Resume</button>
                    <button>Contact Me</button>
                </div>
            </div>

        </div>
    </div>)
}
export default Hero;  // export default Hero;
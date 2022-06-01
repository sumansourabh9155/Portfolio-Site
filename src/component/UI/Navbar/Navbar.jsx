import { BiMenuAltRight } from 'react-icons/bi';
import Button from '@mui/material/Button';
import { ImCross } from 'react-icons/im';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const setMenu = () => {
        setShowMenu(!showMenu);
    }
    return (<div>

        <div className="flex items-center justify-between h-24 max-w-[1240p] mx-auto p-10 text-white z-[-10]">
            <h1 className="text-3xl font-bold">Suman <spam className="text-[#3DF5EA]">Sourabh</spam></h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">About</li>
                <li className="p-4">Projects</li>

            </ul>
            <div className=" hidden md:block">
                <Button variant="contained" color="error" sx={{ fontWeight: 'bold' }} >
                    Let's Talk
                </Button>
            </div>
            <div onClick={setMenu} className="block md:hidden">
                {!showMenu ? <ImCross size={25} /> : <BiMenuAltRight size={25} />}
            </div>
            <div className={!showMenu ? "fixed left-0 top-0 w-[60%] h-full border-r-grey-900 pt-8  border-b-2 bg-gray-800 ease-in-out duration-500 md:hidden" : "fixed left-[-100%] md:hidden"}>
                <h1 className="w-full text-3xl font-bold pl-8">Suman <spam className="text-[#3DF5EA]">Sourabh</spam></h1>

                <ul className='p-4 uppercase'>
                    <li className="p-4 border-b border-grey-800">Home</li>
                    <li className="p-4 border-b border-grey-800">About</li>
                    <li className="p-4 border-b border-grey-800">Projects</li>
                    <li className="p-4">Contact Me</li>
                </ul>
            </div>
        </div>

    </div >)
}
export default Navbar;  // export default Navbar;
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

const Navbar = () => {
    return (<div>

        <div className="flex items-center justify-between h-24 max-w-[1240p] mx-auto p-4" >
            <h1 className="w-full text-3xl font-bold">Suman <spam className="text-[#3DF5EA]">Sourabh</spam></h1>
            <ul className="flex hidden">
                <li className="p-4">Home</li>
                <li className="p-4">About</li>
                <li className="p-4">Projects</li>
                <li className="p-4">Contact Me</li>
            </ul>
            <div>
                <AiOutlineMenuFold size={25} />
            </div>
            <ul className="fixed left-0 top-0 w-[60%] h-full border-r-grey-900">
                <li className="p-4">Home</li>
                <li className="p-4">About</li>
                <li className="p-4">Projects</li>
                <li className="p-4">Contact Me</li>
            </ul>
        </div>

    </div >)
}
export default Navbar;  // export default Navbar;
import React from 'react';
import Logo from '../images/logoNav.png';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Button from './Button';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <header className={`w-full fixed z-10 bg-white transition-all duration-300 ease-in-out`}>
        <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
          <Link to="/" className="flex items-center justify-center text-black text-lg cursor-pointer">
            <img src={Logo} alt="Logo" className={`w-8 h-8 lg:w-14 lg:h-14 ${open ? 'block' : 'hidden'} md:block`} />
            Flavor<span className='text-green-700'>Fusion </span>
          </Link>

          <ul className={`md:flex text-black gap-6 md:space-x-6 ${open ? 'hidden' : 'flex'}`}>
            <li>
              <a href="/">Home</a>
            </li>
           
            <li>
              <Link to="/about">About Us</Link> {/* Use Link to navigate to the About page */}
            </li>
          </ul>

         

          <button
            className="block md:hidden text-black text-xl"
            onClick={() => setOpen(prev => !prev)}
          >
            {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
          </button>
        </nav>
        <div className={`${open ? "flex" : "hidden"} bg-white flex-col w-full px-4 pt-16 pb-10 text-black gap-6 text-[14px]`}>
          <a href="/" className="text-black">Home</a>
          <a href="/#recipes" className="text-black md:hidden">Explore</a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

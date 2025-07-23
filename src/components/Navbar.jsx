import { Slide } from 'react-awesome-reveal';
import logo from '../assets/logo.png'
import { FaSearch } from "react-icons/fa";



const Navbar = () => {
    const links = <>
        <li className='hover:text-[#e4d804]'><a href="">HOME</a></li>
        <li className='hover:text-[#e4d804]'><a href="">MOVIE</a></li>
        <li className='hover:text-[#e4d804]'><a href="">TV SHOW</a></li>
        <li className='hover:text-[#e4d804]'><a href="">PRICING</a></li>
        <li className='hover:text-[#e4d804]'><a href="">BLOG</a></li>
        <li className='hover:text-[#e4d804]'><a href="">CONTACTS</a></li>
    </>
    return (
        <Slide triggerOnce>
            <div className="navbar  shadow-sm" >
                <div className="navbar-start">

                    <div className='flex gap-1 btn btn-ghost items-center p-0'>
                        <img className='w-9' src={logo} alt="" />
                        <a className="text-xl font-bold text-white">Movies For Life</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-white">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex gap-6 items-center'>
                        <FaSearch className='text-white text-xl' />
                        <button className='bg-[#12151e] border-2 border-[#e4d804] rounded-full font-bold text-[#e3dfdf] text-xs py-2 px-8 hover:bg-[#e4d804] hover:text-black hover:transition hover:delay-200'>
                            SIGN IN
                        </button>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                </div>
            </div>
        </Slide>
    );
};

export default Navbar;
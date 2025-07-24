import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { FaSearch } from "react-icons/fa";
import logo from '../assets/logo.png';
import { AuthContext } from './AuthProvider/AuthProvider';
import { Slide } from 'react-awesome-reveal';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [showSticky, setShowSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowSticky(window.scrollY > 850); // Show sticky after 850px scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = (
        <>
            <li className='hover:text-[#e4d804]'><NavLink to='/'>HOME</NavLink></li>
            <li className='hover:text-[#e4d804]'><a href="">MOVIE</a></li>
            <li className='hover:text-[#e4d804]'><a href="">TV SHOW</a></li>
            <li className='hover:text-[#e4d804]'><a href="">PRICING</a></li>
            <li className='hover:text-[#e4d804]'><a href="">BLOG</a></li>
            <li className='hover:text-[#e4d804]'><a href="">CONTACTS</a></li>
        </>
    );

    const renderNavbarContent = () => (
        <Slide triggerOnce>
            <div className="navbar px-4 py-6">
                <div className="navbar-start">
                    <div className='flex gap-1 btn btn-ghost items-center p-0'>
                        <img className='w-9' src={logo} alt="logo" />
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
                        {user ? (
                            <NavLink to='/signIn'>
                                <button className='bg-[#12151e] border-2 border-[#e4d804] rounded-full font-bold text-[#e3dfdf] text-xs py-2 px-8 hover:bg-[#e4d804] hover:text-black hover:transition hover:delay-200'>
                                    Sign Out
                                </button>
                            </NavLink>
                        ) : (
                            <NavLink to='/signIn'>
                                <button className='bg-[#12151e] border-2 border-[#e4d804] rounded-full font-bold text-[#e3dfdf] text-xs py-2 px-8 hover:bg-[#e4d804] hover:text-black transition delay-100 ease-in-out'>
                                    SIGN IN
                                </button>
                            </NavLink>
                        )}
                    </div>

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </Slide>
    );

    return (
        <>
            {/* Static navbar shown always in any section where it will be used */}
            <div className="relative z-10">
                {renderNavbarContent()}
            </div>

            {/* Sticky navbar shown only after scroll */}
            <div className={`w-full fixed top-0 left-0 bg-gray-900 bg-opacity-80 shadow-md backdrop-blur z-50 transition-transform duration-300 ${showSticky ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className='w-10/12 mx-auto'>
                    {renderNavbarContent()}
                </div>
            </div>
        </>
    );
};

export default Navbar;

import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { AuthContext } from './AuthProvider/AuthProvider';

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const [showSticky, setShowSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const signOutUser = () => {
    handleSignOut()
      .then(() => console.log('Sign out success'))
      .catch(error => console.log(error));
  };

  const navLinkStyle = "relative text-sm xl:text-base font-semibold text-white hover:text-[#e4d804] transition duration-300";
  const navLinkUnderline = "after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 hover:after:w-full after:bg-[#e4d804] after:transition-all after:duration-300";

  const links = (
    <>
      <li><NavLink to="/" className={`${navLinkStyle} ${navLinkUnderline}`}>HOME</NavLink></li>
      <li><NavLink to="/movies" className={`${navLinkStyle} ${navLinkUnderline}`}>MOVIE</NavLink></li>
      <li><NavLink to="/tv" className={`${navLinkStyle} ${navLinkUnderline}`}>TV SHOW</NavLink></li>
      <li><NavLink to="/pricing" className={`${navLinkStyle} ${navLinkUnderline}`}>PRICING</NavLink></li>
      <li><NavLink to="/blog" className={`${navLinkStyle} ${navLinkUnderline}`}>BLOG</NavLink></li>
      <li><NavLink to="/contacts" className={`${navLinkStyle} ${navLinkUnderline}`}>CONTACTS</NavLink></li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${showSticky ? 'bg-gray-900 bg-opacity-90 shadow-xl backdrop-blur' : 'bg-transparent'}
      `}
      style={{ backdropFilter: showSticky ? 'blur(8px)' : 'none' }}
    >
      <div className="mx-auto w-11/12 max-w-7xl flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8 sm:w-10" />
          <h1 className="text-white text-lg sm:text-xl font-extrabold whitespace-nowrap">Movies For Life</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-6 items-center">{links}</ul>
        </nav>

        {/* Right Side: Search & Auth */}
        <div className="flex items-center gap-3 lg:gap-4">
          <FaSearch className="text-white text-lg cursor-pointer" />

          {/* Desktop Auth */}
          <div className="hidden lg:block">
            {user ? (
              <button
                onClick={signOutUser}
                className="bg-[#12151e] border-2 border-[#e4d804] rounded-full font-bold text-white text-xs sm:text-sm py-2 px-5 hover:bg-[#e4d804] hover:text-black transition-all"
              >
                Sign Out
              </button>
            ) : (
              <NavLink to='/signIn'>
                <button className="bg-[#12151e] border-2 border-[#e4d804] rounded-full font-bold text-white text-xs sm:text-sm py-2 px-5 hover:bg-[#e4d804] hover:text-black transition-all">
                  SIGN IN
                </button>
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 bg-opacity-95 py-6 px-6">
          <ul className="flex flex-col gap-5 mb-4">{links}</ul>

          {/* Mobile Auth */}
          <div className="mt-4">
            {user ? (
              <button
                onClick={signOutUser}
                className="w-full text-center bg-[#12151e] border-2 border-[#e4d804] rounded-full font-bold text-white text-sm py-2 hover:bg-[#e4d804] hover:text-black transition-all"
              >
                Sign Out
              </button>
            ) : (
              <NavLink to='/signIn' onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full text-center bg-[#12151e] border-2 border-[#e4d804] rounded-full font-bold text-white text-sm py-2 hover:bg-[#e4d804] hover:text-black transition-all">
                  SIGN IN
                </button>
              </NavLink>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

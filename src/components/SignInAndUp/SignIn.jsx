import { Fade } from "react-awesome-reveal";
import loginAndSignupBG from "../../assets/loginbg.jpg";

import { FaGoogle, FaGithub } from "react-icons/fa";
import Navbar from "../Navbar";
import { NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignIn = () => {
    const {signInEmail} = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInEmail(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })

    };

    return (
        <div
            className="bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${loginAndSignupBG})` }}
        >
            <div className="w-10/12 mx-auto">
                <Navbar />
                <div className="min-h-screen px-20 flex items-center justify-start ml-19">
                    <Fade direction="up" duration={800} triggerOnce>
                        <div className="bg-white shadow-2xl rounded-2xl px-8 py-20 w-full max-w-md">
                            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                                Sign In
                            </h2>

                            <div className="flex justify-center gap-4 mb-6">
                                <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition duration-200">
                                    <FaGoogle size={20} />
                                </button>
                                <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition duration-200">
                                    <FaGithub size={20} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Email"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="Password"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />

                                {/* Forgot Password Link */}
                                <div className="text-right">
                                    <a
                                        href="/forgot-password"
                                        className="text-sm text-indigo-600 hover:underline"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
                                >
                                    Sign In
                                </button>
                            </form>

                            <p className="text-center text-sm text-gray-600 mt-4">
                                Don't have an account?{" "}
                                <NavLink
                                    to="/signUp"
                                    className="text-indigo-600 hover:underline"
                                >
                                    Register
                                </NavLink>
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

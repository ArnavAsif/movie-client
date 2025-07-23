import { Fade } from "react-awesome-reveal";
import loginAndSignupBG from "../../assets/signUp.jpg";

import { FaGoogle, FaGithub } from "react-icons/fa";
import Navbar from "../Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
    const {singUpEmail} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const displayName = `${firstName} ${lastName}`
        console.log({ firstName, lastName, email, password });
        singUpEmail(email, password)
        .then(result => {
            const user = result.user;
            updateProfile(user, {
                displayName: displayName
            })
            .then(()=>{
                console.log('User name updated', user)
            })
            .catch(error =>{
                console.log(error)
            })
            console.log(result.user)
        })
        .catch(error => {
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
                <div className="min-h-screen px-20 flex items-center justify-end">
                    <Fade direction="up" duration={800} triggerOnce>
                        <div className="bg-white shadow-2xl rounded-2xl px-8 py-20 w-full max-w-md">
                            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                                Sign Up
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
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        placeholder="First Name"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        placeholder="Last Name"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                    />
                                </div>
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

                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
                                >
                                    Sign Up
                                </button>
                            </form>

                            <p className="text-center text-sm text-gray-600 mt-4">
                                Already have an account?{" "}
                                <a
                                    href="/signin"
                                    className="text-indigo-600 hover:underline"
                                >
                                    Sign In
                                </a>
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

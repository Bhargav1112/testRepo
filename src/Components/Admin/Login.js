import React from 'react'
import { FaFacebook, FaGoogle, FaMicrosoft, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="height-[100vh] flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#f9fafb]">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 bg-white p-6 rounded-[10px] shadow-lg" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className='text-[14px] font-bold'>
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full appearance-none mt-2 mb-6 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className='text-[14px] font-bold'>
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full mt-2 appearance-none mb-6 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-[14px]">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <Link
                            to={'/admin'}
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-[14px]"
                        >
                            Sign in
                        </Link>
                        {/* <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-[14px]"
                        >
                            Sign in
                        </button> */}
                    </div>
                    <div class="relative flex items-center mt-[14px]">
                        <div class="flex-grow border-t border-gray-400"></div>
                        <span class="flex-shrink mx-4 text-gray-600">Or Continue With</span>
                        <div class="flex-grow border-t border-gray-400"></div>
                    </div>
                    <div class="relative flex items-center justify-between mt-[14px]">
                        <div class="flex-shrink text-gray-600 w-[30%] text-center rounded-md border border-gray-400 p-3"><FaFacebook className="m-auto w-[20px] h-[20px]" /></div>
                        <span class="flex-shrink text-gray-600 w-[30%] text-center rounded-md border border-gray-400 p-3"><FaTwitter className="m-auto w-[20px] h-[20px]" /></span>
                        <div class="flex-shrink text-gray-600 w-[30%] text-center rounded-md border border-gray-400 p-3"><FaGoogle className="m-auto w-[20px] h-[20px]" /></div>
                    </div>
                    <div className='text-center text-[14px] text-gray-500 mt-[14px]'>Don't have an Account? <Link to={"/register"} className="text-indigo-600 font-bold">Sign up</Link></div>
                </form>
            </div>
        </div>
    )
}

export default Login
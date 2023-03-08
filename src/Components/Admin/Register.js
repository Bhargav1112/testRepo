import React, { useState } from 'react'
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {
    const [userInfo, setUserInfo] = useState(
        {
            username: '',
            email: '',
            password: '',
            profile: ''
        }
    )
    const [cPasswordErr, setcPasswordErr] = useState('')

    const handleValue = (e) => {
        const { name, value, files } = e.target
        let Password = ""

        console.log("dd", userInfo.password);
        if (name === "cpassword") {
            if (value !== "") {
                setcPasswordErr('')
                if (value == userInfo.password) {
                    console.log("dd1");
                    setcPasswordErr('')
                } else {
                    setcPasswordErr("Password And confirm Password is not Match")
                }
            } else {
                setcPasswordErr("Confirm Password is Requied")
            }
        }
        setUserInfo(prev => ({ ...prev, [name]: name !== "profile" ? value : files[0] }))
    }
    console.log("name", userInfo);

    return (
        <div className="height-[100vh] flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#f9fafb]">
            <div className="w-full max-w-md">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-1 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Create to your account
                    </h2>
                </div>
                <form className="mt-3 bg-white p-6 rounded-[10px] shadow-lg" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="mt-0 rounded-md">
                        <div>
                            <label htmlFor="Username" className='text-[14px] font-bold'>
                                Username
                            </label>
                            <input
                                id="Username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                className="relative block w-full appearance-none mt-2 mb-2 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter Username"
                                onChange={(e) => handleValue(e)}
                            />
                        </div>
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
                                className="relative block w-full appearance-none mt-2 mb-2 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter Email address"
                                onChange={(e) => handleValue(e)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className='text-[14px] font-bold'>
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="text"
                                autoComplete="current-password"
                                required
                                className="relative block w-full mt-2 appearance-none mb-2 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter Password"
                                onChange={(e) => handleValue(e)}
                            />
                        </div>
                        <div>
                            <label htmlFor="cpassword" className='text-[14px] font-bold'>
                                Confirm Password
                            </label>
                            <input
                                id="cpassword"
                                name="cpassword"
                                type="password"
                                autoComplete="confirm-password"
                                required
                                className="relative block w-full mt-2 appearance-none mb-3 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Enter Confirm Password"
                                onChange={(e) => handleValue(e)}
                            />
                            {cPasswordErr && <div className='text-[12px] text-[#ff000]'>{cPasswordErr}</div>}
                        </div>
                        {/* <div>
                            <label className="block mt-[8px] mb-[28px]">
                                <span className="sr-only">Choose File</span>
                                <input type="file" name='profile' className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" onChange={(e) => handleValue(e)} />
                            </label>
                        </div> */}
                        {/* <div>
                            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> Profile Image</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div> */}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Sign up
                        </button>
                    </div>
                    <div class="relative flex items-center my-[8px]">
                        <div class="flex-grow border-t border-gray-400"></div>
                        <span class="flex-shrink mx-4 text-gray-600">Or Continue With</span>
                        <div class="flex-grow border-t border-gray-400"></div>
                    </div>
                    <div class="relative flex items-center justify-between">
                        <div class="flex-shrink text-gray-600 w-[30%] text-center rounded-md border border-gray-400 p-3"><FaFacebook className="m-auto w-[20px] h-[20px]" /></div>
                        <span class="flex-shrink text-gray-600 w-[30%] text-center rounded-md border border-gray-400 p-3"><FaTwitter className="m-auto w-[20px] h-[20px]" /></span>
                        <div class="flex-shrink text-gray-600 w-[30%] text-center rounded-md border border-gray-400 p-3"><FaGoogle className="m-auto w-[20px] h-[20px]" /></div>
                    </div>
                    <div className='text-center text-[14px] text-gray-500 mt-2'>Already have an Account? <Link to={"/login"} className="text-indigo-600 font-bold">Login</Link></div>
                </form>
            </div>
        </div>
    )
}

export default Register
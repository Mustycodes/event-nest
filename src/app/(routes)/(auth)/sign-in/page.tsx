"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import SocialLoginButton from "@/components/ui/SocialLoginButton";
import { Apple } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const SignInPage = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevLoginData) => ({ ...prevLoginData, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isLoggedIn = login(formData.email, formData.password);
    if (!isLoggedIn) {
      return setError("Username or Password must be incorrect");
    } 
    return router.push('/')
  };
  return (
    <section className='bg-gray-100'>
      <div className='flex flex-col lg:flex-row h-screen'>
        <div className='flex-1 flex items-center justify-center h-full'>
          <div className='sm:max-w-lg space-y-4'>
            <Logo />
            <h1 className='text-4xl mt-10 lg:text-5xl font-bold tracking-wide'>
              Find all events <br /> around you
            </h1>
            <p className='text-sm lg:text-base text-slate-800 '>
              Discover and book various events around you all from the comfort
              of your home. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Ex, dolorem
            </p>
          </div>
        </div>
        <div className='flex-1 flex items-center justify-center h-full'>
          <div className=' bg-white flex-1 rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
                Welcome back
              </h1>
              <div className='flex flex-col items-center space-x-4 lg:flex-row mt-4'>
                <SocialLoginButton provider='Google' onClick={() => {}} />
                <SocialLoginButton provider='Apple' onClick={() => {}} />
              </div>
              <div className='flex items-center'>
                <div className='w-full h-0.5 bg-gray-300' />
                <div className='text-center px-5 text-gray-700'>or</div>
                <div className='w-full h-0.5 bg-gray-300' />
              </div>
              <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-orange-400 focus:border-orange-600 block w-full p-2.5'
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5'
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        id='remember'
                        aria-describedby='remember'
                        type='checkbox'
                        className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-200 '
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label htmlFor='remember' className='text-gray-500'>
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href='#'
                    className='text-sm font-medium text-orange-500 hover:underline'
                  >
                    Forgot password?
                  </a>
                </div>
                {error && (
                  <div
                    style={{
                      color: "red",
                      marginBottom: "15px",
                      fontSize: "14px",
                    }}
                  >
                    {error}
                  </div>
                )}
                <button
                  type='submit'
                  className='w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  Sign in to your account
                </button>
                <p className='text-sm font-light text-gray-500 '>
                  Don&apos;t have an account yet?
                  <a
                    href='#'
                    className='font-medium text-orange-500 hover:underline'
                  >
                    Sign up here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;

import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";

const SignInPage = () => {
  // event: React.ChangeEvent<HTMLInputElement>
  const handleChange = () => {
    // const { name, value } = event.target;
    // setLoginData((prevLoginData) => ({
    //   ...prevLoginData,
    //   [name]: value,
    // }));
  };
  //   event: React.ChangeEvent<HTMLFormElement>
  const handleSubmit = () => {
    // event.preventDefault();
    // console.log(loginData);
  };
  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <Link href='/' className='flex items-center mb-6'>
          <Logo />
        </Link>
       
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Sign in to your account
            </h1>
            <form className='space-y-4 md:space-y-6' action='#'>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@company.com'
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='remember'
                      aria-describedby='remember'
                      type='checkbox'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label
                      htmlFor='remember'
                      className='text-gray-500 dark:text-gray-300'
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href='#'
                  className='text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Forgot password?
                </a>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Sign in
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Don’t have an account yet?{" "}
                <a
                  href='#'
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
{
  /* // <div className='flex justify-center items-center min-h-screen overflow-auto lg:overflow-hidden bg-[#1C0221] text-slate-200'>
//   <div className='w-full max-w-screen-xl px-6 py-6 lg:p-0 flex flex-col lg:flex-row'>
//     <div className='flex-1 flex justify-center items-center mb-12'>
//       <div className='text-white text-center lg:text-left w-full md:w-3/5 flex flex-col space-y-4'>
//         <Logo />
//         <p className='text-4xl lg:text-5xl font-bold tracking-wide'>
//           Find all events <br /> around you
//         </p>
//         <p className='text-sm lg:text-base text-slate-300 '>
//           Discover and book various events around you all from the comfort
//           of your home. Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Ex, dolorem
//         </p>
//       </div>
//     </div>
//     <div className='flex-1 flex justify-center items-center'>
//       <div className='bg-white bg-opacity-10 p-6 md:p-8 w-full lg:min-w-[400px] max-w-[500px] lg:w-3/5 rounded-lg shadow-lg'>
//         <h2 className='font-bold text-2xl lg:text-3xl mb-6 text-[#F1F2F6]'>
//           Login to your account
//         </h2>
//         <form className='flex flex-col space-y-4'>
//           <div className='flex flex-col gap-y-2'>
//             <label htmlFor='username' className='text-lg text-[#F1F2F6]'>
//               Username
//             </label>
//             <input
//               name='username'
//               type='text'
//               className='bg-white bg-opacity-80 border p-2 w-full text-black rounded'
//               //   onChange={handleChange}
//             />
//           </div>
//           <div className='flex flex-col'>
//             <label htmlFor='password' className='text-lg text-[#F1F2F6]'>
//               Password
//             </label>
//             <input
//               name='password'
//               type='text'
//               className='bg-white bg-opacity-80 border p-2 w-full text-black rounded'
//               //   onChange={handleChange}
//             />
//           </div>
//           <div>
//             <button
//               type='submit'
//               className='w-full bg-orange-500 hover:bg-orange-600 cursor-pointer rounded p-2 text-white font-semibold text-lg'
//             >
//               Login
//             </button>
//           </div>
//         </form>
//         <div className='mt-4'>
//           <p className='text-xs lg:text-sm'>
//             Don't have an account?
//             <Link href='/sign-up' className='text-orange-500'>
//               Create account
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div> */
}

export default SignInPage;

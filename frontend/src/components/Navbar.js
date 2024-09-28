// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import { LoginModal } from './login';
// import { SignupModal } from './signUp';

// export const Navbar = () => {
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isSignupOpen, setIsSignupOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); 
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
  
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
    
//     if (!token) {
//       navigate('/login'); 
//     } else {
//       setIsAuthenticated(true);
//     }
//   }, [navigate]);

//   const toggleMenu = () => {
//     setIsMenuOpen(prev => !prev);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsAuthenticated(false);
//     navigate('/login');
//   };

//   return (
//     <div>
//       <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
//           <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//             <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Digital Card Creator</span>
//           </a>
//           <button
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             onClick={toggleMenu} 
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
//             </svg>
//           </button>
//           <div
//             className={`md:flex md:items-center md:justify-between font-medium ${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto`}
//           >
//             <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               {isAuthenticated ? (
//                 <>
//                   <li>
//                     <a
//                       href="/"
//                       className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
//                       aria-current="page"
//                     >
//                       Home
//                     </a>
//                   </li>
//                   <li>
//                     <button
//                       onClick={handleLogout}
//                       className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
//                     >
//                       Logout
//                     </button>
//                   </li>
//                 </>
//               ) : (
//                 <>
//                   <li>
//                     <button
//                       onClick={() => setIsLoginOpen(true)}
//                       className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
//                     >
//                       Login
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       onClick={() => setIsSignupOpen(true)}
//                       className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
//                     >
//                       Sign Up
//                     </button>
//                   </li>
//                 </>
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Login Modal */}
//       <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

//       {/* Signup Modal */}
//       <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
//     </div>
//   );
// };



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginModal } from './login';
import { SignupModal } from './signUp';

export const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      navigate('/login'); 
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    navigate('/'); 
  };

  const handleSignUpSuccess = () => {
    setIsAuthenticated(true);
    navigate('/'); 
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Digital Card Creator</span>
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div
            className={`md:flex md:items-center md:justify-between font-medium ${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {isAuthenticated ? (
                <>
                  <li>
                    <a
                      href="/"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <button
                      onClick={() => setIsLoginOpen(true)}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setIsSignupOpen(true)}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Sign Up
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLoginSuccess={handleLoginSuccess} // Pass the function to handle login success
      />

      {/* Signup Modal */}
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} onSignUpSuccess={handleSignUpSuccess} />
    </div>
  );
};


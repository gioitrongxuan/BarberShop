import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../../../components/Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const LandingHeader = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-[#e9f6e9]">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-center h-[57px] px-4">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Logo size="text-3xl" color="text-purple-500" />
          </motion.div>

          {/* Auth Buttons */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/auth/sign-in"
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-purple-500 transition-colors"
            >
              <FontAwesomeIcon icon={faUser} /> 
              <span className='hidden sm:inline'>Đăng nhập</span>
            </Link>
            <Link
              to="/auth/sign-up"
              className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-[#15803d] transition-all duration-300"
            >
              <FontAwesomeIcon icon={faUserPlus} /> 
              <span className='hidden sm:inline'>Đăng kí</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import amusementParkSVG from "../../../assets/background_login.webp";
import lottieAnimation from "../../../assets/anhcattoc.png";
// import lottieAnimation from "../../../assets/ride-animation.json";
import TransitionWrapper from "../../../components/TransitionWrapper";
import { signIn } from "../../../apis/auth";
import SignInLeft from "../../../components/Auth/SignInLeft";
import SignInForm from "../../../components/Auth/SignInForm";
import SocialLogin from "../../../components/Auth/SocialLogin";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = async ({ email, password }) => {
    const rs= await signIn({ email, password });
    if (rs.data.user.role === 'admin') navigate('/admin');
    else
    navigate('/playground-recommendation');
  };

  return (
    <TransitionWrapper direction={1}>
      <div className="min-h-screen flex">
        <SignInLeft lottieAnimation={lottieAnimation} className="hidden sm:block" />

        <motion.div
          className="w-full sm:w-1/2 bg-gradient-to-b from-white to-purple-50 flex flex-col justify-center items-center p-10 shadow-2xl relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={amusementParkSVG}
            alt="Amusement Park"
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
          />

          <motion.h1
            className="text-center text-3xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 mb-8 tracking-wide z-10"
            whileHover={{ scale: 1.1 }}
          >
            Đăng nhập
          </motion.h1>
          
          <p className="text-sm sm:text-lg font-bold text-purple-700 bg-purple-100 p-2 rounded-lg mb-8 z-10">
            Hãy khám phá những phong cách mới !
          </p>

          <SignInForm
            onSubmit={handleSignIn}
            initialEmail="example@email.com"
            initialPassword="12345678"
          />

          <SocialLogin />

          <p className="mt-6 text-sm text-purple-600 sm:hidden">
            Bạn chưa có tài khoản?{' '}
            <a href="/auth/sign-up" className="font-bold text-purple-800 hover:underline">
              Đăng kí ngay
            </a>
          </p>
        </motion.div>
      </div>
    </TransitionWrapper>
  );
};

export default SignIn;
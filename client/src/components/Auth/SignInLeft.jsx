import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

const SignInLeft = ({ lottieAnimation }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="w-1/2 bg-purple-100 flex flex-col justify-center items-center p-10"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Logo size="text-7xl" className="mb-6" />
      {/* <Player
        autoplay
        loop
        src={lottieAnimation}
        className="w-3/4 h-auto mb-8 z-10"
      /> */}
      {/* chèn ảnh */}
      <img src={lottieAnimation} alt="lottie animation" className="w-3/4 h-auto mb-8 z-10" />
      <h2 className="text-3xl font-extrabold text-purple-700 mb-4 mt-4 z-10">
        Lần đầu tiên đến đây?
      </h2>
      <p className="text-gray-800 text-center mb-6 z-10">
        Nếu bạn chưa có tài khoản, hãy đăng ký ngay.
      </p>
      <button
        onClick={() => navigate("/auth/sign-up")}
        className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 z-10"
      >
        <i className="fa-solid fa-user"></i> Đăng ký
      </button>
    </motion.div>
  );
};

export default SignInLeft;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Logo = ({ size = "text-4xl", className = "" }) => {
  return (
    <Link to="/">
      <motion.h1
        className={`text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 tracking-wide z-10 sm:${size} ${className}`}
        whileHover={{ scale: 1.1 }}
      >
        Bảy Thanh Cắt Tóc
      </motion.h1>
    </Link>
  );
};

export default Logo;
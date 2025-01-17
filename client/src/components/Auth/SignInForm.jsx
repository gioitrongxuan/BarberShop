import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignInForm = ({ onSubmit, initialEmail = "", initialPassword = "" }) => {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Địa chỉ emailとMật khẩuを入力してください。");
      return;
    }
    setError("");
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="w-3/4 z-10">
      <label className="block text-lg font-semibold text-gray-700 mb-2">
        Địa chỉ email
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="VD: abc12345@gmail.com"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-6 transition duration-300 shadow-sm"
        required
      />

      <label className="block text-lg font-semibold text-gray-700 mb-2">
        Mật khẩu
      </label>
      <div className="relative mb-2">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mật khẩuを入力してください"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 shadow-sm"
          required
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "🙉" : "🙈"}
        </button>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full flex justify-end mb-6"
      >
        <Link
          to="/auth/reset-password"
          className="inline-block text-sm text-purple-600 hover:text-purple-700 transition-all duration-300 
                   hover:translate-x-1 bg-purple-50 px-3 py-1.5 rounded-lg hover:bg-purple-100"
        >
          Tìm lại Mật khẩu
        </Link>
      </motion.div>

      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-sm mt-3"
        >
          {error}
        </motion.p>
      )}

      <motion.button
        type="submit"
        className="flex items-center justify-center gap-2 w-full bg-purple-500 text-white font-medium py-3 mt-6 rounded-lg hover:bg-purple-600 shadow-lg transition duration-300 transform hover:-translate-y-1"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="fa-solid fa-right-to-bracket"></i> 
        Đăng nhập
      </motion.button>
    </form>
  );
};

export default SignInForm;
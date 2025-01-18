import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../components/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "../../apis/auth";
import {
  faBars,
  faTimes,
  faHome,
  faSearch,
  faHeart,
  faSignOutAlt,
  faUser,
  faUserPlus,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

function Header({ role }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);
  let avatarUrl = user ? user.avatarUrl : null;
  avatarUrl = avatarUrl || "https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Adrian";

  const navigate = useNavigate();
  const menuRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(!isMenuOpen);
  };

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/auth/sign-in");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center h-[57px] px-4">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Logo size="text-3xl" />
        </motion.div>

        {/* Hamburger Menu */}
        <div className="sm:hidden">
          <button
            onClick={toggleNav}
            className="text-gray-700 focus:outline-none"
          >
            <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Navigation Links */}
        <motion.nav
          className={`${
            isNavOpen ? "fixed top-0 right-0 w-3/4 h-full bg-white flex flex-col items-start pt-6 px-6 shadow-lg z-40" : "hidden"
          } sm:flex items-center gap-6 text-base font-medium text-gray-700`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <button
            className="self-end text-gray-700 mb-4"
            onClick={toggleNav}
          >
            <FontAwesomeIcon icon={faTimes} size="lg" className=" sm:hidden"/>
          </button>
          {role !== "admin" && (
            <>
              <Link
                to="/home"
                className={`flex items-center gap-2 transition duration-300 ${
                  isActive("/home")
                    ? "text-purple-500 border-b-2 border-purple-500"
                    : "hover:text-purple-500"
                }`}
                onClick={toggleNav}
              >
                <FontAwesomeIcon icon={faHome} /> Trang chủ
              </Link>
              <Link
                to="/playground-recommendation"
                className={`flex items-center gap-2 transition duration-300 ${
                  isActive("/playground-recommendation")
                    ? "text-purple-500 border-b-2 border-purple-500"
                    : "hover:text-purple-500"
                }`}
                onClick={toggleNav}
              >
                <FontAwesomeIcon icon={faSearch} /> Tìm dịch vụ
              </Link>
              <Link
                to="/favorites"
                className={`flex items-center gap-2 transition duration-300 ${
                  isActive("/favorites")
                    ? "text-purple-500 border-b-2 border-purple-500"
                    : "hover:text-purple-500"
                }`}
                onClick={toggleNav}
              >
                <FontAwesomeIcon icon={faHeart} /> Dịch vụ đã thích
              </Link>
            </>
          )}
        </motion.nav>

        {/* Profile Section */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {!userData ? (
            <div className="flex gap-4">
              <Link
                to="/auth/sign-in"
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-300"
              >
                <FontAwesomeIcon icon={faUser} />
                <span className="hidden sm:inline">Đăng nhập</span>
              </Link>
              <Link
                to="/auth/sign-up"
                className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white hover:bg-purple-700 rounded-md transition-all duration-300"
              >
                <FontAwesomeIcon icon={faUserPlus} /> Đăng kí
              </Link>
            </div>
          ) : (
            <div className="relative" ref={menuRef}>
              <button
                className="flex items-center focus:outline-none"
                onClick={toggleMenu}
              >
                <img
                  src={avatarUrl}
                  alt="User Avatar"
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                    isMenuOpen
                      ? "border-purple-600 shadow-lg scale-110"
                      : "border-purple-500 hover:border-purple-600 hover:scale-105"
                  }`}
                />
              </button>

              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: -10, scale: 0.95 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.2, ease: "easeOut" },
                      },
                      exit: {
                        opacity: 0,
                        y: -10,
                        scale: 0.95,
                        transition: { duration: 0.2, ease: "easeIn" },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-purple-100 overflow-hidden"
                  >
                    <div className="py-2">
                      <Link
                        to="/profile"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                          <FontAwesomeIcon icon={faUserCircle} className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-medium">Thông tin cá nhân</div>
                          <div className="text-xs text-gray-500">Chỉnh sửa thông tin</div>
                        </div>
                      </Link>

                      <div className="px-3 my-1">
                        <div className="border-t border-gray-200"></div>
                      </div>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                          <FontAwesomeIcon icon={faSignOutAlt} className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-medium">Đăng xuất</div>
                          <div className="text-xs text-gray-500">Đăng xuất tài khoản</div>
                        </div>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
    </header>
  );
}

export default Header;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Dynamically import all images from the landing folder
    const importImages = async () => {
      const imageContext = import.meta.glob('../../../assets/landing/*.{png,jpg,jpeg,gif,webp}');
      const imageArray = [];
      
      for (const path in imageContext) {
        const module = await imageContext[path]();
        imageArray.push(module.default);
      }
      
      setImages(imageArray);
    };

    importImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-[#e9f6e9] to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #16a34a 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Image Carousel */}
      <div className="absolute right-0 top-0 w-2/3 h-full overflow-hidden">
        <AnimatePresence mode="wait">
          {images.length > 0 && (
            <motion.div
              key={currentImage}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.9, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5 }}
            >
              <img
                src={images[currentImage]}
                alt={`Slide ${currentImage + 1}`}
                className="object-cover w-full h-full rounded-bl-[80px]"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/80 to-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentImage ? 'bg-purple-500' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImage(index)}
              whileHover={{ scale: 1.2 }}
              animate={{
                scale: index === currentImage ? 1.2 : 1,
                opacity: index === currentImage ? 1 : 0.7
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#e9f6e9] text-purple-500 text-sm font-medium">
                Tạo kiểu dáng mới cho mái tóc của bạn
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Cùng chúng tôi&nbsp;
              <span className="text-purple-500 relative">
                 tạo phong cách mới
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <path
                    d="M0,5 Q25,0 50,5 T100,5"
                    stroke="#16a34a"
                    strokeWidth="2"
                    fill="none"
                  />
                </motion.svg>
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Nằm giữa làng Chấn Long, quán cắt tóc lâu đời này là điểm đến quen thuộc của những ai yêu thích sự yên tĩnh và thoải mái. Với không gian thoáng đãng, cách bài trí đơn giản mà tinh tế, quán mang đến cảm giác thư giãn như ở nhà.

Với lịch sử lâu năm, nơi đây không chỉ nổi tiếng với tay nghề cắt tóc khéo léo mà còn ghi điểm bởi mức giá cực kỳ phải chăng. Dù bạn đến để tân trang phong cách hay chỉ cần một chút gọn gàng, quán cắt tóc Chấn Long chắc chắn sẽ mang đến sự hài lòng cả về chất lượng lẫn dịch vụ.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/auth/sign-in"
                className="group inline-flex items-center gap-2 bg-purple-500 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg shadow-purple-500/25 hover:bg-[#15803d] transition-all duration-300"
              >
                Khám phá
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
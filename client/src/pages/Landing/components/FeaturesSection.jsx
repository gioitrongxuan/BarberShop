import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Shield, Users } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon, index, color }) => {
  return (
    <motion.div
      className="relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="bg-white rounded-2xl p-8 group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
        style={{
          background: `linear-gradient(135deg, ${color}/5 0%, white 100%)`,
        }}
        whileHover={{
          boxShadow: "0 20px 40px rgba(22, 163, 74, 0.15)",
        }}
      >
        {/* Icon Container */}
        <div className="relative mb-6">
          <motion.div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: color }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-500 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Tìm kiểu tóc dễ dàng",
      description: "Khách hàng có thể tham khảo các kiểu tóc phù hợp với khuôn mặt và phong cách của mình.",
      icon: Scissors, // Biểu tượng cây kéo, biểu thị dịch vụ cắt tóc
      color: "#16a34a" // Màu xanh lá, mang lại cảm giác tươi mới và thân thiện
    },
    {
      title: "Không gian an toàn và sạch sẽ",
      description: "Chúng tôi đảm bảo môi trường sạch sẽ và vệ sinh, mang lại sự an tâm cho khách hàng.",
      icon: Shield, // Biểu tượng cái khiên, biểu thị sự bảo vệ
      color: "#16a34a"
    },
    {
      title: "Cộng đồng khách hàng thân thiết",
      description: "Khách hàng có thể tham gia các chương trình ưu đãi và giao lưu với cộng đồng yêu thích làm đẹp.",
      icon: Users, // Biểu tượng nhóm người, đại diện cho cộng đồng
      color: "#16a34a"
    }
  ];
  

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Bảy thanh cắt tóc<span className="text-purple-500">: Dịch vụ chính</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Cung cấp các dịch vụ làm đẹp tóc chất lượng cao, đa dạng và phong phú.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>

      {/* Background Accents */}
      <motion.div
        className="absolute top-40 -right-40 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(22, 163, 74, 0.05) 0%, transparent 70%)"
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full"
        style={{ 
          background: "radial-gradient(circle, rgba(74, 222, 128, 0.05) 0%, transparent 70%)"  
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
};

export default FeaturesSection;
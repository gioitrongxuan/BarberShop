import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sofa, Tag } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description, index, gradient }) => {
  return (
    <motion.div 
      className="relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="p-8 rounded-2xl group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"  
        style={{ background: 'white' }}
        whileHover={{
          boxShadow: "0 20px 40px rgba(22, 163, 74, 0.15)",
        }}
      >
        {/* Gradient Background */}
        <div 
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
          style={{
            background: gradient,
          }}
        />

        {/* Content Wrapper */}
        <div className="relative z-10 flex gap-6">
          {/* Icon Container */}
          <motion.div
            className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: gradient }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-500 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Animated Border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: gradient }}
        />
      </motion.div>
    </motion.div>
  );
};

const BenefitsSection = () => {
  const gradient = "linear-gradient(135deg, #16a34a, #166534)";
  const benefits = [
    {
      icon: Scissors, // Bạn có thể thay biểu tượng bằng biểu tượng cây kéo hoặc phù hợp hơn
      title: "Tay nghề lâu đời, cắt tóc chuẩn đẹp",
      description:
        "Chúng tôi tự hào với nhiều năm kinh nghiệm, mang đến kiểu tóc phù hợp nhất với phong cách và mong muốn của bạn.",
    },
    {
      icon: Sofa, // Biểu tượng ghế sofa đại diện cho sự thoải mái
      title: "Không gian yên tĩnh và thoải mái",
      description:
        "Quán mang đến một không gian thư giãn, yên bình, giúp bạn tận hưởng từng phút giây làm đẹp.",
    },
    {
      icon: Tag, // Biểu tượng nhãn giá đại diện cho giá cả
      title: "Dịch vụ chất lượng với giá cả hợp lý",
      description:
        "Cam kết mang lại dịch vụ tốt nhất với mức giá phù hợp cho mọi khách hàng. Chất lượng vượt mong đợi!",
    },
  ];
  

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
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
            Bảy thanh cắt tóc<span className="text-purple-500">: Điểm nổi bật</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Cung cấp các dịch vụ làm đẹp tóc chất lượng cao, đa dạng và phong phú.
          </p>
        </motion.div>

        {/* Benefits Stack */}
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} index={index} gradient={gradient} />
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-[#d1fae5]/5 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#dcfce7]/5 to-transparent -z-10" />

       {/* Google Maps Iframe */}
       <section className="bg-white py-8">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row">
    {/* Cột mô tả */}
    <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
      <h2 className="text-xl font-semibold mb-4">Về chúng tôi</h2>
      <p className="text-gray-600">
        Chào mừng bạn đến với địa chỉ uy tín của chúng tôi. Tại đây, chúng tôi
        cung cấp dịch vụ và sản phẩm chất lượng cao, mang đến trải nghiệm tốt
        nhất cho khách hàng. Đừng quên ghé thăm để khám phá những điều tuyệt vời
        đang chờ đợi bạn!
      </p>
    </div>

    {/* Cột bản đồ */}
    <div className="md:w-1/2">
      <h2 className="text-xl font-semibold mb-6">Địa chỉ của chúng tôi</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d300140.52514206874!2d105.5190049010129!3d19.89249864078621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136f74da02f754b%3A0xeff78c866c6178c6!2zQuG6o3kgVGhhbmggQ-G6r3QgVMOzYw!5e1!3m2!1sja!2s!4v1737100611041!5m2!1sja!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

    </section>
    
  );
};

export default BenefitsSection;
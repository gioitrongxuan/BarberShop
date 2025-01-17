import React, { useState, useRef } from "react";
import Slider from "./Slider";
import { useEffect } from "react";
import { getPlayground } from "../../apis/playground";

const isFake = 1;
const isReal = 0;

const HomePage = () => {
  const categories = [
    { name: "Kiểu Tóc", icon: "✂️" },
    { name: "Chăm Sóc Tóc", icon: "🧖‍♀️" },
    { name: "Chăm Sóc Râu", icon: "🧔‍♂️" },
    { name: "Cắt Tóc Trẻ Em", icon: "👧" },
    { name: "Gói Đặc Biệt", icon: "🎉" },
  ];

  const sliderRefs = useRef([]);
  const [playgrounds, setPlaygrounds] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const limitPerPage = 10;

  const fetchPlaygrounds = async () => {
    try {
      const queryParams = new URLSearchParams();
      queryParams.append("limit", limitPerPage);
      queryParams.append("page", currentPage);
      const response = await getPlayground(queryParams);
      const responseData = response.data;
      setPlaygrounds(responseData.data);
      setTotalPage(responseData.pagination.totalPage);
      setCurrentPage(Number.parseInt(responseData.pagination.currentPage));
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPlaygrounds();
  }, []);

  const scrollToSlider = (index) => {
    if (sliderRefs.current[index]) {
      sliderRefs.current[index - 1].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-14">
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Chào Mừng Đến Với Trải Nghiệm Cắt Tóc Cao Cấp Của Chúng tôi!</h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Tìm kiếm dịch vụ..."
            className="w-3/4 max-w-md px-4 py-2 rounded-md shadow-md text-gray-700"
          />
        </div>
      </header>

      {/* Phần Danh Mục */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold mb-6">Khám phá các dịch vụ phổ biến của chúng tôi</h2>
          <div className="grid grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-50 p-4 rounded-md shadow-md cursor-pointer"
                onClick={() => scrollToSlider(index)}
              >
                <div className="text-5xl">{category.icon}</div>
                <p className="mt-2 text-lg font-medium">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="bg-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          {categories.map((category, index) => (
            <div
              key={index}
              ref={(el) => (sliderRefs.current[index] = el)}
              className="mb-10"
            >
              <h3 className="text-lg font-bold">
                {category.icon} {category.name}
              </h3>
              <Slider
                playgroundsData={playgrounds}
                is_faker={index % 2 === 0 ? isReal : isFake}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Google Maps Iframe */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-semibold mb-6">Địa chỉ của chúng tôi</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d300140.52514206874!2d105.5190049010129!3d19.89249864078621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136f74da02f754b%3A0xeff78c866c6178c6!2zQuG6o3kgVGhhbmggQ-G6r3QgVMOzYw!5e1!3m2!1sja!2s!4v1737100611041!5m2!1sja!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

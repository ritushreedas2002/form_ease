import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Scroll = () => {
  const carouselData = [
    {
      id: 1,
      image: "https://khabaruttarakhand.com/wp-content/uploads/2022/10/what-is-gate-exam.jpeg",
      title: "GATE",
      subtitle: "---Results---",
      year: "2022",
    },
    {
        id:2,
        image:"https://play-lh.googleusercontent.com/HS-SAMsnnhnH20lPF9E2cWRBJv9IdlMxWxWf1ONzHD6TZNZqAe_N05cSMnWaej2HZA",
        title:"NEET",
        subtitle:"---Results---",
        year:"2022"
    },{
        id:2,
        image:"https://www.shutterstock.com/image-photo/jee-joint-entrance-examination-iit-260nw-2280557307.jpg",
        title:"JEE",
        subtitle:"---Results---",
        year:"2023" 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
  };

  const currentItem = carouselData[currentIndex];

  return (
    <div className="flex items-center justify-between bg-slate-950 text-white rounded-3xl h-32 -my-20 relative">
      <span className="pl-3">
        <FaChevronLeft onClick={handlePrev} className="cursor-pointer" />
      </span>
      <div className="flex">
        <img className="w-32 h-36 p-5" src={currentItem.image} alt="ig" />
        <div>
          <h1 className="text-center pt-7 text-3xl">{currentItem.title}</h1>
          <h4>{currentItem.subtitle}</h4>
          <h5 className="mx-3 bg-white text-black px-4 pb-6 rounded-3xl w-16 h-5 text-bold">{currentItem.year}</h5>
        </div>
      </div>
      <span className="pr-3">
        <FaChevronRight onClick={handleNext} className="cursor-pointer" />
      </span>
    </div>
  );
};

export default Scroll;

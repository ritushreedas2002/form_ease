// RecommendedCard.jsx
import React from 'react';
import { FaChevronRight, FaWallet } from 'react-icons/fa6';
import { IoPeople } from 'react-icons/io5';

const RecommendedCard = (props) => {
  const { name, name2, logo, amount, people,sub} = props.name;

  return (
    <div className="w-[40%] h-64 shadow-xl border bg-white border-b-slate-900 mx-6 p-3 text-black rounded-lg">
      <div className="flex justify-between">
        <div className='border w-14 rounded-lg m-3 '>
        <img className="w-14 h-14" src={logo} alt="lo" />
        </div>
        <div className="mr-16 mt-7">
          <h1 className="text-bold">{name}</h1>
          <h6 className="text-gray-500 text-xs">{name2}</h6>
        </div>
      </div>
      <hr className="m-3"></hr>
      <div className="flex-col ml-11 space-y-2">
        <div className="flex">
          <IoPeople />
          <h5 className='text-xs text-bold'>{people}</h5>
        </div>
        <div className="flex">
          <FaWallet />
          <h3 className='text-xs text-bold -pl-1'>{amount}</h3>
        </div>
        {sub && (
          <div className='flex ml-3'>
            {sub.map((subject, index) => (
              <h5 className="border border-gray-500 h-[1%] rounded-lg text-gray-500 text-xs m-1 px-2 "key={index}>{subject}</h5>
            ))}
          </div>
        )}
        <div className='text-blue-600 ml-32 flex'>View Details<span className='flex text-xs mt-2'><FaChevronRight/><FaChevronRight/></span> </div>
      </div>
    </div>
  );
};

export default RecommendedCard;

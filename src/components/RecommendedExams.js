// RecommendedExams.jsx
import RecommendedCard from './RecommendedCard';
import { recommended } from '../utils/recommended';
import './RecommendedExams.css'; // Import a CSS file for styling

const RecommendedExams = () => {
   
  return (
    <div className="recommended-container">
      <div className="flex justify-between items-center">
        <h1 className="text-blue-800 text-bold text-lg">Recommended</h1>
        <h1 className="text-blue-800">See All</h1>
      </div>
      <div className="scroll-wrapper">
        <div className="recommended-scroll-container">
            {recommended.map((item)=><RecommendedCard key={item.id} name={item}/>)}
        </div>
      </div>
    </div>
  );
};

export default RecommendedExams;

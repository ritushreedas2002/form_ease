import RecommendedCard from "./RecommendedCard";
import { recommended } from "../utils/recommended";
const RecommendedExams=()=>{
return (
    <div>
        <div className="flex justify-between">
            <h1 className="text-blue-800 text-bold text-lg">Recommended</h1>
            <h1 className="text-blue-800">See All</h1>
        </div>
        <div className="flex justify-between overflow-scroll-x m-3">
            {recommended.map((items)=><RecommendedCard name={items}/>)}
            {/*<RecommendedCard name={recommended[0]}/>
            <RecommendedCard name={recommended[0]}/>
            <RecommendedCard name={recommended[0]}/>
            <RecommendedCard name={recommended[0]}/>
            <RecommendedCard name={recommended[0]}/>
            <RecommendedCard name={recommended[0]}/>
            <RecommendedCard name={recommended[0]}/>
            <RecommendedCard name={recommended[0]}/>
<RecommendedCard name={recommended[0]}/>*/}

        </div>
        
    </div>
)
}
export default RecommendedExams;
import RecentExams from "./RecentExam";
import RecommendedExams from "./RecommendedExams";

const ExamContainer=()=>{
    return (
        <div className=" flex-col h-auto w-[100%] mt-32">
            <RecommendedExams/>
            <RecentExams/>
        </div>
    )
}
export default ExamContainer;
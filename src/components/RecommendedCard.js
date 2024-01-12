import { FaWallet} from "react-icons/fa6";
const RecommendedCard=(props)=>{
   const{name,name2,logo,amount,people}=props.name;
    console.log(props);
    return (
        <div className=" mt-10 w-[35%] h-64 shadow-xl border border-b-slate-900 mx-6 p-3 text-black">
            <div className="flex justify-between">
                <img  className="w-32 h-22" src={logo} alt="lo"/>
                <div className="mr-16 mt-7">
                <h1 className="text-bold">{name}</h1>
                <h2 className="text-gray-500">{name2}</h2>
                </div>
            </div>
            <hr className="m-3"></hr>
            <div className="items-center">
              <p><h1>{people}</h1></p>
              <div className="flex">
                <FaWallet />
                <h1>{amount}</h1>
              </div>
              
            </div>
            
        </div>
    )
}
export default RecommendedCard;
import {list} from '../utils/buttonlistdata';
import './ButtonList.css'
const ButtonList=()=>{
    return (
        <div className='scroll-wrapper'>
            <div className='scroll-container'>
            {list.map((item)=>
                <h3 className="item">{item}</h3>
            )}
        </div>
        </div>
        
    )
}
export default ButtonList;
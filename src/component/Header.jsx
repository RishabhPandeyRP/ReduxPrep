import { FaCartArrowDown } from "react-icons/fa";
import image from "../images/attachment_93135953.png"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect,useState } from "react";

function Header(){

    const arr = useSelector((state)=>state.cartslice);
    const quantities = useSelector((state) => state.QuantitySlice);
    
    const [noItems , setNoItems] = useState(0);
    useEffect(()=>{
        console.log("array from header " , arr);
        console.log("quantity from header " , quantities);
        let sum =0;
        for(let i=0;i<arr.length;i++){
            sum = sum + (quantities[arr[i].id] || 1);
        }
        console.log("from header : " , sum);
        setNoItems(sum);
    },[arr , quantities])

    return(
        <div className="fixed  w-full h-[10px] mb-[50px] flex items-center shadow-[0px_20px_20px_-15px_rgba(0,0,0,0.15)] bg-white py-[40px] z-20  border-green-500 mt-0 -top-[0%]">
            <nav className="w-[1110px] h-[60px] flex justify-between mx-auto">
                <div className="w-fit h-fit"> 
                    <NavLink to="/"><img src={image} alt="" className="h-[50px]  "/></NavLink>
                </div>

                <div className=" scale-[200%] mt-[25px] mr-[20px] relative">
                     <NavLink to='/cart'> <FaCartArrowDown /> </NavLink>
                     {
                        arr.length !== 0 ? (<div className="w-[9px] h-[9px] rounded-full bg-green-600 absolute -top-[10%] -right-[20%] text-white text-[9px] font-bold flex justify-center items-center animate-bounce">{noItems}</div>):(<div></div>)
                     }
                </div>

                
            </nav>
        </div>
    );
}

export default Header;
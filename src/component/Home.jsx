import { useEffect, useState } from "react";
import Loading from "./Loading";
import Card from "./Card";

function Home(){

    const[loading , setLoading] = useState(true);
    const[data,setData] = useState([]);

    async function fetchAPI(){
        setLoading(true);
        try {
            const output = await fetch("https://fakestoreapi.com/products");
            const data = await output.json();
            setData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchAPI()
    },[]);

    return(
        <div className="w-[1200px] mx-auto mb-10 ">
            {
                loading ? (<Loading></Loading>):(
                    <div className="flex flex-row gap-7 flex-wrap mt-[100px]">
                        
                        {
                            data.map((post)=>(
                                <Card post={post}></Card>
                            )
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}

export default Home;
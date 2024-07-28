import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { removeItem } from "../redux/slices/CartSlice";
import { increase, decrease } from "../redux/slices/QuantitySlice";

function Cart() {
    const dispatch = useDispatch();
    const arr = useSelector((state) => state.cartslice);
    const quantities = useSelector((state) => state.QuantitySlice);
    console.log("from cart " , arr)

    const [amnt, setAmnt] = useState(0);
    useEffect(() => {
        let cost = 0;
        for (let i = 0; i < arr.length; i++) {
            cost = cost + arr[i].price * (quantities[arr[i].id] || 1);
        }
        setAmnt(cost);
    }, [arr, quantities]);

    function clickHandler(post) {
        dispatch(removeItem(post.id));
    }

    return (
        <div className="flex flex-row gap-9 justify-between w-[1100px] mx-auto h-fit mt-28">
            <div className="">
                {
                    arr.map((post) => (
                        <div key={post.id} className="w-fit h-fit flex flex-row gap-4 px-5 py-5 mb-4 rounded-lg shadow-[0px_5px_20px_8px_rgba(0,0,0,0.15)]">
                            <div>
                                <img src={post.image} alt="" className="w-[110px] h-[140px] mt-[50%]" />
                            </div>

                            <div className="flex flex-col gap-4 mx-6">
                                <div className="w-[300px] font-semibold text-lg">{post.title}</div>
                                <div className="w-[400px]">{post.description}</div>
                                <div className="flex flex-row justify-between px-10">
                                    <div className="font-bold text-green-600 text-xl">${post.price}</div>
                                    <div className="scale-[170%] mt-2" onClick={() => clickHandler(post)}><MdOutlineDeleteOutline className="cursor-pointer" /></div>

                                    <div className="flex gap-2 items-center">
                                        <button onClick={() => dispatch(increase(post.id))} className="px-2 py-1 border rounded-md">+</button>
                                        <div>{quantities[post.id] || 1}</div>
                                        <button onClick={() => dispatch(decrease(post.id))} className="px-2 py-1 border rounded-md">-</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="border-2 border-black w-[450px] mb-4">
                <div className="mt-10 mx-2 flex flex-col justify-between h-[90%]">
                    <div>
                        <div>
                            <p className="text-green-600 font-semibold">Your Cart</p>
                        </div>
                        <div>
                            <p className="text-green-600 font-bold text-4xl">SUMMARY</p>
                        </div>
                        <div className="mt-2 font-semibold text-lg">
                            Total Items : {arr.length}
                        </div>
                    </div>

                    <div className="text-xl font-bold">
                        <div className="mx-20 ml-24">Total Amount : <p className="text-red-700 inline mx-2">${amnt}</p></div>
                        <button className="rounded-lg text-white bg-green-600 block px-10 py-2 my-2 mx-auto">
                            CHECKOUT NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;

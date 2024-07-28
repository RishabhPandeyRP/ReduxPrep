import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slices/CartSlice";
import "./Card.css";

function Card({ post }) {
    const dispatch = useDispatch();
    const arr = useSelector((state) => state.cartslice);
    const quantities = useSelector((state) => state.QuantitySlice);
    const count = quantities[post.id] || 0;

    function clickHandler() {
        const updatedPost = { ...post, quantity: count };
        dispatch(addItem(updatedPost));
    }

    function clickHandler2() {
        dispatch(removeItem(post.id));
    }

    return (
        <div className="w-[309px] h-[410px] rounded-lg pb-5 hover:scale-[104%] duration-200 hover:bg-gradient-to-r from-[#fed7aa] via-[#ecfccb] to-[#818cf8] bg-animate pt-1 mx-auto bg-white">
            <div className="border-2 border-white w-[300px] h-[400px] mx-auto rounded-lg shadow-[0px_5px_20px_8px_rgba(0,0,0,0.15)] bg-white">
                <div className="w-[200px] whitespace-nowrap overflow-hidden text-ellipsis mx-auto my-4 font-bold px-2">
                    {post.title}
                </div>
                <div className="w-[200px] line-clamp-2 mx-auto">{post.description}</div>
                <div>
                    <img src={post.image} alt="" className="w-[150px] h-[170px] mx-auto my-6" />
                </div>
                <div className="flex flex-row justify-between mb-3 mt-9">
                    <div className="mx-5 text-green-600 font-bold text-lg">
                        ${post.price}
                    </div>
                    <div className="mx-5">
                        {
                            arr.some((p) => p.id === post.id) ? (
                                <button className="border border-black rounded-xl px-5 font-semibold hover:bg-slate-950 hover:text-white" onClick={clickHandler2}>Remove from cart</button>
                            ) : (
                                <button className="border border-black rounded-xl px-5 font-semibold hover:bg-slate-950 hover:text-white" onClick={clickHandler}>Add to cart</button>
                            )
                        }
                    </div>
                </div>
                {/* <div className="flex gap-2 items-center justify-center">
                    <button onClick={() => dispatch(increase(post.id))} className="px-2 py-1 border rounded-md">+</button>
                    <div>{count}</div>
                    <button onClick={() => dispatch(decrease(post.id))} className="px-2 py-1 border rounded-md">-</button>
                </div> */}
            </div>
        </div>
    );
}

export default Card;

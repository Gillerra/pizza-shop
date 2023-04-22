
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";

const Dish = ({dish}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    return(<div>
        <div className="container">
        <img src= {`${dish.img}.jpg`} alt='foto'/>
        <h2>{dish.name}</h2>
        <p>{dish.price} рублей</p>

        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>

        <button onClick={() => {dispatch(addItemToCart({dish, quantity}))}} className="addToCart">Добавить в корзину</button>
        </div>
    </div>)
}

export default Dish;
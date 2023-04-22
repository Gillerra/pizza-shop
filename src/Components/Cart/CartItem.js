import dataDishes from "../../data/dataDishes";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {

    const dishes = dataDishes.find(item => item.id === cartItem.dishId)
    const dispatch = useDispatch();

    return(<div>
        <h2 className="dishCart">{dishes.name}</h2>
        <p>{cartItem.quantity} шт. </p>
        <p className="price">Цена: {dishes.price * cartItem.quantity} рублей </p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId : cartItem.id}))}>
        <img className="icon" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/null/external-delete-multimedia-kiranshastry-lineal-color-kiranshastry.png"  alt="delete"/>
        </span>
    </div>)
}

export default CartItem;
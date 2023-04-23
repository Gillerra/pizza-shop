import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(<div>

        <img className="cartIcon" src="https://img.icons8.com/color/48/null/shopping-cart--v1.png" alt="cart"/>
        
        {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)}

        <h3>К оплате: {totalPrice} рублей</h3>

        <button className={cartItems.length < 1 ? 'orderNone' : 'order'}>Оформить заказ</button>

        </div>)
}

export default Cart;
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="p-5">
      <h1>Cart</h1>
      <div >
        {cart.map((item, i) => (
          <CartCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;

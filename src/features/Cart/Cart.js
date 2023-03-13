import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {deleteFromCart,resetCart} from '../Products/productsSlice'

const Cart = () => {
  const products = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.qty * item.price;
    });
    return total.toFixed(2);
  };


  
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.description?.substring(0, 100)}</p>
            <div className="price">
              {item.qty} x Rs {item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={()=>{dispatch(deleteFromCart(item))}}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>Rs {totalPrice()}</span>
      </div>
      <button >PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={()=>{dispatch(resetCart())}} >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;

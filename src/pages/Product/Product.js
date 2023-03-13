import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
// import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../redux/cartReducer";
import { addToCart } from "../../features/Products/productsSlice";

const Product = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const products=useSelector((state)=>state.products.products);
  const data=products.find((product)=>product.id===parseInt(id));
 
  // console.log(data);
 
  return (
    <div className="product">
      {false ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={data.img}
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={data.img2}
                alt="img2"
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={selectedImg==='img'?data.img:data.img2}
                alt="main img"
              />
            </div>
          </div>
          <div className="right">
            <h1>{data.title}</h1>
            <span className="price">Rs{data.price}</span>
            <p>{data.description}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
             onClick={()=>{dispatch(addToCart({...data,qty:quantity}))}}
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;

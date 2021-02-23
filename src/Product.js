import React from 'react'
import "./Product.css";
import {useStateValue} from "./StateProvider";
function Product({ id ,title , price, image, rating}) {

    const [{basket}, dispatch] = useStateValue();

console.log("This is the basket ",basket);

    const addToBasket = () => {
         dispatch({
             type:"ADD_TO_BASKET",
             item: {
                 id: id,
                 title: title,
                 image: image,
                 price: price,
                 rating: rating,
             },
         });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className ='product__price' >
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <div className = "Product__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>⭐</p>
                    ))}
                    
                    

                </div>
                </div>
                <img src={image} alt="" ></img>

                <button onClick ={addToBasket}>Add To Basket</button>
                 
        </div>
    )
}

export default Product
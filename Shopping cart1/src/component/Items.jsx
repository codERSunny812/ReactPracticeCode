import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Items = ({name,price}) => {

    const cart = useContext(CartContext);
    // console.log(cart);
    return(
        <>
        <div className="container" style={{border:'2px solid red' , height:'100px' , width:'200px' ,margin:'4px'}}>
        <h2>ITEM NAME: {name}</h2>
        <h4>Price :${price}</h4>
        <button style={{backgroundColor:'lavender' , padding:'3px'}} onClick={()=>{
            cart.setItem([...cart.items,{name:name,price:price},])
        }}>Add to the cart </button>
            </div>
        </>
    );

}

export default Items;
import { useContext } from "react";
import { CartContext } from "../context/CartContext";




const Cart = () =>{

    const cart = useContext(CartContext);
    console.log(cart);

   const price = cart.items.reduce((acc, item) => acc + item.price, 0);

    return(
     <div style={{display:'flex' , alignItems:'center',justifyContent:'center'}}>
     <div className="cartCont" style={{border:'2px solid black' ,margin:'3px',height:'500px',width:'500px'}}>
             <h1 style={{fontSize:'36px',fontWeight:'600',fontFamily:'serif'}}>Cart</h1>
             {cart.items.map((item, index) => (
                <li key={index} style={{fontSize:'30px'}}>
                   {item.name} - ₹{item.price}
                </li>
             ))}
             <h6> Total Price : ₹{price}</h6>
     </div>
     
     </div>
    );
}

export default Cart;
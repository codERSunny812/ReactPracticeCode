import "./App.css";
import Items from "./component/items";
// import Items from "./component/Items";
// import Cart from "./component/cart";
import Cart from "./component/Cart";



function App() {
  return (
    <>
    <h1 style={{fontSize:'34px' , fontWeight:'500',textTransform:'capitalize'}}>context api in react </h1>
    <div style={{display:'flex' , alignContent:'center' , justifyContent:'center'}}>
    <Items name={"macbook"} price={99999}/>
      <Items name={"iphone"} price={70000} />
      <Items name={"iwatch"} price={1000} />
      <Items name={"eardopes"} price={25000} />
    </div>

    <Cart/>
    </>
  );
}

export default App;

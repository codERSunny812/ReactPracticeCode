import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// const Person = () => {
//   return (
//     <h1>hey its me sunny</h1>
//   );
// }

// const PersonAge = () => {
//   return (
//     <h2>my age is 21</h2>
//   );
// }
const image = "https://m.media-amazon.com/images/I/61ZPDQOjw-L._SY522_.jpg";
const about = "Do It Today";
const Author = " Drious Forux";

function App() {
  return (
    <div className="book-container">
      {/* <h2>This is a book list</h2> */}
      <BookList
        image="https://m.media-amazon.com/images/I/61ZPDQOjw-L._SY522_.jpg"
        name="Do It Today"
        Author="Drious Forux"
      />
      <BookList
        image="https://m.media-amazon.com/images/I/61ZNAnIrwwL._AC_UY436_FMwebp_QL65_.jpg"
        name="Eat that frog"
        Author="Tracy Brian"
      />
      <BookList
        image="https://m.media-amazon.com/images/I/715qi-cIbML._AC_UY436_FMwebp_QL65_.jpg"
        name="Don't belive every thing you see"
        Author="Joseph Nguygen"
      />
      <BookList
        image="https://m.media-amazon.com/images/I/71Yb9hJXocL._AC_UY436_FMwebp_QL65_.jpg"
        name="Think Straight"
        Author="Darious forex"
      />
      <BookList
        image="https://m.media-amazon.com/images/I/919CBdNfQOL._AC_UY436_FMwebp_QL65_.jpg"
        name="Relaxing mandala"
        Author="sunny"
      />

      <BookList
        image="https://m.media-amazon.com/images/I/71zytzrg6lL._SY522_.jpg"
        name="The 5AM Club"
        Author="Robin sharma"
      />

      <BookList
        image="https://m.media-amazon.com/images/I/81-XmZm67vS._SY522_.jpg"
        name="The every day hero "
        Author="Robin Sharma"
      />

      <BookList
        image="https://m.media-amazon.com/images/I/71g0Nexa77L._AC_UY436_QL65_.jpg"
        name="Make money with chart pattern "
        Author="Sunil gurjar"
      />

      <BookList
        image="https://m.media-amazon.com/images/I/710jnzKlDTL._SY522_.jpg"
        name="Attitude is every thing"
        Author="Jeff killer"
      />
    </div>
  );
}

const BookList = (props) => {
  console.log(props);
  return (
    <div className="book-box">
      <img src={props.image} alt="" srcset="" />
      <div className="aboiut">
        <h2>{props.name}</h2>
        <h4>{props.Author}</h4>
      </div>
      {/* <Image/>
   <About/>
   <Author/> */}
    </div>
  );
};

// const Image = ()=>{
//   return(
//     <img src="https://m.media-amazon.com/images/I/61ZPDQOjw-L._SY522_.jpg" alt="" srcset=""  className='img'/>
//   );
// }

// const About = () =>{
//   return(
//     <h3>Do It Today: Overcome procrastination, improve productivity and achieve more meaningful things</h3>
//   );
// }

// const Author = () =>{
//   return(
//     <h1>
//       Darious Forux
//     </h1>
//   );
// }

export default App;

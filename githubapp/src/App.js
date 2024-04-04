import { useEffect, useState } from "react";
import Home from "./components/Home";


function App() {
const [items,setItems] = useState("");
const[user]= useState("frynelli");

useEffect( () =>{
  const fetchUser= async ()=>{
    const resp = await fetch(`https://api.github.com/users/${user}`);
    const data = await resp.json();
    setItems(data);
  }
  fetchUser();
  
},[])

  return (
    <>
    {items.length}
    <Home/>
    </>
  );
}

export default App;

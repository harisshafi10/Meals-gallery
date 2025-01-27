import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then(res => {
        setItems(res.data.meals)
      }).catch((error)=>{
        console.log(error)
      })
  },[]);

  const itemsList =  items.map(({strMeal , strMealThumb, idMeal})=>{
    return (
      
      <div key={idMeal} className="bg-white w-fit h-fit text-black rounded-3xl mt-5 flex flex-col justify-center items-center">
        <section className="" >
        <img className="rounded-t-3xl" src={strMealThumb} alt={strMeal} height={400} width={300}/>
      </section>
      <section className="text-wrap text-center text-xs">
        <p className="font-bold leading-10">{strMeal}</p>
        <p className="leading-5">#{idMeal}</p>
      </section>
      </div>
    )
  })

  return (
  <div className="bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-white items-center justify-center p-10">
  <h1 className="absolute text-[#82fd1d] leading-10 font-extrabold top-2  left-1/2 -translate-x-1/2 text-[50px] ">Meals</h1>
  {itemsList}
  </div>)
};

export default App;

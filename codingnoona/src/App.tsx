import React, { useState } from 'react';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/Restaurant';
import BestMenu from './BestMenu';

const data:Restaurant = {
  name: "NAKZO",
  category: "Japanese",
  address: {
    city: "busan",
    detail :"somewhere",
    zipCode: 412
  },
  menu: [{name: "Okonomiyaki", price: 5000, category: "pancake"},{name: "Onigiri", price: 2000, category: "rice"},{name: "Ramen", price: 4000, category: "ramen"}]
}

const App:React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address:Address) => {
    setMyRestaurant({...myRestaurant, address: address})
  }
  const showBestMenuName = (name:string) => {
    return name
  }
  return (
    <div className="App">
     <Store info={myRestaurant} changeAddress={changeAddress}/>
     <BestMenu name="텐동" category="튀김" showBestMenuName={showBestMenuName} />
    </div>
  );
}

export default App;

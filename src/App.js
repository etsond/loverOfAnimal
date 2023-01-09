import './app.css'
// importing 
import { useState } from "react";
import AnimalShow from "./AnimalShow";

// show a random string

function getRandomAnimal(){
  const animals = ['bird', 'cat', 'cow', 'dawg', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)]
};

// console.log(getRandomAnimal())

function App(){
  // using destructing to create two variables and setting both to equla to zero
  const [animals, setAnimals] = useState([]);

  // create the function that increment the count by one after eveyer handleClick
  const handleClick = () => {
    //animals.psuh(getRandomAnimal())
    //update the state using the setter function
    setAnimals([...animals, getRandomAnimal()]);
    
  };

  const renderedAnimals = animals.map((animal, index) => {

  return <AnimalShow type={animal} key={index} />
})


  return (
  <div className='app'>
    {/* showing the button and the count */}
  <button onClick={handleClick}>Click me Give your favorite animal some love</button>
  <div className='animal-list'>{renderedAnimals}</div>
  
  </div>
  );
}


export default App;
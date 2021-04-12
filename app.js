import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = "";

const showBackground = true;

//setting up the background
const background = (
  <img 
  className='background'
  alt='ocean'
  src='/images/ocean.jpg'
  />
)
// iterate over the animals object imported in line 1.
const images =[];

for( const animal in animals){
  images.push(
    <img 
    key={animal}
    className='animal'
    alt = {animal}
    src = {animals[animal].image}
    ariaLabel = {animal}
    role = 'button'
    onClick = {displayFact}
    />
  )
}

//function for event handller
function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);

  const funFact = animalInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
}

//wraping h1 elemnt with new background inside of a div tag, multiple expression
const animalFacts = (
  <div>
    <h1>{title == "" ? "Click an animal for a fun fact" : title}</h1>
    {showBackground && background}
    <p id = 'fact'></p>
    <div className= 'animals'>
    {images}
    </div>
  </div>
)


ReactDOM.render(animalFacts, document.getElementById("root"));

import './animalShow.css';
import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';


// setting up object to be equal to themselves. JavaScript trick
const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
};

function AnimalShow({type}){
//tracking the number if click
const [clicks, setClicks] = useState(0);

const handleClick = () => {
    // everytime user call this setter
    setClicks(clicks + 1);

};

    // adding an event for when the user click 
    return <div className='animal-show' onClick={handleClick}>
        {/* mapping out the pictures */}
        <img className='animal' alt='animal' src={svgMap[type]} />
        {/* creating a javacript object to control the size of the picture */}
        <img className='heart' alt='heart' src={heart} style={{ width: 10 + 10 * clicks + 'px'}} />
    </div>
}

// exporting the animals module
export default AnimalShow;
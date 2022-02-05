import { useState } from "react";

const isEven = (number) => {
    return number % 2 == 0;
}

const isPrime = (number) => {
    for (let i = 2; i <= number; i++) {
        if (i != number && number % i == 0)
            return false;
    }
    if (number == 0 || number == 1)
        return false;
    return true;
}


const classNameSquare = (number) => {
    let className = 'square';
    if (isPrime(number))
        className += ' prime';
    else {
        if (isEven(number))
            className += ' even';
        else
            className += ' odd';
    }
    return className;
}

const Square = ({ number }) => {
    const [stateSquare, setStateSquare] = useState(number)
    const randomNumbers = () => {
       setStateSquare((Math.round(Math.random()*100))+parseInt(stateSquare)) 
    }
   
    return (
        <div className={classNameSquare(number)}>
            <button className="number" onClick={randomNumbers} > {stateSquare}</button>
        </div>
    );
};

export default Square;

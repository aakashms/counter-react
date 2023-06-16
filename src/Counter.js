import { useState } from 'react';
import React  from 'react';
import './Counter.css';
import ReactDOM from 'react-dom';
import up from './images/upArrow.png';




function Counter(){

    const [count,setcount]= useState(0);
        

    return(
        <div>
            <h1 className='header1'>Working As counter</h1>

            <button className='b1' onClick={()=>setcount(count+1)}>Count Increase <img className='up' src={up} alt='Up'/> </button>
            <button className='b2' onClick={()=>setcount((count!=0) ? count-1 : 0 )}>  Count Decrease <img className='down' src={up} alt='Down'/> </button>
            <h4 className='final'>You clicked {count} times</h4>
        </div>
    
    );
}



export default Counter; 
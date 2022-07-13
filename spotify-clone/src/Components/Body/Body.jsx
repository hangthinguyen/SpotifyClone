import { useState } from 'react';
import LeftBody from '../LeftBody/LeftBody';
import RightBody from '../RightBody/RightBody';
import './Body.css';
export default function Body () {
    const [LeftBodyWidth, setLeftBodyWidth] = useState();

    function handleDragger(e) {
        if (e.clientX) {
            setLeftBodyWidth(e.clientX)
        }
    }

    return (
        <div className='body'>
            <LeftBody style={{width: LeftBodyWidth ? LeftBodyWidth : 'auto'}}/> 
            <div draggable className='resizer' onDrag={handleDragger}></div>
            <RightBody />
        </div>       
    )
}
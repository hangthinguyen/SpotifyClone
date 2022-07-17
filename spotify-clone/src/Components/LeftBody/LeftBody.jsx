import { useState } from 'react';
import SpotifyLogo from '../SpotifyLogo/SpotifyLogo';
import TopLeft from '../TopLeft/TopLeft';
import BottomLeft from '../BottomLeft/BottomLeft';
import './LeftBody.css';

export default function LeftBody ({ onResize }) {
    const [LeftBodyWidth, setLeftBodyWidth] = useState();

    function handleDragger(e) {
        if (e.clientX < 347 && e.clientX > 80 && LeftBodyWidth !== e.clientX) {
            setLeftBodyWidth(e.clientX);
            onResize();
        }
    }

    return (
        <div className='left-body-drag-bar'>
            <div className='left-body' style={{width: LeftBodyWidth ? LeftBodyWidth : 'auto'}}>
                <div>
                    <SpotifyLogo/>
                    <TopLeft />
                </div>
                <BottomLeft/>
            </div>
            <div draggable className='resizer' onDrag={handleDragger}></div>
        </div>
       
    )
        
}
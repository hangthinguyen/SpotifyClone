import { useState} from 'react';
import LeftBody from '../LeftBody/LeftBody';
import NavBar from '../NavBar/NavBar';
import ScrollingBody from '../ScrollingBody/ScrollingBody';
import './Body.css';

export default function Body () {
    const [scrollingBodyWidth, setScrollingBodyWidth] = useState(null);

    function handleResize() {
        const scrollingBodyEl = document.querySelector('.scrolling-body');
        
        if (scrollingBodyEl?.clientWidth !== scrollingBodyWidth) {
            setScrollingBodyWidth(scrollingBodyEl?.clientWidth)
        }
    }
    
    return (
        <div className='body'>
            <LeftBody onResize={handleResize}/> 
            <NavBar/>
            <ScrollingBody scrollingBodyWidth={scrollingBodyWidth} />
        </div>       
    )
}
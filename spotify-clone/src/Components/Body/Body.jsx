import LeftBody from '../LeftBody/LeftBody';
import RightBody from '../RightBody/RightBody';
import './Body.css';
export default function Body () {
    return (
        <div className='body'>
            <LeftBody/> 
            <RightBody />
        </div>       
    )
}
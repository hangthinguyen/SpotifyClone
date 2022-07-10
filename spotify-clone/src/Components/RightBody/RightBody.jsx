import NavBar from '../NavBar/NavBar';
import ScrollingBody from '../ScrollingBody/ScrollingBody';
import './RightBody.css';

export default function RightBody() {
    return (
        <div className='right-body'>
            <NavBar/>
            <ScrollingBody/>
        </div>
    )
}
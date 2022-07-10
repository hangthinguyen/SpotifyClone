import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

export default function Card({image, songStyle, songDescription}) {
    return (
        <div>
            <div>
                <img src={image}/>
                <button><FontAwesomeIcon icon={faPlay} /></button>
            </div>
            <div>
                <div>{songStyle}</div>
                <div>{songDescription}</div>
            </div>
        </div>
    )
}
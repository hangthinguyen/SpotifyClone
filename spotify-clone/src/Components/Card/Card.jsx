import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

export default function Card({categoryLink, image, songStyle, songDescription}) {
    return (
        <div className='card'>
            <a href={categoryLink}>
                <div className='img-container'>
                    <img src={image}/>                    
                    <button className='play-button'><FontAwesomeIcon icon={faPlay} className='triangle-btn'/></button>                    
                </div>
                <div className='text'>
                    <div className='song-category'>{songStyle}</div>
                    <div className='song-description'>{songDescription}</div>
                </div>
            </a>
        </div>
    )
}
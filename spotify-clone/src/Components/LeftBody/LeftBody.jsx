import SpotifyLogo from '../SpotifyLogo/SpotifyLogo';
import BottomLeft from '../BottomLeft/BottomLeft';
import './LeftBody.css';

export default function LeftBody () {
    return (
        <div className='left-body'>
            <SpotifyLogo/>
            <BottomLeft />
        </div>
    )
        
}
import SpotifyLogo from '../SpotifyLogo/SpotifyLogo';
import TopLeft from '../TopLeft/TopLeft';
import BottomLeft from '../BottomLeft/BottomLeft';
import './LeftBody.css';

export default function LeftBody () {
    return (
            <div className='left-body'>
                <div>
                    <SpotifyLogo/>
                    <TopLeft />
                </div>
                <BottomLeft/>
            </div>
       
    )
        
}
import SpotifyLogo from '../SpotifyLogo/SpotifyLogo';
import TopLeft from '../TopLeft/TopLeft';
import BottomLeft from '../BottomLeft/BottomLeft';
import './LeftBody.css';

export default function LeftBody ({style}) {
    return (
            <div className='left-body' style={style}>
                <div>
                    <SpotifyLogo/>
                    <TopLeft />
                </div>
                <BottomLeft/>
            </div>
       
    )
        
}
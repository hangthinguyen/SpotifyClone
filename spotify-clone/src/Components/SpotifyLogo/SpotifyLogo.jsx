import { FaSpotify } from "react-icons/fa";
import { FaRegRegistered } from "react-icons/fa";
import './SpotifyLogo.css';

export default function SpotifyLogo() {
    return (
        <a href="https://open.spotify.com/" className='logo'>
           <FaSpotify className='logo-image'/>
            <h1 className='logo-text'>Spotify</h1>
            <FaRegRegistered className="r-icon"/>
        </a>
    )
}
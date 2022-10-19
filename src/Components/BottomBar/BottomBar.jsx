import './BottomBar.css';

export default function BottomBar() {
    return (
        <div className='bottom-bar'>
            <a href="https://www.spotify.com/us/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F" className='left-bottom-bar'>    
                <span className='preview'>PREVIEW OF SPOTIFY</span>
                <p className='ads'>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
            </a>
            <button className='btn'> Sign up free</button>
        </div>
    )
}
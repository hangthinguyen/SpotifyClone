import './RightNavBar.css';

export default function RightNavBar() {
    return (
        <div className='right-navbar'>
            <a href="https://www.spotify.com/us/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade">Premium</a>
            <a href="https://support.spotify.com/us/">Support</a>
            <a href="https://www.spotify.com/us/download/mac/">Download</a>
            <div className='verticle-line'></div>
            <a href="https://www.spotify.com/us/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F">Sign up</a>
            <button className='login-btn'>Log in</button>
        </div>
    )
}
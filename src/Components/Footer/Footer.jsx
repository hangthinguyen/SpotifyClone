import './Footer.css';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='footer'>
            <section className='top-footer'>
                <div className='top-left'>
                    <div className='first-collumn'>
                        <span>Company</span>
                        <a href="https://www.spotify.com/us/about-us/contact/">About</a>
                        <a href="https://www.lifeatspotify.com/">Jobs</a>
                        <a href="https://newsroom.spotify.com/">For the Record</a>
                    </div>
                    <div className='second-collumn'>
                        <span>Communities</span>
                        <a href="https://artists.spotify.com/home">For Artists</a>
                        <a href="https://developer.spotify.com/">Developers</a>
                        <a href="https://ads.spotify.com/en-US/">Advertising</a>
                        <a href="https://investors.spotify.com/home/default.aspx">Investors</a>
                        <a href="https://spotifyforvendors.com/">Vendors</a>
                    </div>
                    <div className='third-collumn'>
                        <span>Useful Links</span>
                        <a href="https://support.spotify.com/us/">Support</a>
                        <a href="https://www.spotify.com/us/free/">Free Mobile App</a>
                        <a href="https://carthing.spotify.com/?utm_source=spotify&utm_medium=com">Car Thing</a>
                    </div>
                </div>
                <div className='top-right'>
                    <div className='footer-icon-container'><FaInstagram className='footer-icon'/></div>
                    <div className='footer-icon-container'><FaTwitter className='footer-icon'/></div>
                    <div className='footer-icon-container'><FaFacebook className='footer-icon'/></div>
                </div>
            </section>
            <hr />
            <section className='bottom-footer'>
                <div className='bottom-left'>
                    <a href="https://www.spotify.com/us/legal/end-user-agreement/">Legal</a>
                    <a href="https://www.spotify.com/us/privacy">Privacy Center</a>
                    <a href="https://www.spotify.com/us/legal/privacy-policy/">Privacy Policy</a>
                    <a href="https://www.spotify.com/us/legal/cookies-policy/">Cookies</a>
                    <a href="https://www.spotify.com/us/legal/privacy-policy/#s3">About Ads</a>
                    <a href="https://www.spotify.com/us/legal/California-privacy-disclosure/">Additional CA Privacy Disclosures</a>
                </div>
                <div className='bottom-right'>
                    <span>&copy; 2022 Spotify AB</span>
                </div>
            </section>
        </div>
    )
}
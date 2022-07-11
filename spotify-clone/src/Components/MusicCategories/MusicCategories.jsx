import Cards from '../Cards/Cards';
import './MusicCategories.css';

export default function MusicCategories({titleLink, title, seeAllLinks}) {
    return (
        <div className='music-categories'>
            <div>
                <a href={titleLink}>{title} hello</a>
                <a href={seeAllLinks}>See All</a>
            </div>
            <Cards/>
        </div>
    )
}
import Cards from '../Cards/Cards';
import './MusicCategories.css';

export default function MusicCategories({titles, seeAllLinks}) {
    return (
        <div>
            <div>
                <h2>{titles}</h2>
                <a href={seeAllLinks}>See All</a>
            </div>
            <Cards/>
        </div>
    )
}
import Cards from '../Cards/Cards';
import './MusicCategories.css';

export default function MusicCategories({title, seeAllLink}) {
    return (
        <div className='music-categories'>
            <div className='headline'>
                <a href={seeAllLink} className='title'><h2>{title}</h2></a>
                <a href={seeAllLink} className='see-all-link'><span>SEE ALL</span></a>
            </div>
            <Cards/>
        </div>
    )
}
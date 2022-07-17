import { useState } from 'react';
import MusicCategories from '../MusicCategories/MusicCategories';
import Footer from '../Footer/Footer';
import './ScrollingBody.css';

export default function ScrollingBody({ scrollingBodyWidth }) {
    const [categories, setCategories] = useState([
        {
            id: 1,
            title: 'The state of music today',
            seeAllLink: 'https://open.spotify.com/genre/programming-local-strategic-playlists'
        },
        {
            id: 2,
            title: 'Focus',
            seeAllLink: 'https://open.spotify.com/genre/focus-home-shelf'
        },
        {
            id: 3,
            title: 'Mood',
            seeAllLink: 'https://open.spotify.com/genre/mood-home-wrapper'
        },
        {
            id: 5,
            title: 'Popular new releases',
            seeAllLink: 'https://open.spotify.com/genre/NMF-PopularNewReleases'
        },
        {
            id: 6,
            title: 'Genre-bending blends',
            seeAllLink: 'https://open.spotify.com/genre/dense-ginger-featured-playlists-no-friday'
        },
        {
            id: 7,
            title: 'Soundtrack your home',
            seeAllLink: 'https://open.spotify.com/genre/at-home-playlists'
        }
    ])

    const CategoryList = categories.map((category) => <MusicCategories scrollingBodyWidth={scrollingBodyWidth} key={category.id} title={category.title} seeAllLink={category.seeAllLink}/>)
    return (
        <div className='scrolling-body'>
            {CategoryList}
            <Footer/>
        </div>
    )
}
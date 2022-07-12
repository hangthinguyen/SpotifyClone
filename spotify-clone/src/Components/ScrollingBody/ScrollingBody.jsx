import { useState } from 'react';
import MusicCategories from '../MusicCategories/MusicCategories';
import './ScrollingBody.css';

export default function ScrollingBody() {
    const [categories, setCategories] = useState([
        {
            id: 1,
            title: 'The state of music today',
            seeAllLink: 'https://open.spotify.com/genre/programming-local-strategic-playlists'
        },
        {
            id: 2,
            title: 'The state of music today',
            seeAllLink: 'https://open.spotify.com/genre/programming-local-strategic-playlists'
        },
        {
            id: 3,
            title: 'The state of music today',
            seeAllLink: 'https://open.spotify.com/genre/programming-local-strategic-playlists'
        },
        {
            id: 4,
            title: 'The state of music today',
            seeAllLink: 'https://open.spotify.com/genre/programming-local-strategic-playlists'
        },
        {
            id: 5,
            title: 'The state of music today',
            seeAllLink: 'https://open.spotify.com/genre/programming-local-strategic-playlists'
        },
        {
            id: 6,
            title: 'The state of music today',
            seeAllLink: 'https://open.spotify.com/genre/programming-local-strategic-playlists'
        },
        {
            id: 7,
            title: 'The state of music today',
            seeAllLink: 'https://open.spotify.com/genre/programming-local-strategic-playlists'
        }
    ])

    const CategoryList = categories.map((category) => <MusicCategories key={category.id} title={category.title} seeAllLink={category.seeAllLink}/>)
    return (
        <div className='scrolling-body'>
            {CategoryList}
        </div>
    )
}
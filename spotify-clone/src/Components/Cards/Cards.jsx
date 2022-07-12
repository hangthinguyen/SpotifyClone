import { useState } from 'react'
import Card from '../Card/Card'
import './Cards.css'

export default function Cards() {
    const [cards, setCard] = useState([
        {
            id: 1,
            categoryLink: 'https://open.spotify.com/playlist/37i9dQZF1DXcF6B6QPhFDv',
            image: 'https://i.scdn.co/image/ab67706f000000026f88dda5e416d45dfe7ef2b2',
            songStyle: 'Rock This',
            songDescription: 'The latest from Bring Me The Horizon along with the top Rock songs you need to know.'
        },
        {
            id: 2,
            categoryLink: 'https://open.spotify.com/playlist/37i9dQZF1DX0kbJZpiYdZl',
            image: 'https://i.scdn.co/image/ab67706f00000002a64aca2937d43bc2d1c20e86',
            songStyle: 'Hot Hits USA',
            songDescription: 'The hottest tracks in the United States. Cover: Doja Cat'
        },
        {   
            id: 3,
            image: 'https://i.scdn.co/image/ab67706f00000002cb5257cdcf74accc2f6d37ac',
            songStyle: 'Are & Be',
            songDescription: 'The pulse of R&B music today.  Cover: Brent Faiyaz'
        },
        {
            id: 4,
            image: 'https://i.scdn.co/image/ab67706f0000000200aab6df13c2acd9b9e64ced',
            songStyle: 'Alt NOW',
            songDescription: 'Metric along with the top Alternative songs of today.'
        },
        {
            id: 5,
            image: 'https://i.scdn.co/image/ab67706f00000002ad09e531ef8aab7c5ab55ec9',
            songStyle: 'Viva Latino',
            songDescription: `Today's top Latin hits, elevando nuestra música. Cover: Zion & Lennox, Maria Becerra`
        },
        {
            id: 6,
            image: 'https://i.scdn.co/image/ab67706f0000000200aab6df13c2acd9b9e64ced',
            songStyle: 'Alt NOW',
            songDescription: 'Metric along with the top Alternative songs of today.'
        }
    ])

    const cardsList = cards.map((card) => <Card key={card.id} image={card.image} songStyle={card.songStyle} songDescription={card.songDescription}/>)
    return (
        <div className='cards'>
            {cardsList}
        </div>
    )
}
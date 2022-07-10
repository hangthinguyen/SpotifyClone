import { useState } from 'react'
import Card from '../Card/Card'
import './Cards.css'

export default function Cards() {
    const [cards, setCard] = useState([
        {
            id: 1,
            image: 'https://i.scdn.co/image/ab67706f000000026f88dda5e416d45dfe7ef2b2',
            songStyle: 'Rock This',
            songDescription: 'The latest from Bring Me The Horizon along with the top Rock songs you need to know.'
        },
        {
            id: 2,
            image: 'https://i.scdn.co/image/ab67706f000000026f88dda5e416d45dfe7ef2b2',
            songStyle: 'Rock This',
            songDescription: 'The latest from Bring Me The Horizon along with the top Rock songs you need to know.'
        },
        {   
            id: 3,
            image: 'https://i.scdn.co/image/ab67706f000000026f88dda5e416d45dfe7ef2b2',
            songStyle: 'Rock This',
            songDescription: 'The latest from Bring Me The Horizon along with the top Rock songs you need to know.'
        },
        {
            id: 4,
            image: 'https://i.scdn.co/image/ab67706f000000026f88dda5e416d45dfe7ef2b2',
            songStyle: 'Rock This',
            songDescription: 'The latest from Bring Me The Horizon along with the top Rock songs you need to know.'
        }
    ])

    const cardsList = cards.map((card) => <Card key={card.id} image={card.image} songStyle={card.songStyle} songDescription={card.songDescription}/>)
    return (
        <div className='cards'>
            {cardsList}
        </div>
    )
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleCheck, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './BottomLeft.css';
import LeftBodyItem from '../LeftBodyItem/LeftBodyItem';
import { faPlusSquare, faRectangleList } from '@fortawesome/free-regular-svg-icons';

export default function BottomLeft () {
    const [items, setItem] = useState([
        {
            id: 1,
            link: 'https://open.spotify.com/',
            icon: <FontAwesomeIcon icon={faHouse}/>,
            name: 'Home'
        },
        {
            id: 2,
            link: 'https://open.spotify.com/search',
            icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
            name: 'Search'
        },
        {
            id: 3,
            link: 'https://open.spotify.com/collection/playlists',
            icon: <FontAwesomeIcon icon={faRectangleList}/>,
            name: 'Your Library'
        },
        {
            id: 4,
            link: 'https://open.spotify.com/playlist/7rcALTY1sCfelLkM8hhj4x',
            icon: <FontAwesomeIcon icon={faPlusSquare}/>,
            name: 'Create Playlist'
        },
        {
            id: 5,
            link: 'https://open.spotify.com/collection/tracks',
            icon: <FontAwesomeIcon icon={faHeartCircleCheck}/>,
            name: 'Liked Songs'
        }

    ]);

    const ListItems = items.map((item) => <LeftBodyItem key={item.id} link={item.link} icon={item.icon} name={item.name}></LeftBodyItem>)

    return (
        <div className='items'>
            <div>
                {ListItems}
            </div>
            <div className='left-footer'>
                <a href="https://www.spotify.com/us/legal/cookies-policy/" className='cookies'>Cookies</a>
                <a href="https://www.spotify.com/us/legal/privacy-policy/" className='privacy'>Privacy</a>
            </div>
        </div>
    )
}
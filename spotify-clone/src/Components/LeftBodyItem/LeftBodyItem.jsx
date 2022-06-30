import './LeftBodyItem.css';
import ItemName from '../ItemName/ItemName';

export default function LeftBodyItem({link, icon, name}) {
    return (
            <a href={link} className='item'>
                <p className='icon'>{icon}</p>
                <ItemName name={name}/>
            </a>
    )
}
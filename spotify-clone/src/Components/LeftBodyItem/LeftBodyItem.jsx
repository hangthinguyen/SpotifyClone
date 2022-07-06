import './LeftBodyItem.css';
import ItemName from '../ItemName/ItemName';

export default function LeftBodyItem({link, icon, name, itemId}) {
    return (
            <a href={link} 
                className='item'
                style={{ 
                    paddingBottom: itemId === 3 ? '30px' : '8px'
                }}
            >
                <p className='icon'>{icon}</p>
                <ItemName name={name} 
                />
            </a>
    )
}
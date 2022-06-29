import './LeftBodyItem.css';
import ItemName from '../ItemName/ItemName';

export default function LeftBodyItem(props) {
    return (
        <div>
            <a href={props.link} className='item'>
                <p className='icon'>{props.icon}</p>
                <ItemName name={props.name} className='name'/>
            </a>
        </div>
    )
}
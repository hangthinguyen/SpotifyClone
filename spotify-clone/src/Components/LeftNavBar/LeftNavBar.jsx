import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import './LeftNavBar.css';

export default function LeftNavBar() {
    return (
        <div>
            <FontAwesomeIcon icon={faCircleChevronLeft} className='fa-circle-left'/>
            <FontAwesomeIcon icon={faCircleChevronRight} className='fa-circle-right'/>
        </div>
    )
}
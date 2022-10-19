import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './LeftNavBar.css';

export default function LeftNavBar() {
    return (
        <div className='left-navbar'>
            <div className='left-arrow-container'>
                <FontAwesomeIcon icon={faChevronLeft} className='circle-left'/>
            </div>
            <div className='right-arrow-container'>
                <FontAwesomeIcon icon={faChevronRight} className='circle-right'/>
            </div>
        </div>
    )
}
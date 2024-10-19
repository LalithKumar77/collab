import "./user_card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function UserCard(props) {
    return (
        <div className="user_card">
            <div className="uc_top">
                <img alt={`Profile of ${props.name}`} src={props.im} />
            </div>
            <div className="uc_content">
                <h1>{props.name}</h1>
                <h3>{props.des}</h3>
                <button className="uc_button">View Profile</button> {/* New Button */}
            </div>
            <div className="uc_contact">
                <a href="https://www.instagram.com/dhanush_awesome7" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/dhanush-awesome" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
                {/* You can add more social links as needed */}
            </div>
        </div>
    );
}

export default UserCard;

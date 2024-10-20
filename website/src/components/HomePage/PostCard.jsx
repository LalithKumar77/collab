import "./PostCard.css";
import {FaThumbsUp, FaThumbsDown, FaComments} from 'react-icons/fa';

function PostCard(props) {
    return (
        <div className="hm_card">
            <div className="hm_post">
                <div className="hm_post-header">
                    <h1 className="hm_cardtitle">{props.titl}</h1>
                </div>
                <div className="hm_post-content">
                    <span className="card_text_content">{props.text}</span>
                </div>
                <div className="hm_user">
                    <div className="hm_author-image-container">
                        <img src={props.image} alt={`User ${props.name}`} className="hm_author-image"/>
                    </div>
                    <div className="hm_card_author-content">
                        <div className="hm_card_author-name">
                            <span className="card_text_content">{props.User_name}</span>
                        </div>
                        <div className="hm_card_userid">
                            <span className="card_text_content">@{props.User_id}</span>
                        </div>
                        <div className="hm_card_date">
                            <span className="card_text_content">{props.hm_post_date}</span>
                        </div>
                    </div>
                </div>
                <div className="hm_button-container">
                    <div className="hm_upvote-button">
                        <FaThumbsUp className="hm_icon"/>
                        <span className="card_text_content">Upvote</span>
                    </div>
                    <div className="hm_downvote-button">
                        <FaThumbsDown className="hm_icon"/>
                        <span className="card_text_content">Downvote</span>
                    </div>
                    <div className="hm_discuss-button">
                        <FaComments className="hm_icon"/>
                        <span className="card_text_content">Discuss</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;

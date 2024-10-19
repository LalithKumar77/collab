import "./user_card.css";
function UserCard(props){
    return(
        <div className="user_card">
            <div className="uc_top">
                <img alt="user" src={props.im}></img>
            </div>
            <div className="uc_content">
                <h1>{props.name}</h1>
                <h3>{props.des}</h3>
            </div>
        </div>
    );
}

export default UserCard;
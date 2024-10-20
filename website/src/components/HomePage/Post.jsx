import "./post.css"
function PostCard(props) {
  return (
    <div className="hm_card">
      <div className="hm_post">
        <div className="hm_post-content">
          <p className="hm_post-header">
            <h1 className="hm_cardtitle">{props.titl}</h1>
          </p>
          <p className="hm_post-text">
            {props.text}
           </p>
          <div className="hm_user">
            <img
              src={props.image}
               alt={`User ${props.name}`}
              className="hm_author-image"
            />
            <div className="hm_card_author-content">
              <p className="hm_card_author-name">{props.User_name}</p>
              <p className="hm_card_date">{props.hm_post_date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



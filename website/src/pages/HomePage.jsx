import PostCard from "../components/HomePage/PostCard";
import "../styles/HomePage.css";
function HomePage(){
    return (
        <div className="HomePage_front">
            <div className="hm_container1">
            </div>
            <div className="hm_container2" >
            <div className="mid_header"></div>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            </div>
            <div className="hm_container3" >
            </div>
        </div>
    );
}
export default HomePage;
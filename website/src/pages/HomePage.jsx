<<<<<<< HEAD
import "../styles/HomePage.css";

function HomePage(){
    return (
        <div ClassName="HomePage_front">
            <div ClassName="hm_container1">hi
=======
import PostCard from "../components/HomePage/PostCard";
import "../styles/HomePage.css";
function HomePage(){
    return (
        <div className="HomePage_front">
            <div className="hm_container1">
>>>>>>> 44b28389e81db4b7b796bc537d64294456ec4c60
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
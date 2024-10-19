import "../styles/LandingPage.css";
import { Link } from 'react-router-dom';
import video from "../assets/LandingPage/background_animation.mp4";
import UserCard from "../components/LandingPage/user_card";


function HomePage(){
    return(
        <div className="hp">
        <div className="hp_main">
            <div className="hp_head">
                <div className="hp_logo"><img alt="logo" src=""></img></div>
                <div className="hp_options">
                    <ul>
                    <Link to="/"><li>Home</li></Link>
                        <Link to="/contact-us"><li>Contact Us</li></Link>
                        <Link to="/login"><li>Register</li></Link>
                        <Link to="/register"><li>Login</li></Link>
                    </ul>
                </div>
            </div>
            <div className="hp_body">
                <video autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>
                <div className="hp_title">
                    <h1>Your Voice, Your Ideas, Their Innovation: A Platform for Raising Issues and Sharing Ideas</h1>
                    <h5>Connect with companies. Get your issues heard. Share ideas. Earn rewards.</h5>
                </div>
            </div>
        </div>
        <div className="hp_users">
            <h1>Our Users are Changing the Game</h1>
            <div className="hp_user_dash">
                <h1>Our Users are Changing the Game</h1>
                <div className="hp_cards">
                    <UserCard name="Lalith" des="Why are u gay" />
                    <UserCard name="Lalith" des="Why are u gay" />
                    <UserCard name="Lalith" des="Why are u gay" />
                </div>
            </div>
        </div>
        </div>
    );
}

export default HomePage;
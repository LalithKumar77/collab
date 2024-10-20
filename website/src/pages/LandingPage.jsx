import "../styles/LandingPage.css";
import { Link } from 'react-router-dom';
import video from "../assets/LandingPage/background_animation.mp4";
import UserCard from "../components/LandingPage/user_card";
import pic1 from "../assets/LandingPage/me1.jpg";

function HomePage() {
    return (
        <div className="lp">
            <div className="lp_main">
                <div className="lp_head">
                    <div className="lp_logo"><img alt="logo" src=""></img></div>
                    <div className="lp_options">
                        <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/contact-us"><li>Contact Us</li></Link>
                            <Link to="/login"><li>Login</li></Link>
                            <Link to="/register"><li>Register</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="lp_body">
                    <video autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className="lp_title">
                        <h1>Your Voice, Your Ideas, Their Innovation: A Platform for Raising Issues and Sharing Ideas</h1>
                        <h5>Connect with companies. Get your issues heard. Share ideas. Earn rewards.</h5>
                    </div>
                </div>
            </div>
            <div className="lp_users">
                <div className="lp_user_dash">
                    <h1>Our Users are Changing the Game</h1>
                    <div className="lp_cards">
                        <div className="lp_card_all">
                            <div className="lp_user_card">
                                <UserCard name="Dhanush" des="hii everyone" im={pic1} />
                            </div>
                            <div className="lp_user_card">
                                <UserCard name="Lalith" des="I raised an issue with a popular app, and within a week, they responded and fixed it!" />
                            </div>
                            <div className="lp_user_card">
                                <UserCard name="Lalith" des="I raised an issue with a popular app, and within a week, they responded and fixed it!" />
                            </div>
                            <div className="lp_user_card">
                                <UserCard name="Lalith" des="I raised an issue with a popular app, and within a week, they responded and fixed it!" />
                            </div>
                            <div className="lp_user_card">
                                <UserCard name="Lalith" des="I raised an issue with a popular app, and within a week, they responded and fixed it!" />
                            </div>
                            <div className="lp_user_card">
                                <UserCard name="Chandu" des="I submitted an idea, and it turned into a patent! A company even bid for it!" />
                            </div>
                            <div className="lp_user_card">
                                <UserCard name="Lalith" des="Why are u gay" />
                            </div>
                        </div>
                        <div className="lp_card_all">
                            <div className="lp_user_card">
                                <UserCard name="Dhanush" des="I raised an issue with a popular app, and within a week, they responded and fixed it!" im={pic1} />
                            </div>
                            <div className="lp_user_card">
                                <UserCard name="Lalith" des="I raised an issue with a popular app, and within a week, they responded and fixed it!" />
                            </div>
                            <div className="lp_user_card">
                                <UserCard name="Lalith" des="I raised an issue with a popular app, and within a week, they responded and fixed it!" />
                            </div>
                            <div className="lp_user_card">
                                <UserCard name="Lalith" des="I raised an issue with a popular app, and within a week, they responded and fixed it!" />
                            </div>
                            <div className="lp_user_card">
                                <UserCard name="Lalith" des="I raised an issue with a popular app, and within a week, they responded and fixed it!" />
                            </div>
                            <div className="lp_user_card">
                                <UserCard name="Chandu" des="I submitted an idea, and it turned into a patent! A company even bid for it!" />
                            </div>
                            <div className="lp_user_card">
                                <UserCard name="Lalith" des="Why are u gay" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;

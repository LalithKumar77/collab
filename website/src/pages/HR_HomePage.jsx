import "../styles/HR_Homepage.css"
import pic from "../assets/LandingPage/me1.jpg";
function HRHomepage(){
    return (
        <div className="hr_home">
            <div className="hr_h_left">
                <div className="logo">
                    <img src="" alt="Logo" />
                </div>
                <div className="hr_h_options">
                    <ul id="upper">
                        <li>Home</li>
                        <li>Search</li>
                        <li>Message</li>
                        <li>Idea Bidding</li>
                        <li>Notificaction</li>
                    </ul>
                    <ul id="lower">
                        <li>Account</li>
                        <li>Setting</li>
                    </ul>
                </div>     
            </div>
            <div className="hr_h_center">

            </div>
            <div className="hr_h_right">
                <div className="hr_h_profile">
                    <img alt="Profile pic" src={pic}></img>
                    <h1>Dhanush</h1>
                    <h4>@user_id</h4>
                    <h4>@company_name</h4>
                </div>
            </div>
        </div>
    );
}

export default HRHomepage;
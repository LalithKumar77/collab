import "../styles/HR_Homepage.css"
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
                    </ul>
                    <ul id="lower">
                        <li>Notificaction</li>
                        <li>Account</li>
                        <li>Setting</li>
                    </ul>
                </div>     
            </div>
            <div className="hr_h_center"></div>
            <div className="hr_h_right"></div>
        </div>
    );
}

export default HRHomepage;
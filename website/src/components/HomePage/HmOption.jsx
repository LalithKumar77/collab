import "./hm_option.css";

function HmOption(props) {
    return (
        <div className="option_box">
            <div className="op_icon">
                <span className="hmop">{props.icon}</span>
            </div>
            <div className="op_text">
                <span className="hmop">{props.op_name}</span>
            </div>
        </div>
    );
}

export default HmOption;

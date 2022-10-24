import "./Button.css";
export const Button = ({...props}) => {
    return (
        <button onClick={props.onClick} className={props.className}>
            {props.value}
            <div id="clip">
                <div id="leftTop" className="corner"></div>
                <div id="rightBottom" className="corner"></div>
                <div id="rightTop" className="corner"></div>
                <div id="leftBottom" className="corner"></div>
            </div>
            <span id="rightArrow" className="arrow"></span>
            <span id="leftArrow" className="arrow"></span>
        </button>
    )
}
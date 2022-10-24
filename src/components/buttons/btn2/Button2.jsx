import "./Button2.css";
export const Button2 = ({...props}) => {
    return (
        <button onClick={props.onClick} className={props.className}><span>{props.value}</span></button>
    )
}

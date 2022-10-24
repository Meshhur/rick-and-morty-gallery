import "./Input.css";

export const Input = ({...props}) => {
    return (
        <div className={props.className}>
            <input onChange={props.onChange} className="input" value={props.inpValue} required="required" type={props.type} />
            <span>{props.value}</span>
            <i></i>
        </div>
    )
}

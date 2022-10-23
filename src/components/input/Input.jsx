import "./Input.css";

export const Input = ({className ,value}) => {
    return (
        <div className={className}>
            <input required="required" type="text" />
            <span>{value}</span>
            <i></i>
        </div>
    )
}

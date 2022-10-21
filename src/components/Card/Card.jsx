import "./Card.css";

export const Card = (props) => {

    const { id, name, gender, image } = props

    return (
        <div className="character-card">
            <img className='character-card__image' src={image} alt="" />
            <div className='character-card__info'>
                <span className='character-card__row'>
                    <span>id: </span>
                    <span>{id}</span>
                </span>
                <span className='character-card__row'>
                    <span>name: </span>
                    <span>{name}</span>
                </span>
                <span className='character-card__row'>
                    <span>gender: </span>
                    <span>{gender}</span>
                </span>
            </div>
        </div>
    )
}
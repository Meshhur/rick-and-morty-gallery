import { useParams, useSearchParams } from 'react-router-dom';
import "./Card.css";

export const Card = (props) => {

    const params = useParams();
    const [searchParams] = useSearchParams();

    const { id, name, gender, image } = props
        
        return (
            <div className="character-card">
            <img className='character-card__image' src={ searchParams.get('image') || image} alt="" />
            <div className='character-card__info'>
                <span className='character-card__row'>
                    <span>id: </span>
                    <span>{ params.id || id}</span>
                </span>
                <span className='character-card__row'>
                    <span>name: </span>
                    <span>{ searchParams.get('name') || name}</span>
                </span>
                <span className='character-card__row'>
                    <span>gender: </span>
                    <span>{ searchParams.get('gender') || gender}</span>
                </span>
            </div>
        </div>
    )
}
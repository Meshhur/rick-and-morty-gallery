import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"


export const PersonPage = () => {
    const [searchParams] = useSearchParams();
    const [card, setCard] = useState(null)

    useEffect(() => {
        const jsonCard = searchParams.get('card')
        setCard(JSON.parse(jsonCard));
    }, []);
    
    console.log(card);
    return (
        <div>
            <h2>{card?.name}'s page</h2>
        </div>
    )
};


const Row = ({title, value}) => {
    return (
        <span className="row-wrap">
            <span className="row-title">{title}: </span>
            <span className="row-value">{value}</span>
        </span>
    );
};
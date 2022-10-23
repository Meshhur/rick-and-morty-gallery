import moment from "moment/moment";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./PersonPage.css";

export const PersonPage = () => {
    const [searchParams] = useSearchParams();
    const [card, setCard] = useState(null)

    useEffect(() => {
        const jsonCard = searchParams.get('card')
        setCard(JSON.parse(jsonCard));
    }, []);

    return (
        <div className="persons-page">
            <h2 className="persons-page-title">{card?.name}'s page</h2>
            <div className="person-card">
                <img className="person-photo" src={card?.image} alt="person's photo" />
                <div className="person-info">
                    <Row title="Name" value={card?.name} />
                    <Row title="id" value={card?.id} />
                    <Row title="created" value={moment(card?.created).format("DD.MM.YYYY | HH:MM")} />
                    <Row title="location" value={card?.location?.name} />
                    <Row title="status" value={card?.status} />
                    <Row title="species" value={card?.species} />
                    <Row title="origin" value={card?.origin?.name} />
                </div>
            </div>
            <Link className="move-back" to="/characters">
                <button data-text="Awesome" className="back-button">
                    <span className="actual-text">&nbsp;Back&nbsp;</span>
                    <span className="hover-text" aria-hidden="true">&nbsp;Back&nbsp;</span>
                </button>
            </Link>
        </div>
    )
};


const Row = ({ title, value }) => {
    return (
        <span className="row-wrap">
            <span className="row-title">{title}: </span>
            <span className="row-value">{value}</span>
        </span>
    );
};
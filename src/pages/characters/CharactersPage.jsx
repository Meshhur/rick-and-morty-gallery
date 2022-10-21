import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components/Card/Card";
import { Link } from "react-router-dom";
import "./CharactersPage.css";

const getCardLink = (id, name, gender, image) => (
    `/characters:${id}?name=${name}&gender=${gender}&image=${image}`
)

export const CharactersPage = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        axios({
            method: "get",
            url: `https://rickandmortyapi.com/api/character/?page=${currentPage}`
        }).then(res => setCharacters(res.data))
    }, [currentPage]);

    const getFirstPage = () => setCurrentPage(1);

    const getPrevPage = () => {if(currentPage !== 1) setCurrentPage(currentPage - 1)};

    const getNextPage = () => {if(currentPage !== characters?.info?.pages) setCurrentPage(currentPage + 1)};   

    const getLastPage = () => setCurrentPage(characters.info.pages);

    return (
        <div className="characters-page">
            <span className="characters-title">
                Characters page
            </span>
            <div className="characters-count">
                <span>Characters count: </span>
                <span>{characters?.info?.count}</span>
            </div>
            <div className="characters">
                {characters?.results?.map((card, index) => (
                    <Link to={getCardLink(card.id, card.name, card.gender, card.image)}>
                        <Card
                            id={card.id}
                            name={card.name}
                            gender={card.gender}
                            image={card.image} key={index} />
                    </Link>
                ))}
            </div>
            <div className="pagination">
                <h2 className="current-page">
                    {currentPage}
                </h2>
                <div className="buttons">
                    <button className="pag-btn" onClick={getFirstPage} disabled={characters ? false : true} >First page</button>
                    <button className="pag-btn" onClick={getPrevPage} disabled={characters ? false : true} >{'<'}</button>
                    <button className="pag-btn" onClick={getNextPage} disabled={characters ? false : true} >{'>'}</button>
                    <button className="pag-btn" onClick={getLastPage} disabled={characters ? false : true} >Last page</button>
                </div>
                <h2 className="pages-count">
                    {characters?.info?.pages}
                </h2>
            </div>
        </div>
    )
}
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../components/Card/Card";
import { Loader } from '../../components/loader/Loader';
import { Link, useNavigate } from "react-router-dom";
import { Button2 } from "../../components/buttons/btn2/Button2";
import "./CharactersPage.css";

const getCardLink = (card) => (
    `/characters:${card.id}?card=${JSON.stringify(card)}`
)

export const CharactersPage = () => {

    const [isLoading, setIsloading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1)
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        setIsloading(true)
        axios({
            method: "get",
            url: `https://rickandmortyapi.com/api/character/?page=${currentPage}`
        }).then(res => {
            setIsloading(false);
            setCharacters(res.data)
        })
    }, [currentPage]);

    const navigate = useNavigate()
    const goToHomePage = () => {navigate("/")}

    const getFirstPage = () => setCurrentPage(1);

    const getPrevPage = () => { if (currentPage !== 1) setCurrentPage(currentPage - 1) };

    const getNextPage = () => { if (currentPage !== characters?.info?.pages) setCurrentPage(currentPage + 1) };

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
            <Button2 className="btn2" value="Home" onClick={goToHomePage}/>
            <div className="characters">
                {isLoading ? (
                    <Loader />
                ) : characters?.results?.map((card, index) => (
                    <Link to={getCardLink(card)}>
                        <Card
                            key={index}
                            id={card.id}
                            name={card.name}
                            gender={card.gender}
                            image={card.image}
                        />
                    </Link>
                ))}
            </div>
            <div className="pagination">
                <h2 className="current-page">
                    Current page: {currentPage}
                </h2>
                <div className="buttons">
                    <button className="pag-btn" onClick={getFirstPage} disabled={characters ? false : true} >First page</button>
                    <button className="pag-btn" onClick={getPrevPage} disabled={characters ? false : true} >{'<'}</button>
                    <button className="pag-btn" onClick={getNextPage} disabled={characters ? false : true} >{'>'}</button>
                    <button className="pag-btn" onClick={getLastPage} disabled={characters ? false : true} >Last page</button>
                </div>
                <h2 className="pages-count">
                    Pages: {characters?.info?.pages}
                </h2>
            </div>
        </div>
    )
}
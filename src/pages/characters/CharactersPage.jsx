import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

import { Card } from '../../components/Card/Card';

import './CharactersPage.css';

const getCharacterLink = (id, name, gender, image) => {
	return `/characters:${id}?name=${name}&gender=${gender}&image=${image}`;
};

export const CharactersPage = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios({
			method: 'GET',
			url: 'https://rickandmortyapi.com/api/character',
		}).then((res) => setCharacters(res.data));
	}, []);

	return (
		<div>
			<div>
				<span>Characters count: </span>
				<span>{characters?.info?.count}</span>
			</div>
			<div className='characters-wrapper'>
				{characters.results &&
					characters.results.map((character, index) => (
						<Link
							to={getCharacterLink(
								character.id,
								character.name,
								character.gender,
								character.image
							)}
						>
							<Card
								key={index}
								id={character.id}
								name={character.name}
								gender={character.gender}
								image={character.image}
							/>
						</Link>
					))}
			</div>
		</div>
	);
};

import { useEffect, useState } from 'react';
import { useSearchParams, useParams  } from 'react-router-dom';
import axios from 'axios';

import './Card.css';

export const Card = (props) => {
	const [searchParams] = useSearchParams();
	const params = useParams();
console.log(searchParams.get('name'));
	const { id, name, gender, image } = props;
	
	return (
		<div className='character-card'>
			<img src={searchParams.get('image') || image} alt='' className='character-card__image' />
			<div className='character-card__info'>
				<span className='character-card__row'>
					<span>id: </span>
					<span className='character-card__data'>{params.id || id}</span>
				</span>

				<span className='character-card__row'>
					<span>Name: </span>
					<span className='character-card__data'>{searchParams.get('name') || name}</span>
				</span>

				<span className='character-card__row'>
					<span>Gender: </span>
					<span className='character-card__data'>{searchParams.get('gender') || gender}</span>
				</span>
			</div>
		</div>
	);
};

// const [data, setData] = useState([]);
// useEffect(() => {
// 	axios({
// 		method: 'GET',
// 		url: 'https://rickandmortyapi.com/api/character/48',
// 	}).then((res) => {
// 		setData(res.data);
// 	});
// }, []);

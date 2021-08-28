import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import './CharacterCard.css';

const handleClick = (row,col) => {
    console.log('DATA', row,col);
}
export const CharacterCard = ({row,col}) => {
    const storeCharacters = useSelector(state => state.characters);
    const {
        birth_year,
        name,
        films,
    } = storeCharacters[row][col];

    return (
        <div className='character_card'>
            <h2><Link to="/details" onClick={()=>handleClick(row,col)}>{name}</Link></h2>
            <div className='character_card-footer'>
                <p>{`${films.length} films`}</p>
                <p>{`Birth Year: ${birth_year}`}</p>
            </div>
        </div>
    )
}

export default CharacterCard;

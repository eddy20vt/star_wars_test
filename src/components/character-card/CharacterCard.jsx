import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import './CharacterCard.css';

const handleClick = (row,col,dispatch) => {
    console.log('DATA', row,col);
    dispatch({type:'setCharacter', payload:{row,col}});
}
export const CharacterCard = ({row,col,apiId}) => {
    const storeCharacters = useSelector(state => state.characters);
    const dispatch = useDispatch();

    const {
        birth_year,
        name,
        films,
    } = storeCharacters[row][col];

    return (
        <div className='character_card'>
            <h2><Link to={`/details/${apiId}`} onClick={()=>handleClick(row,col,dispatch)}>{name}</Link></h2>
            <div className='character_card-footer'>
                <p>{`${films.length} films`}</p>
                <p>{`Birth Year: ${birth_year}`}</p>
            </div>
        </div>
    )
}

export default CharacterCard;

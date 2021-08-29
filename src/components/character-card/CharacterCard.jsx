import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import './CharacterCard.css';

export const CharacterCard = ({id}) => {
    const storeCharacters = useSelector(state => state.characters);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({type:'setCharacter', payload: id});
        dispatch({type: 'setReloadPage', payload: false})
    }

    const {
        birth_year,
        name,
        films,
    } = storeCharacters[id-1];

    return (
        <div className='character_card'>
            <h2><Link to={`/details/${id}`} onClick={()=>handleClick()}>{name}</Link></h2>
            <div className='character_card-footer'>
                <p>{`${films.length} films`}</p>
                <p>{`Birth Year: ${birth_year}`}</p>
            </div>
        </div>
    )
}

export default CharacterCard;

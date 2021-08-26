import React from 'react'
import { Link } from "react-router-dom";

import './CharacterCard.css';

export const Card = ({name,films,birthyear}) => {
    return (
        <div className='character_card'>
            <h2><Link to="/details">{name}</Link></h2>
            <div className='character_card-footer'>
                <p>{`${films} films`}</p>
                <p>{`Birth Year: ${birthyear}`}</p>
            </div>
        </div>
    )
}

export default Card;

import React from 'react'
import './CharacterCard.css';

export const Card = ({name,films,birthyear}) => {
    return (
        <div className='character_card'>
            <p><a href='#'><h2>{name}</h2></a></p>
            <div className='character_card-footer'>
                <p>{`${films} films`}</p>
                <p>{`Birth Year: ${birthyear}`}</p>
            </div>
        </div>
    )
}

export default Card;

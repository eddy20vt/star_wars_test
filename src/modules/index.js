import { combineReducers } from 'redux';
import characters from './characters';
import pageCounter from './page-counter';
import selectedCharacter from './selected-character';


export default combineReducers({
    characters,
    pageCounter,
    selectedCharacter,
});
import { combineReducers } from 'redux';
import characters from './characters';
import currentPage from './page-counter';
import selectedCharacter from './selected-character';
import reloadPage from './reload-page';
import pagesLoaded from './pages-loaded';

export default combineReducers({
    characters,
    currentPage,
    selectedCharacter,
    reloadPage,
    pagesLoaded,
});
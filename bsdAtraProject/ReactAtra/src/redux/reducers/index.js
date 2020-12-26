import { combineReducers } from 'redux';
import CategoryReducer from './category.reducer';
import CardReducer from './card.reducer';




export default combineReducers({
    category: CategoryReducer,
    cards:CardReducer
    
})
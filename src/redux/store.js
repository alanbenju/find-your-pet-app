import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import mapReducer from './reducers/mapReducer'

const reducer = combineReducers ({ mapReducer })

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store
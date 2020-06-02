import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { surveyListReducer, assignedReducer } from './reducers/surveyReducer';
import thunk from 'redux-thunk'
import { employeeListReducer, selectEmployeeReducer } from './reducers/employeeReducer';
const initialState = {};
const reducer = combineReducers({
    surveyList: surveyListReducer,
    employeeList: employeeListReducer,
    assignedList: assignedReducer,
    selectEmployee: selectEmployeeReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState,composeEnhancer(applyMiddleware(thunk)))
export default store;
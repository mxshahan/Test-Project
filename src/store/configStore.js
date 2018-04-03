import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import authReducer from '../reducers/auth';
import courseReducer from '../reducers/course';
import thunk from 'redux-thunk';
// import { sessionReducer, sessionService } from 'redux-react-session';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    //STORE_CREATION
    const store = createStore(
        combineReducers({
            auth: authReducer,
            courses: courseReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
    );
    // sessionService.initSessionService(store)
    return store;
}

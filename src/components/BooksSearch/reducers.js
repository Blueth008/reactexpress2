import {combineReducers} from 'redux';


const defaults = {
    TOPIC:          'javascript',
    DISPLAY_MODE:   "THUMBNAIL",
    STATUS:         "Starting the application"
};

const topicReducers = (state=defaults.TOPIC,action)=>{
    switch (action.type){
        case "SET_TOPIC":
            return action.topic;
        default:
            return state
    }
};

const displayModeReducer =(state=defaults.DISPLAY_MODE,action)=>{
    switch (action.type){
        case "SET_DISPLAY_MODE":
            return action.displayMode;
        default:
            return state
    }
};

const fetchReducers=(state=[],action)=>{
    switch (action.type){
        case "FETCH_START":
            return [];
        case "FETCH_FAILED":
            alert('Failed fetch');
            return [];
        case "FETCH_COMPLETED":
            return action.json.items;
        default:
            return state;
    }
};

const statusReducers=(state=defaults.STATUS,action)=>{
    switch (action.type){
        case "FETCH_START":
            return 'Fetching...';
        case "FETCH_COMPLETED":
            return 'Fetch completed';
        case 'FETCH_FAILED':
            return "Fetch failed "+action.error;
        case 'SET_TOPIC':
            return 'Set Topic to '+action.topic;
        case "SET_DISPLAY_MODE":
            return "Set display mode to "+ action.displayMode;
        default:
            return state;
    }
};

export const reducersBooks=combineReducers({
    topic:          topicReducers,
    displayMode:    displayModeReducer,
    books:          fetchReducers,
    currentStatus:  statusReducers
});









import {combineReducers} from 'redux';
import {RECEIVE_POSTS, REQUEST_POSTS, SELECT_SUBREDDIT} from "./action";


function selectSubreddit(state='reactjs',action) {
    switch (action.type){
        case SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
}

function  postBySubreddits(state = {},action) {
    switch (action.type){
        case REQUEST_POSTS:
        case "REQUEST_FAIL":
        case RECEIVE_POSTS:
            return Object.assign({},state,{
                [action.subreddit]:post(state[action.subreddit],action)
            });

        default:
            return state;
    }
}


function post(state={},action) {
    switch (action.type){
        case RECEIVE_POSTS:
            return Object.assign({},state,{lastUpdate:action.receivedAt,items:action.posts}) ;
        case REQUEST_POSTS:
        case "REQUEST_FAIL":
        default:
            return state;
    }
}

function status(state="Fetching...",action) {
    switch (action.type){
        case RECEIVE_POSTS:
            return "Fetch completed";
        case REQUEST_POSTS:
        case "REQUEST_FAIL":
        default:
            return "Fetching..."
    }

}


export const ReducersAsnyc = combineReducers({
    selectedSubreddit:  selectSubreddit,
    postsBySubreddit:   postBySubreddits, //数组
    currentStatus:      status
});


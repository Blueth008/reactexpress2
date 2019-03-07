
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';


export  function selectSubreddit(subreddit) {
    return{
        type:"SELECT_SUBREDDIT",
        subreddit
    }
}


export const fetchBegin=()=>({
    type:REQUEST_POSTS
});



export const receivePosts=(subreddit,json)=>{
    return{
        type:RECEIVE_POSTS,
        subreddit,
        receivedAt:(new Date()).toLocaleString(),
        posts:json.data.children.map(child => child.data)  //数组
    }
};

export const fetchFail=()=>({
    type:"REQUEST_FAIL",
});

function fetchPost(dispatch,state) {
    dispatch(fetchBegin());
    fetch(`https://www.reddit.com/r/${state.selectedSubreddit}.json`)
        .then(res=>res.json())
        .then(json=>{
            dispatch(receivePosts(state.selectedSubreddit,json));
            console.log(json)
        })
        .catch(err=>{
        console.log(err)
    })
}

export  const shouldFetchPost=()=>({
    type:"FETCH_DATAS",
    fn:fetchPost
});

//
// function fetchPosts(subreddit) {
//     return dispatch => {
//         dispatch(requestPosts(subreddit))
//         return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//             .then(response => response.json())
//             .then(json => dispatch(receivePosts(subreddit, json)))
//     }
// }
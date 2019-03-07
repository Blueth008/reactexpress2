
const url = 'https://www.googleapis.com/books/v1/volumes/?q=';

export const setTopic=topic=>{
    return{
        type:"SET_TOPIC",
        topic
    }
};

export const setDisplayMode=displayMode=>{
    return {
        type:'SET_DISPLAY_MODE',
        displayMode
    }
};

const fetchStart=()=>({
    type:"FETCH_BEGIN"
});

const fetchCompleted=(json)=>({
    type:"FETCH_COMPLETED",
    json
});
const fetchFailed = error=>({
    type:"FETCH_FAILED",
    error
});


const fetchCurrentTopic=(dispatch,state)=>{
    dispatch(fetchStart());

    fetch(url+state.topic)
        .then(res=>res.json())
        .then(json=>{
            if(json.error)
                dispatch(fetchFailed(json.error));
            else
                dispatch(fetchCompleted(json));
            console.log(json);
        })
        .catch(err=>{
            dispatch(fetchFailed(err.error));
        });
};

export const fetchBooks=()=>{
    return{
        type:"BEGIN_FETCH",
        fn:fetchCurrentTopic    //中间件函数调用
    }
};
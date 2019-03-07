import {CATION, GO, STOP} from "./actions";
import {combineReducers} from 'redux'
// const  state={
//     state:"GO"
// };


function ChangeLights(state=GO,action) {
    switch (action.type){
        case "GO":
            return GO;
        case "CATION":
            return  CATION;
        case "STOP":
            return STOP;
        default:
            return state;
    }
}


const Changes=combineReducers({
    state:ChangeLights
});

export default  Changes;


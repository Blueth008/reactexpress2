import React from 'react';
import {combineReducers, createStore} from 'redux'
import {connect} from 'react-redux';
import {CATION, GO, STOP} from "./actions";
//action
//const GO = "GO", STOP = 'STOP', CATION ="CATION";

const status=[
    {
        status:GO,
        color:'green'
    },
    {
        status:STOP,
        color:'red'
    },
    {
        status:CATION,
        color:'yellow'
    }
];


function lightGO() {
    return{
        type:GO

    }

}

const lightStop=()=>({
    type:STOP
});

const lightCation=()=>({
    type:CATION
});

//components
const CircleTempleted=({light,nowState,cy})=>{
    return(

        <circle cx={'145px'}  cy={cy} r={'15px'}
                fill={light.status===nowState?light.color:"white"}
                stroke={'black'}

        />
    )
};
const Lights=({state})=>{ // status=[{status:,color:}]

  //  console.log(state);
    const cy=['60px','100px','140px'];
    var lights;
    lights = state.status.map((light,index)=>{
       return <CircleTempleted light={light} cy={cy[index]} key={index} nowState={state.nowState} />
    });

    return(
        <div style={{textAlign:"center"}}>
            <svg height={"200px"}>
                {  lights}
            </svg>

        </div>
    )
};




const Buttons=({state,onClick})=>{
    console.log(state.nowState===STOP);
    return(
        <div style={{textAlign:"center"}}>
            <button disabled={state.nowState===CATION}
                onClick={()=>onClick(lightCation()) }
            >
                CATION
            </button>
            <button disabled={state.nowState===STOP}
                    onClick={()=>onClick(lightStop()) }
            >
                STOP
            </button>
            <button disabled={state.nowState===GO}
                    onClick={()=>onClick(lightGO()) }
            >
                GO
            </button>
        </div>
    )
};

//containers

const mapStateToProps = state =>({
    state
});
const mapDispatchToProps = dispatch =>({
    onClick:(va)=>{console.log(va);dispatch(va)}
});

const LightContainer=connect(mapStateToProps,null)(Lights);
const ButtonContainer=connect(mapStateToProps,mapDispatchToProps)(Buttons);

export const CombineLights=()=>{
    return(
        <div>
            <LightContainer/>
            <ButtonContainer/>
        </div>
    )
};


//reducers
function ReducersLight(state=GO,action){
    switch (action.type){
        case "GO":
        case "STOP":
        case "CATION":
            return action.type ;
        default:
            return state;
    }
}

const LightsReduces=combineReducers({
    nowState:ReducersLight,
    status:()=>status    //必须是函数获取
});

export const store2 = createStore(LightsReduces);





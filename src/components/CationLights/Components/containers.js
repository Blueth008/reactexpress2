import React from 'react';
import {connect} from 'react-redux';
import {Buttons, StopLights} from "./staticIndex";
import {LightsCation, LightsGo, LightsStop} from "./actions";


const mapStateToProps=(state) =>{
    return {state}
};

const mapDispatchToProps =(dispatch,ownProps)=>(
    {
        onClick:()=>{dispatch(ownProps.filter)}
    }
);

export const LightsContaier=connect(mapStateToProps)(StopLights);

 const ButtonContaier=connect(mapStateToProps,mapDispatchToProps)(Buttons); //如果没有 state 填 null  ;
//可以通过  容器的属性传递到组件中
export const ButtonContaiers=()=>{
    return(
        <div style={{textAlign:"center"}}>

            <ButtonContaier filter={LightsCation()}  active={{"go1":"STOP","go2":"CATION"}}>CATION</ButtonContaier>
            <ButtonContaier filter={LightsStop()}  active={{"go1":"STOP","go2":"GO"}}>STOP</ButtonContaier>
            <ButtonContaier filter={LightsGo()}  active={{"go1":"GO","go2":"CATION"}}>GO</ButtonContaier>
        </div>
    )
};









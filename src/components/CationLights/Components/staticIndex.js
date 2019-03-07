import React from 'react';

class CationsLight extends React.Component{


    handleChange=(value)=>{
        console.log(value)
        // switch (value){
        //     case "GO":
        //     case "CATION":
        //     case "STOP":
        //     default:
        // }
    };

    render(){
        return(
            <div>
                <StopLights />
                <Buttons ChangeLight={this.handleChange}/>
            </div>
        )
    }

}

export const StopLights=({state})=>{
    console.log(state);
    return(
        <div style={{textAlign: 'center'}}>
            <svg height={"200px"}>
                <circle
                    cx={'145px'}  cy={'140px'} r={'15px'}
                    fill={state.state==="STOP"?'red':"white"}
                    stroke={'black'}
               />
                <circle
                    cx={'145px'}  cy={'100px'} r={'15px'}
                    fill={state.state==="CATION"?'yellow':"white"}
                    stroke={'black'}
               />
                <circle
                cx={'145px'}  cy={'60px'} r={'15px'}
                fill={state.state==="GO"?'green':"white"}
                stroke={'black'}
            />
            </svg>
        </div>)
};

export const Buttons=({state,onClick,children,active})=>
            <button onClick={onClick}  disabled={state.state===active.go1||state.state===active.go2}>
                {children}
            </button>;






export  default CationsLight;
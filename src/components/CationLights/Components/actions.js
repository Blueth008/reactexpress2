

export const GO="GO";
export const CATION="CATION";
export const STOP ="STOP";

export function LightsGo() {
    return{
        type:"GO"

    }
}

export function LightsCation() {
    return{
        type:"CATION"

    }
}

export function LightsStop(color) {
    return{
        type:"STOP"

    }
}
import { ActionTypes } from "../constantdata/Action_type"
export const Setprocedures = (data) =>{
    return{
        type:ActionTypes.SET_PROCEDURES,
payload:data,
    };
}

export const Selectedprocedures = (data) =>{
    return{
        type:ActionTypes.SELECTED_PROCEDURES,
payload:data,
    };
}

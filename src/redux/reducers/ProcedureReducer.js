import { ActionTypes } from "../constantdata/Action_type";

const initialState={
    data:[]
}
export const procedureReducer =(state = initialState,{type,payload})=>
{
switch(type)
{
case ActionTypes.SET_PROCEDURES:
    return {...state,data: payload};
       default:
        return state;
}
};

export const selectedprocedureReducer = (state={},{type,payload})=>
{
switch(type)
{
case ActionTypes.SELECTED_PROCEDURES:
    return {...state,...payload};
    default:
        return state;
}
}
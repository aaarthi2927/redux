import { ActionTypes } from "../constantdata/Action_type";

const initialState={
    users:[]
}
export const userReducer =(state = initialState,{type,payload})=>
{
switch(type)
{
case ActionTypes.SET_USERS:
    return {...state,users: payload};
       default:
        return state;
}
};

export const selecteduserReducer = (state={},{type,payload})=>
{
switch(type)
{
case ActionTypes.SELECTED_USERS:
    return {...state,...payload};
    default:
        return state;
}
}
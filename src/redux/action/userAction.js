import { ActionTypes } from "../constantdata/Action_type"
export const Setusers = (users) =>{
    return{
        type:ActionTypes.SET_USERS,
payload:users,
    };
}
export const Selectedusers = (user) =>{
    return{
        type:ActionTypes.SELECTED_USERS,
payload:user,
    };
}

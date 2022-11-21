import { combineReducers } from "redux";
import {procedureReducer,selectedprocedureReducer} from "./ProcedureReducer";
const reducers = combineReducers({
alldata:procedureReducer,
data:selectedprocedureReducer,
})
export default reducers;
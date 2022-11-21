import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';
import API from "../API";
import { Selectedprocedures} from "../redux/action/ProcedureAction";
function UserDetail(){
    const{id}=useParams();
console.log(id)
const Navigate = useNavigate();
const data =useSelector((state)=>state.data)
const {ProcedureName,labtype,year,semester
    ,university,institute}=data;
const dispatch=useDispatch();
console.log(data);
const fetchdatadetails=async()=>{
const res=await axios(`${API}/moreInfo/${id}`,{method:"GET"})
    .catch((err)=>{console.log(err)});
   dispatch(Selectedprocedures(res.data)); 
   //console.log(res.data);
     }
useEffect(()=>{
  fetchdatadetails();
},[])
    return(
        <div >
       <h2>Separate procedure detail </h2>
           <h2>Procedure Name :{ProcedureName}</h2>
           <h2>Department Name :{labtype}</h2>
           <h2>Year :{year}</h2>
           <h2>Semster :{semester}</h2>
           <h2>University Name :{university}</h2>
           <h2>Institute Name :{institute}</h2>
            <button onClick={()=>Navigate(`/home`)}>back</button>
        </div>
        
    )
}
export default UserDetail;
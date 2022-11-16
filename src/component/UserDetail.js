import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';
import API from "../API";
import { Selectedusers} from "../redux/action/userAction";
function UserDetail(){
    const{id}=useParams();
console.log(id)
const Navigate = useNavigate();
const user =useSelector((state)=>state.user)
const {username,year,semster,college,universty,state,country}=user;
const dispatch=useDispatch();
console.log(user);
const fetchdatadetails=async()=>{
const res=await axios(`${API}/${id}`,{method:"GET"})
    .catch((err)=>{console.log(err)});
    dispatch(Selectedusers(res.data)); 
     }
useEffect(()=>{
if(id && id !=="")  fetchdatadetails();
},[id])

    return(
        <div>
            <table>
                <tr>
                <th>username</th>
            <th>year</th>
            <th>semster</th>
            <th>college</th>
            <th>universty</th>
            <th>state</th>
            <th>country</th>
            </tr>  
            <tr>
            <td>{username}</td>
            <td>{year}</td>
            <td>{semster}</td>
            <td>{college}</td>
            <td>{universty}</td>
            <td>{state}</td>
            <td>{country}</td></tr></table>
            <button onClick={()=>Navigate(`/`)}>back</button>
        </div>
        
    )
}
export default UserDetail;
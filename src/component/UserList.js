import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import API from '../API';
import { Setusers } from '../redux/action/userAction';
import Useritem from './Useritem';
const UserList =()=>{
    const users=useSelector((state)=>state);
    const dispatch=useDispatch();
    console.log(users);
 const fetchdata=async()=>{
     const res=await axios(`${API}/`,{method:"GET"})
        .catch((err)=>{console.log(err)});
        //console.log(res.data);
        dispatch(Setusers(res.data));      
    }
     useEffect(()=>{
                fetchdata();
            },[])
            console.log("user:",users);
            
    return(
        <div>
           <Useritem/>
        </div>
    )
}
export default UserList;
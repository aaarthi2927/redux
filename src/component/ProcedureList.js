import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import API from '../API';
import { Setprocedures } from '../redux/action/ProcedureAction';
import Procedureitem from './Procedureitem';
const ProcedureList =()=>{
    const procedures=useSelector((state)=>state);
    const dispatch=useDispatch();
    console.log(procedures);
    const fetchdata=async()=>{
    const res=await axios(`${API}/moreInfo`,{method:"GET"})
         .catch((err)=>{console.log(err)});
     dispatch(Setprocedures(res.data.data)); 
      }
     useEffect(()=>{
                fetchdata();
            },[])
              return(
        <div>
       <Procedureitem/>
                   </div>
    )
}
export default ProcedureList;
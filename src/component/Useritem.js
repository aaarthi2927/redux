import React from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
function Useritem(){
    const users=useSelector((state)=>state.allusers.users);
    const Navigate = useNavigate();
        const renderlist=users.map((user)=>{
        const {id,username,year,semster,college,universty,state,country}=user;
               return(
                <table>
                <tr key={id}>
             <td onClick={()=>Navigate(`/home/${id}`)}>{username}</td>
            <td>{year}</td>
            <td>{semster}</td>
            <td>{college}</td>
            <td>{universty}</td>
            <td>{state}</td>
            <td>{country}</td>
            </tr>
            </table>
        );
    })
   return(
        <div>
            <h1>{renderlist}</h1>
            
        </div>
    )
}
export default Useritem;
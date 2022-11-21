import React from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
function Procedureitem(){
    const procedures=useSelector((state)=>state.alldata.data);
    const Navigate = useNavigate();
        const renderlist= procedures.map((data)=>{
  const {id,ProcedureName,labtype,
            year,semester,university,institute}=data;
               return(
      <tr key={id} >
             <td onClick={()=>Navigate(`/home/${id}`)}>{ProcedureName}</td>
            <td>{labtype}</td>
            <td className="text-red-600">{year}</td>
            <td>{semester}</td>
            <td>{university}</td>
            <td>{institute}</td>
                      </tr>
                  );
    })
   return(
        <div>
                         <table >
             <thead>
              <tr >
              <th>Procedurename </th>
               <th >Department
                </th>
                    <th>Year </th>
                    <th>Semster </th>
                    <th>University Name</th>
                    <th>Institute Name </th>
                  </tr>
                </thead>
                <tbody>
                {renderlist}
                </tbody>
              </table> 
          
        </div>
    )
}
export default Procedureitem;

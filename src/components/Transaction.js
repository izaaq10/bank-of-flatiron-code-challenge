import React,{useState, useEffect} from "react";

function Transaction() {
  const [Transact, setTransaction]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8001/transactions",{
      method: "GET",
    })
    .then((res)=> res.json())
    .then((data)=> setTransaction(data))
    .catch((error)=>console.error(error))
    
  },[])



    return (
      <>
        {Transact.map((data, id) => (
          <tr key={id}>
            <td>{data.date}</td>
            <td>{data.description}</td>
            <td>{data.category}</td>
            <td>{data.amount}</td>
          </tr>
        ))}
      </>
    );
  }   

export default Transaction;

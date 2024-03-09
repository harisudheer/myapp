import React, { useState } from 'react'
import './App14.css';
export default function () {
    const [access,setAccess] =useState({access:"",status:""});
    const a = () => {
        let name=document.getElementById("id1").value;
        let pass=document.getElementById("id2").value;
        console.log(name);
        console.log(pass);
        if (name=="Hari" && pass=="hari1234") {
            setAccess({access:"Access Granted",status:"Success"})
        } else {
            setAccess({access:"Access Denied",status:"Failed"})
        }
    };
  return (
    <>
       <h2>Login form</h2>
        <input type='text' id='id1' placeholder='Enter Name' required ></input><br /><br />
        <input type='password' id='id2'placeholder='Enter Password'></input><br /><br />
        <input type='button' onClick={a} value='Add'></input>
        <p className={access.status} >{access.access}</p>
    </>
  )
}
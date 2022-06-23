import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import JSONDATA from './MOCK_DATA.json'

const Details =() =>
{
  const { id } =useParams();
  

  return <div className="detailsmain">
   <img src="http://localhost:3000/logo.png" id="createlogo"></img>
   <div className="challenge1">
    <div className="Detailstart">
    <img src="http://localhost:3000/Group.png"></img>&nbsp;
      Starts on &nbsp;
     {
      JSONDATA.map((val,key)=>{
        if(val.id == id)
        {
          return <div className="date1">{val.Start_Date}</div>
        }
      })
     }
     &nbsp; 09:00 PM (India Standard Time)
       </div>  
       <div className="detailname">
       {
      JSONDATA.map((val,key)=>{
        if(val.id == id)
        {
          return <div className="date1">{val.Challenge_name}</div>
        }
      })
     }
        </div>   
        <div className="detaildesc">
        {
      JSONDATA.map((val,key)=>{
        if(val.id == id)
        {
          return <div className="date1">{val.Description}</div>
        }
      })
     }
        </div>
        <div className="detaillevel">
          <img src="http://localhost:3000/carbon_skill-level-basic.png"></img>&nbsp;
        {
      JSONDATA.map((val,key)=>{
        if(val.id == id)
        {
          return <div className="date1">{val.Level}</div>
        }
      })
     }
        </div>
     
        </div>
        <table className="OverView">
          <tr><td>
          <p className="overview1">Overview</p></td><td><td></td></td><td class="edit1">
          <div>
          {
      JSONDATA.map((val,key)=>{
        
     if(val.id== id){ return <Link to={`/edit/${val.id}`}>
            <button id="editbtn">Edit</button></Link>  }})
     }&nbsp;
            <button id="delete">Delete</button>
          </div>
          </td></tr>
        </table>
        <div class="overviewdesc">
        Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.

An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.

Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.

        </div>
  
  </div>
}
export default Details;
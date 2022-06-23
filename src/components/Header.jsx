import React from "react";
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import JSONDATA from './MOCK_DATA.json'
import Select from "react-select";
import { useTime } from "react-timer-hook";
import { useRef } from "react";
import { Checkbox } from "@material-ui/core";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

const Header = () => {
 const[searchTerm,setSearchTerm]=useState('');
 var date = new Date();
 var dd = String(date.getDate()).padStart(2, '0');
 var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
 var yyyy = date.getFullYear();
 
 date = dd + '/' + mm + '/' + yyyy;
var start=JSONDATA.map((val)=>{
  return <div>{val.Start_Date}</div>
})

const[timerdays,setTimerDays] = useState("4");
const[timerHours,setTimerHours] = useState("4");
const[timerMinutes,setTimerMinutes] = useState("4");
const[label,setLabel] = useState();
let interval = useRef();
const startTimer = () => {
  const countdownDate = new Date('july 30 2022 00:00:00').getTime();
  interval = setInterval(()=>
  {
    const now= new Date().getTime();
    const distance = countdownDate -now;

    const days=Math.floor(distance / (1000 * 60 * 60 *24));
    const hours=Math.floor((distance % (1000 * 60 * 60 *24)/(1000*60*60)));
    const minutes=Math.floor((distance % (1000*60*60))/(1000 * 60));
    const a="Past";
    const b="Active";
    
    if(distance < 0 )
    {
      setLabel(a);

    }
    else{
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setLabel(b);
    }
    },1000)
};
useEffect(()=>{
  startTimer();
  return () => {
    clearInterval(interval.current);
  }
});

var getddl = e =>{
  document.getElementById("bg").style.backgroundColor = "rgba(0, 0, 0, 0.32) ";
  document.getElementById("bg").style.width = "100%";
  document.getElementById("bg").style.height="100%";

}
var getdd2 = e =>{ document.getElementById("bg").style.backgroundColor = "rgba(0, 0, 0, 0) ";
  document.getElementById("mess").style.display="block";
  document.getElementById("part").style.backgroundColor="white";
  document.getElementById("bg").style.width = "0%";
  document.getElementById("bg").style.height="0%";

  var selectedValue = document.getElementById("f").value;
document.getElementById("mess1").innerHTML=(selectedValue);

}

  return ( 
        <div  id="bg">  
          
        <div class="header">
        <img src="logo.png"></img>
        </div>
        <div className="challenge">
            
            <table>
                <tr>
                <td class="content">
            <p class="heading">
              Accelerate Innovation with Global AI Challenges
            </p>
            <p class="subheading">
              AI Challenges at DPhi simulate real-world problems.
               It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
            </p>
            <Link to="/create">
            <button className="createchallenge">
              Create Challenge
            </button>
            </Link>
          </td>
          <td>
            <img src="rocket.png"  className="rocket"></img>
          </td>
                </tr>
            </table>
           
     
        </div>
        <div class="mid" >
           <div class="row">
             <div class="column" >
              <img src="Group 1000002515.png"></img>
              <p>100K+<br></br>
              <span>
              AI model submissions
             </span>
            <br></br>
          </p>
        </div>
        <div class="column" >
          <img src="Group 1000002516.png"></img>
          <p>50K+<br></br>
            <span>
              Data Scientists
            </span>
            
          </p>
        </div>
        <div class="column" id="last">
          <img src="Group 1000002518.png"></img>
          <p>100+<br></br>
            <span>
              AI Challenges hosted
            </span>
            <br></br>
          </p>
        </div>
      </div>
    </div>
    
    <div class="participate" id="part">
    <p class="partheading">Why Participate in <span>AI Challenges?</span></p>
    <div className="ca">
    <div class="card">
      <img src="carbon_notebook-reference.png"></img>
      <p class="cardheading">
        Prove your skills
      </p>
      <p class="cardsubheading">
        Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.
      </p>
    </div>
    <div class="card">
      <img src="Vector.png"></img>
      <p class="cardheading">
        Learn from community
      </p>
      <p class="cardsubheading">
        One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.
      </p>
    </div>
    <div class="card">
      <img src="Robot.png"></img>
      <p class="cardheading">
        Challenge yourself
      </p>
      <p class="cardsubheading" id="cardbig">
        One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.
        
      </p>
    </div>
    <div class="card">
      <img src="IdentificationCard.png"></img>
      <p class="cardheading">
        Earn recognition
      </p>
      <p class="cardsubheading">
        You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.
      </p>
    </div>
    </div>
  </div>
  <div class="mid">
<p class="explore">Explore Challenges</p>

<input type="text" placeHolder="     Search" onChange={event => {setSearchTerm(event.target.value)}}>
   </input>
 
   <select className="Filter" placeholder="Filter" name="Filter" id="f" onChange={getdd2} onClick={getddl}>
    <option value="Filter" selected id="fil">Filter</option>
  <optgroup label="Status">Status</optgroup>
  <hr></hr>
  <option value="All">
  <input type="checkbox">
  </input>ALL</option>
  <option value="Active"><input type="checkbox"></input>Active</option>
  <option value="Upcoming"><input type="checkbox"></input>Upcoming</option>
  <option value="Past"><input type="checkbox"></input>Past</option>
    <optgroup label="Level">Level</optgroup><hr></hr>
    <option value="Hard"><input type="checkbox"></input>Hard</option>
  <option value="Medium"><input type="checkbox"></input>Medium</option>
  <option value="Easy"><input type="checkbox"></input>Easy</option>
   
    
  </select> 
  
  <label id="mess"> <span id="mess1"></span> <img src="http://localhost:3000/cross.png"></img></label>
  <br></br>
  </div>
<div className="end">
{JSONDATA.filter((val)=>{
  if(searchTerm == "")
  {
    return val
  }
  else if(val.Challenge_name.toLowerCase().includes(searchTerm.toLowerCase())){
    return val
  }
}).map((val,key)=>{
  return <div className="challengecard">
    
<img src={val.Image}></img>
<div class="label">{label}</div>
<p className="challengecardname">
  {val.Challenge_name}
</p>
<p className="starts">
  Starts in:
</p>
<section class="dht">
<span >{timerdays}</span>:<span>{timerHours}</span>:<span>{timerMinutes}</span><br></br>
<span>Days</span>:<span>Hours</span>:<span>Mins</span>
</section>
<Link to={`/details/${val.id}`}>
<button className="part">
 <span><img src="Group.png"></img></span> <p>
 Participate Now
 </p>
</button>
</Link>

    </div>
})}</div>

        </div>
    );
}
 
export default Header;
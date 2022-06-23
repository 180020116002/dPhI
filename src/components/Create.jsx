// import React from "react";
// import Header from "./Header";

// const Create = () => {
//     return (
//         <div>
//         <Header></Header>
//         <h1 className="challengesdetails">
//             Challenges Details
//         </h1>
//         <form class="createform">
//     <label>
//       Challenge Name<br></br>
//       <input type="text" name="name" />
//     </label>
//     <br></br>
//     <label>
//       Start Date<br></br>
//       <input type="date" name="startdate" placeholder="Add Start date" />
      
//     </label>
//     <br></br>
//     <label>
//       End Date<br></br>
//       <input type="date" name="enddate" placeholder="Add End date" />
//     </label><br></br>
//     <label>
//       Description<br></br>
//       <textarea rows="4" cols="8" style="width:817px; resize: none; border-color: #B7B7B7;" >

//       </textarea>
//     </label>
//     <br></br>
//     <label>
//      Image<br></br>
//      <input type="file" class="custom-file-input" style={"width:236px;"}></input>
//     </label><br></br>
//     <label>
//       Level<br></br>
//      </label>
//      <select name="levels" id="levels" >
//       <option value="Easy">Easy</option>
//       <option value="Medium">Medium</option>
//       <option value="hard">Hard</option>
      
//     </select>
//  <button> Create Challenge</button>
  
//   </form>
//         </div>
//       );
// }
 
// export default Create;
import React from "react";
const Create =() =>
{
  return <div className="createjsx">
   <img src="logo.png" id="createlogo"></img>
  <h1 className="challengesdetails" >
      Challenges Details
  </h1>
  <form className="createform" method="POST">
 
    <label>
      Challenge Name<br></br>
      <input type="text" name="name" />
    </label>
    <br></br>
    <label>
      Start Date<br></br>
      <input type="date" name="startdate" placeholder="Add Start date" />
      
    </label><br></br>
    <label>
      End Date<br></br>
      <input type="date" name="enddate" placeholder="Add End date" />
    </label><br></br>
    <label>
      Description<br></br>
          <textarea rows={4} cols={8}></textarea>
       </label>
       <br></br>
    <label>
     Image<br></br>
     <input type="file" class="custom-file-input" id="imageinput"></input>
    </label><br></br>
    <label>
      Level<br></br>
     </label>
     <select name="levels" id="levels" >
      <option value="Easy">Easy</option>
      <option value="Medium">Medium</option>
      <option value="hard">Hard</option>
      
    </select>
 <button> Create Challenge</button>
</form>

  
  </div>
}
export default Create;
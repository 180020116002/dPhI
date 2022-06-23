import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import JSONDATA from './MOCK_DATA.json'

const Edit = () => {
  const { id } =useParams();
    return ( 
        <div>
   <img src="http://localhost:3000/logo.png" id="createlogo"></img>
  <h1 className="challengesdetails" >
      Challenges Details
  </h1>
  <form className="createform" method="POST">
  {JSONDATA.map((val,key)=>{
        
        if(val.id==id){ return <div><label>
      Challenge Name<br></br>
      <input type="text" name="name"  value={val.Challenge_name} />
    </label>
    <br></br>
    <label>
      Start Date<br></br>
      <input type="text" name="startdate"  value={val.Start_Date} onfocus="(this.type = 'date')" />
      
    </label><br></br>
    <label>
      End Date<br></br>
      <input type="text" name="enddate"  value={val.End_date} onfocus="(this.type = 'date')"  />
    </label><br></br>
    <label>
      Description<br></br>
          <textarea rows={4} cols={8}  value={val.Description} onFocus={val.Description}></textarea>
       </label>
       <br></br>
    <label>
     Image<br></br>
     <img src={val.Image} width="10%"></img><br></br>
     <input type="file" class="custom-file-input1" id="imageinput1"></input>
    </label><br></br>
    <label>
      Level<br></br>
     </label>
     <select name="levels" id="levels" value={val.Level}>
      <option value="Easy">Easy</option>
      <option value="Medium">Medium</option>
      <option value="Hard">Hard</option>
      
    </select>
    <Link to="/">
 <button class="save">Save Changes</button></Link>
 </div>
 }})
 
}
 </form></div>
     );
}
 
export default Edit;
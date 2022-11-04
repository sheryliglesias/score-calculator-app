import { useEffect, useState } from "react";




function CalculateScore(){

  const [inputs, setInputs] = useState({
    id:0,
    version: 0,
  });

  const [status, setStatus] = useState();
    const [average, setAverage] = useState(0);

  const [errors, setErrors] = useState({});
    
  const handleChange = (event) =>{
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    if(fieldName == 'score' && fieldValue > 99){
      setErrors(values=>({...values, score:" Value must be less than 75!",
      score_fieldClass:"error-field"}));
    }else{
      setErrors(values=>({...values, score: "",score_fieldClass:""}));
    }
    setInputs(values=>({...values, [fieldName]: fieldValue}));   
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setInputs(values=>({...values, version: inputs.version+1}));
    
    if(inputs.first_name == undefined || inputs.first_name.trim() ==''){
      setErrors(values=>({...values, first_name: "This field is required!",first_name_fieldClass:"error-field"}));
    }else{
      setErrors(values=>({...values, first_name:"",first_name_fieldClass:""}));
    }
    
    //console.log(inputs);
  }

  useEffect(() =>{
  
    let average = (parseInt(inputs.score1) + parseInt(inputs.score2) + parseInt(inputs.score3))/3;
    if(average >=75){
        setStatus("Passed");
    }else{
        setStatus("Failed");
    }

    if(average !== undefined && !isNaN(average)){
        setAverage(average);
    }
    
}, [inputs]);

  return ( 
    <form className="form" onSubmit={handleSubmit}>
      <div className="row">
       <div className="col-sm-4">
         <label>First Name:</label>
         <input type="text" name="first_name" className={"form-control text-input-field " +
          errors.first_name_fieldClass}
          value={inputs.first_name} onChange={handleChange}/>
      <div className="error_message">
         {errors.first_name}</div>
      </div>
    <div className="col-sm-4">
        <label>Last Name:</label>
        <input type="text" name="last_name" className={"form-control text-input-field " +
         errors.last_name}
         value={inputs.last_name} onChange={handleChange}/>
    <div className="error_message">
        {errors.last_name}</div>
  </div>
     <div className="row">
       <div className="col-sm-4">
          <label>score 1:</label>
          <input type="number" name="score1" className={"form-control number-input-field " +
            errors.score1_fieldClass}
            value={inputs.score1} onChange={handleChange}
            min="0" max="75"/>
         <div className="error_message">
           {errors.score1} </div>
     </div>
     </div>   
        <div className="col-sm-4">
          <label>score2:</label>
          <input type="number" name="score2" className={"form-control number-input-field " +
            errors.score2_fieldClass}
            value={inputs.score2} onChange={handleChange}
            min="0" max="75"/>
         <div className="error_message">
           {errors.score2} </div>
    </div>         
         
        <div className="col-sm-4">
          <label>score3:</label>
          <input type="number" name="score3" className={"form-control number-input-field " +
            errors.score3_fieldClass}
            value={inputs.score3} onChange={handleChange}
            min="0" max="75"/>
         <div className="error_message">
           {errors.score3} </div>
        </div>
      </div>
      <div className="row">
         <div className="col-sm-4">
           <label>AVERAGE: {average}</label>
        </div>
         <div className="col-sm-4">
           <label>STATUS: {status}</label>
        </div>
      </div>
      <input type="submit"/>
    </form>
    
  )
}
           
  
export default CalculateScore;
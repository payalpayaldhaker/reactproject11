
import { useEffect, useState } from 'react';
import swal from 'sweetalert';

//useHOOK

//RFC React Functional Components
export default function A() {
  //1. States/Variables
  //Hooks varaible
  //const [variable, setfunction] = useState(initialData)
  const [studentName, setStudentName] = useState('payal dhakad')


  //useEffect(<function>, <dependency>)

  // ()=>{}  Fat arrow annanymous function
  useEffect(()=>{

  },[]) //Empty Array
  //2.Functions and
  //Lets create a function with Fat Arrow notation
  let myFunction = ()=>{
    console.log(studentName);
    // Call the api here
    var data = {
      "data": {
        "name": studentName
      }
    }
    //Promise Chain
    fetch('https://desolate-tor-69813.herokuapp.com/api/friends',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body:JSON.stringify(data)
    }).then((d)=>{
      console.log(d.status);
      if(d.status == 200){
        swal("Good job!", "Data  Successfully", "success");
      }
    }).catch(()=>{}).finally(()=>{});
  }

  // Ananymous function (e)=>{}  ES6

  //3. Return Statements JSX x=XML
  return (
    <div>
      { studentName } 
      <form className='w-25 offset-3'  value={ studentName } onChange={ (e)=>{ setStudentName(e.target.value) }  } >
        {/* <label  >friends Name:<br />
          <input type="text"/>
        </label><br /> */}

        <div className="mb-3">
            <label for="name" className="form-label">friends name</label>
            <input type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
    
       </div>
  
        
        <input type="button" onClick={ myFunction } name="studentName" value="friend" />
      </form>
    </div>
  )
}


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
        'Authorization':'Bearer c5479eaba2166c282d5d2990fe3d74b19c98515d3cfa2c68a3569f268102018baca5449c946f6ee7e1950062c3bd3444a5f78beb6438cf245719ca814c06ab172c0862bb30b9a0fdc5360c59aa20ba6312a37f5c0dc78055a24b2d879a8c93be30d00bba03ce9f702576a5a6d4c36ca818f9f376a5458454758f4f26992e5d74',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        
      },
      body:JSON.stringify(data)
    })
    .then(response => response.json()) // THis will make your json data readable
    .then((d)=>{

      //Check if we are receving an eror
      if ('error' in d){
        console.log('Error');
        if(d.error.status === 401){ //Strictly Comparision Operator
          swal(d.error.name, d.error.message, "error");
        }
      }else{
        // console.log(d)
        //Success
        //console.log(d.status);
        if(Object.keys(d.data).length !== 0){ //Strictly Comparision Operator
          swal("Good job!", "Data  Successfully", "success");
        }
      }
     
    }).catch(()=>{}).finally(()=>{});
  }

  // Ananymous function (e)=>{}  ES6

  //3. Return Statements JSX x=XML
  return (
    <div>
     
      <form>
        <label> friends Name<br />
          <input className='w-100 ' autoFocus type="text" value={ studentName } onChange={ (e)=>{ setStudentName(e.target.value) }  } />
        </label><br />
        <input className=' ' type="button" onClick={ myFunction } name="studentName" value="friends" />
      </form>
    </div> 
  )
}
  
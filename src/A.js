import { useState } from "react"

export default function A() {
    //state
    const [x, setX] = useState('hello')

    //function
    let myFunction =()=>{ 
        console.log(x);
    }
    //return statement



    return (
        <>
        <h1 className="text-center">Simple Form</h1>
        <form className='w-50 offset-3'>
  <div className="mb-3">
    <label for="exampleInputEmail1" value={x} onChange={ (event)=>{setX(event.target.value) }} className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" onClick={myFunction} className="btn btn-primary">Submit</button>
</form>
       

        </>
    )
}


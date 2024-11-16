import React, { useState } from 'react'
import Navbar from './Navbar'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [input , setInput] = useState({
    email:"",
    password:"",
  });

  const navigate = useNavigate();

  //For email to role 
      const changeEventHandler = (e) =>{
      setInput({...input , [e.target.name] : e.target.value });
    }
    
  //Function for API Call
      const submitHandler = async(e) =>{
      e.preventDefault();
       try{
         const res = await axios.post(`http://localhost:4001/api/auth/login`, input, {
          headers:{
           "Content-Type": "application/json"
          },
          withCredentials:true,
      });
      if(res.data.success){
        //navigate to the home page
        navigate("/");
        toast.success(res.data.message);
      }
    }catch(error){
      console.log(error);
    }
}

  return (
    <div>
        <Navbar/>
         <div className='flex justify-center items-center mx-auto max-w-screen-xl'>
          <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-lg p-6 my-12 shadow-xl '>
           <h1 className='font-bold text-2xl mb-5'>Login</h1>

           <div className='mt-2=4 mb-2'>
            <Label className="font-semibold text-gray-800">Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Univoc@gmail.com"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md "
              />
          </div>
          <div className='mt-4 mb-2'>
            <Label className="font-semibold text-gray-800">Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="********"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
          </div>

          <Button type="submit" className="mt-4 w-full bg-blue-700 text-white font-semibold py-2 rounded-md hover:bg-blue-800 transition-all mb-4">
            Login
          </Button>
        
          <span classname="text-sm block text-center">Don't have an account? <Link to="/Register" className="text-blue-600 font-semibold hover:underline">Signup</Link></span>
          </form>
          </div>
            
    </div>
  )
}

export default Login

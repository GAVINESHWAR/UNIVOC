import React, { useState } from 'react'
import Navbar from './Navbar';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import axios from 'axios';
import { toast } from "sonner";

const Register = () => {
  const [input , setInput] = useState({
    fullName:"",
    email:"",
    phoneNumber:"",
    password:"",
  });

  const navigate = useNavigate();
  
  //For fullname to password
  const changeEventHandler = (e) =>{
    setInput({...input , [e.target.name] : e.target.value });
  }
  
   //Function for API Call
   const submitHandler = async(e) =>{
     e.preventDefault();
      // Validate input fields
      if (!input.fullName || !input.email || !input.phoneNumber || !input.password) {
      toast.error("Please fill all fields!");
      return;
  }
    const userData = {
      fullName: input.fullName,
      email: input.email,
      phoneNumber: input.phoneNumber,
      password: input.password,
    };
   
     try{
     const res = await axios.post(`http://localhost:4001/api/auth/signup`, userData, {
       headers:{
         'Content-Type':"application/json",
         'Accept':'application/json',  // Add Accept header
       },
       withCredentials:true,
     });
     console.log("Response Data:", res.data); // Check the response data 

     if(res.data.success){
       //navigate to the login page
       console.log("Navigating to Login page...");
       navigate("/Login");
       toast.success(res.data.message);
     }
    }
    catch (err) {
      console.error("Signup Error:", err); // Log error for debugging
      if (err.response && err.response.data) {
        console.log("Server error message:", err.response.data.message);  // Check exact error from backend
        toast.error(err.response.data.message || "Signup failed. Please check your input.");
      }
    }
   }

  return (
    <div>
      <Navbar/>
      <div className='flex justify-center items-center mx-auto max-w-screen-xl'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-lg p-6 my-12 shadow-xl '>
          <h1 className='font-bold text-2xl mb-5'>Sign Up</h1>

          <div className='mt-2 mb-2'>
            <Label className="font-semibold text-gray-800">Full Name</Label>
            <Input
              type="text"
              name="fullName"
              value={input.fullName}
              onChange={changeEventHandler}
              placeholder="Univoc"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
          </div>            
          <div className='mt-2 mb-2'>
            <Label className="font-semibold text-gray-800">Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Univoc@gmail.com"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
          </div>
          <div className='mt-2 mb-2'>
            <Label className="font-semibold text-gray-800">Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="+91  "
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
          </div>
          <div className='mt-2 mb-2'>
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
          
          <Button
            type="submit" 
            className="mt-1 w-full bg-blue-700 text-white font-semibold py-2 rounded-md hover:bg-blue-800 transition-all mb-4">
            Sign Up
          </Button>
  
          <span className="text-md block">Already have an account?{' '} <Link to="/Login" className="text-blue-600 font-semibold hover:underline">Login</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Register;

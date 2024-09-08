'use client'
// ./contactpage/page.js



import React, { useState , useRef} from 'react';

import {submitAction } from "../../../../actions/form"



const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })



  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
//  const reset = ()=>{
  
//   setFormData({
//     name: '',
//     email: '',
//     message: '',
//   })

// // setSuccess("Form submitted") 
//  };

const handleSubmit = ()=>{
  setSuccess(true);
  setFormData({
    name:"",
    email: '',
    message: '',
  })
}
let ref = useRef();
console.log(ref);

  return (
    <>
   
      
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 w-2/3">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full xl:w-8/12 p-6 text-lg">
            <h2 className="text-3xl text-gray-900 leading-tight">Get in Touch</h2>
            {success && (
              <div className="text-green-500 text-sm mb-4">Message sent successfully!</div>
              )            
            }
            <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}} onSubmit={handleSubmit} className="mt-6">
            
              <div className="flex flex-wrap -mx-4 mb-6 justify-center items-center">
                <div className="w-full xl:w-12/12 p-4">
                  <label htmlFor="name" className="block text-gray-600 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="block w-full p-4 text-lg text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                    required
                    key="name"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-4 mb-6">
                <div className="w-full xl:w-12/12 p-4">
                  <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about yourself"
                    className="block w-full p-4 text-lg text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                    required
                    key="message"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-4 mb-6">
                <div className="w-full xl:w-12/12 p-4">
                  <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="block w-full p-4 text-lg text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                    required
                    key="email"
                  />
                </div>
              </div>
           
            <button
            // onClick={reset}
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;

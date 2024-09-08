"use server"


import nodemailer from "nodemailer";
import dotenv from 'dotenv';
import React from "react";
import { resolve } from "styled-jsx/css";
dotenv.config();

export const  submitAction = async(e)=>{

   
 // Create reusable transporter object using the default SMTP transport
 let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // environment variable for email
      pass: process.env.EMAIL_PASS,  // environment variable for password
    },
  });




  let name =e.get("name");
  let email = e.get("email");
  let message = e.get("message");

  try {
    // Send email with defined transport object
    let info = await transporter.sendMail({
      from: `${name}+${email}`, // sender address
      to: 'utkarshsinha2122@gmail.com', // recipient address
      subject: `New message from ${name}`, // subject line
      text: message, // plain text body
      html: `<p>You have a new message from <b>${name}</b> (${email}):</p><p>${message}</p>`, // HTML body
    });
    console.log('Message sent: %s', info.messageId);

    // Send a response back to the client
    <div className="text-green-500 text-sm mb-4">Message sent successfully!</div>  
    console.log({ message: 'Email sent successfully!' });

    
    

  } catch (error) {
    console.error('Error sending email:', error);
    console.log({ message: 'Error sending email', error });
} 

}



    

    
  

    
    
    

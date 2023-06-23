'use client'

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('One or more environment variables are missing.');
      // Handle the error case
      return;
    }

    emailjs.send(serviceId, templateId, {
      email: email,
      message: message,
      name: name,
      subject: subject,
    }, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response.text);
        toast.success('Email sent successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error('Error sending email!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      });
    
  };

  return (
    <div className="flex flex-col items-center p-2 sm:p-4 bg-palet-two-pri min-h-screen">
      <ToastContainer />
      <div className="bg-palet-two-sec p-2 sm:p-4 rounded-3xl mt-24 max-w-[1240px] mx-auto">
        <h2 className="text-xl xl:text-3xl font-bold mb-0 xl:mb-4 text-palet-two-qua text-center">Contato</h2>
        <div className="bg-palet-two-ter p-2 sm:p-4 rounded-2xl my-2 xl:my-4">
          {/* <h3 className="text-lg xl:text-xl font-bold mb-0 xl:mb-4 ml-4 xl:ml-0">Let&apos;s work together</h3> */}
          <h3 className="text-lg xl:text-xl font-bold mb-0 xl:mb-4 ml-4 xl:ml-0">Entre em contato:</h3>
          <div className="flex gap-8 justify-center">
            <div className="bg-palet-two-qua p-2 sm:p-4 text-justify flex flex-col justify-center rounded-xl">
              <form className="max-w-[600px] m-auto" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    className="border shadow-lg p-2 sm:p-4 rounded-xl"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="border shadow-lg p-2 sm:p-4 rounded-xl"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <input
                  className="border shadow-lg p-2 sm:p-4 w-full my-2 rounded-xl"
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  className="border shadow-lg p-2 sm:p-4 w-full"
                  cols={30}
                  rows={10}
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                  className="border-0 shadow-lg p-2 sm:p-4 w-full mt-2 bg-palet-two-ter text-2xl font-bold rounded-xl"
                  type="submit"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

'use client'

import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send('service_2trilfn', 'template_oangw0e', {
      email: email,
      message: message,
      name: name,
      subject: subject,
    }, '6H2RLuSX53E_S6ntO')
      .then((response) => {
        console.log('Email sent successfully:', response.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
    
  };

  return (
    <div className="flex flex-col items-center bg-palet-two-pri min-h-screen">
      <div className="bg-palet-two-sec p-2 xl:p-4 rounded-3xl mt-24 max-w-[1240px] mx-auto">
        <h2 className="text-xl xl:text-3xl font-bold mb-0 xl:mb-4 text-palet-two-qua text-center">Contact</h2>
        <div className="bg-palet-two-ter p-2 xl:p-4 rounded-2xl my-2 xl:my-4">
          <h3 className="text-lg xl:text-xl font-bold mb-0 xl:mb-4 ml-4 xl:ml-0">Let&apos;s work together</h3>
          <div className="flex gap-8 justify-center">
            <div className="bg-palet-two-qua p-2 xl:p-4 text-justify flex flex-col justify-center rounded-xl">
              <form className="max-w-[600px] m-auto" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    className="border shadow-lg p-2 xl:p-4 rounded-xl"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="border shadow-lg p-2 xl:p-4 rounded-xl"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <input
                  className="border shadow-lg p-2 xl:p-4 w-full my-2 rounded-xl"
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  className="border shadow-lg p-2 xl:p-4 w-full"
                  cols={30}
                  rows={10}
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                  className="border-0 shadow-lg p-2 xl:p-4 w-full mt-2 bg-palet-two-ter text-2xl font-bold rounded-xl"
                  type="submit"
                >
                  Submit
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

/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'

const mainpage = () => {
    const [formData, setFormData] = useState({
        mainform: {
          title: '',
          desc: '',
          img: '',
          summary: '',
          KeyElements: '',
          Conclusion: '',
          Strategies: '',
        },
        subdataform: {
          ValueHeading: '',
        },
        subValueHeadingform: {
          SubValueHeading: '',
          SubValueKey: '',
        },
      });
      
    
      const handleMainFormChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          mainform: {
            ...prevData.mainform,
            [e.target.id]: e.target.value,
          },
        }));
      };
    
      const handleSubDataFormChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          subdataform: {
            ...prevData.subdataform,
            [e.target.id]: e.target.value,
          },
        }));
      };
    
      const handleSubValueHeadingFormChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          subValueHeadingform: {
            ...prevData.subValueHeadingform,
            [e.target.id]: e.target.value,
          },
        }));
      };
    
      const submitMainForm = (e) => {
        e.preventDefault();
        console.log('Submitted Main Form Data:', formData.mainform);
        // Add your logic to send data to the server or perform further actions
      };
    
      const submitSubDataForm = (e) => {
        e.preventDefault();
        console.log('Submitted SubData Form Data:', formData.subdataform);
        // Add your logic to send data to the server or perform further actions
      };
    
      const submitSubValueHeadingForm = (e) => {
        e.preventDefault();
        console.log('Submitted SubValueHeading Form Data:', formData.subValueHeadingform);
        // Update the mainform with subValueHeadingform data
        setFormData((prevData) => ({
          ...prevData,
          mainform: {
            ...prevData.mainform,
            ValueHeading: prevData.subValueHeadingform,
          },
        }));
        console.log('Updated Main Form Data:', formData.mainform);
        // Add your logic to send data to the server or perform further actions
      };
      return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          
          <form action="" id="mainform" onSubmit={submitMainForm}>
          <label htmlFor="title">Title</label>
          <input type="text" id='title' placeholder='Title'/>
          <label htmlFor="desc">Description</label>
          <input type="text" id='desc' placeholder='Description'/>
          <label htmlFor="img">Image</label>
          <input type="url" id='img' placeholder='Image'/>
          <label htmlFor="summary">Summary</label>
          <input type="text" id='summary' placeholder='Summary'/>
          <label htmlFor="KeyElements">KeyElements</label>
          <input type="text" id='KeyElements' placeholder='KeyElements'/>
          <label htmlFor="Conclusion">Conclusion</label>
          <input type="text" id='Conclusion' placeholder='Conclusion'/>
          <label htmlFor="Strategies">Strategies</label>
          <input type="text" id='Strategies' placeholder='Strategies'/>
          
          <button type="submit">Submit Main Form</button>
        </form>
    
    
    
        <form action="" id="subdataform" onSubmit={submitSubDataForm}>
        <label htmlFor="ValueHeading">ValueHeading</label>
          <input type="text" id='ValueHeading' placeholder='ValueHeading'/>
          <button type="submit">Submit SubData Form</button>
        </form>
    
    
    
    
        <form action="" id="SubValueHeadingform" onSubmit={submitSubValueHeadingForm}>
        <label htmlFor="SubValueHeading">SubValueHeading</label>
          <input type="text" id='SubValueHeading' placeholder='SubValueHeading'/>
          <label htmlFor="SubValueKey">SubValueKey</label>
          <input type="text" id='SubValueKey' placeholder='SubValueKey'/>
    
          <button type="submit">Submit SubValueHeading Form</button>
        </form>
          
        </main>
  )
}

export default mainpage
import React, { useState } from 'react';
import './events.css';
import PROFILE from '../../assets/dance_t.jpg';
import Swal from 'sweetalert2'
import axios from 'axios'
import logo from '../../assets/art circle logo orgl white (1).png'
import * as API from '../../API/registerAPI'

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [name, setName] = useState();
  const [prn, setPrn] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const handleNameChange = (e) => {
    setName(e.target.value);
  } 
  const handlePrnChange = (e) => {
    setPrn(e.target.value);
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(name,prn,phone,email);
    if(!name || !prn || !phone || !email){
      Swal.fire('Please fill all the fields')
    }
    else if(phone.length!==10){
      Swal.fire('Please enter a valid phone number')
      return;
    }
    const {data:{key}} = await axios.get("http://localhost:5000/payment/getKey")
    const {data:{order}} = await axios.post("http://localhost:5000/payment/checkout") 
    var options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: name,
      description: "Ticket Payment",
      image: {logo},
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:5000/payment/paymentVerification",
      prefill: {
        name: name,
        email: email,
        contact: phone
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#21E6C1"
      }
  };
  const razor = new window.Razorpay(options);
  razor.open();
  const data1 = {name,prn,phone,email};
  const res = API.createNewStudent(data1);
  }

  return (
    <div id='events'>
      <h2>Recent Events</h2>
      <div className="events-container">
        <div className="event">
          <div className="event-image">
            <img src={PROFILE} alt="" />
          </div>
          <div className="event-info">
            <h3>Event Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <button className='btn' onClick={openModal}>Register</button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className='event-form'>
            <form onSubmit={handleSubmit}>
              <input type='text'  id='name' placeholder='Enter your Name' onChange={handleNameChange} required/>
              <input type='text'  id='prn' placeholder='Enter your PRN' onChange={handlePrnChange} required/>
              <input type='text'  id='phone' placeholder='Enter your Mobile Number' onChange={handlePhoneChange} required/>
              <input type='email'  id='email' placeholder='Enter your Email Id' onChange={handleEmailChange} required/>
              <button className='btn' type='submit'>Submit</button>
            </form>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
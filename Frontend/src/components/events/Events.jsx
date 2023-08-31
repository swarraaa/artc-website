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
    const data1 = {name,prn,phone,email};
    console.log(data1);
    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: order.amount.toString(),
      currency: "INR",
      name: "Art Circle",
      description: "Test Transaction",
      image: logo,
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const data = {
          orderCreationId: order.id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          name: name,
          prn: prn,
          phone: phone,
          email: email
        };
        const result = await axios.post("http://localhost:5000/payment/paymentverification", data);
        console.log(result);
        if(result.data.success === true){
          const res = API.createNewStudent(data1);
          Swal.fire('Payment Successful')

        }
        else{
          Swal.fire('Payment Failed')
        }
      },
      prefill: {
        name: name,
        email: email,
        contact: phone
      },
      notes: {
        address: "Art Circle"
      },
      theme: {
        color: "#3399cc"
      }
    };

  // console.log(name,prn,phone,email);
  const razor = new window.Razorpay(options);
  razor.open();
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
            <form>
              <input type='text'  id='name' placeholder='Enter your Name' onChange={handleNameChange} />
              <input type='text'  id='prn' placeholder='Enter your PRN' onChange={handlePrnChange}/>
              <input type='text'  id='phone' placeholder='Enter your Mobile Number' onChange={handlePhoneChange}/>
              <input type='email'  id='email' placeholder='Enter your Email Id' onChange={handleEmailChange}/>
              <button className='btn' type='submit' onClick={handleSubmit}>Submit</button>
            </form>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
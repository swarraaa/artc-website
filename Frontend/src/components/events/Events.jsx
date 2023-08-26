import React,{useState} from 'react'
import './events.css'
import * as API from '../../API/registerAPI'
import Swal from 'sweetalert2'
import PROFILE from '../../assets/dance_t.jpg'

const Events = () => {
  const [name, setName] = useState();
  const [prn, setPrn] = useState();
  const [yos, setYos] = useState();
  const [transactionId, setTransactionId] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const handleNameChange = (e) => {
    setName(e.target.value);
  } 
  const handlePrnChange = (e) => {
    setPrn(e.target.value);
  }
  const handleYosChange = (e) => {
    setYos(e.target.value);
  }
  const handleTransactionIdChange = (e) => {
    setTransactionId(e.target.value);
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,prn,yos,transactionId,phone,email);
    if(!name || !prn || !yos || !transactionId || !phone || !email){
      Swal.fire('Please fill all the fields')
      return;
    }
    else if(phone.length!==10){
      Swal.fire('Please enter a valid phone number')
      return;
    }
    else if(name && prn && yos && transactionId && phone && email){
      Swal.fire('Registered Successfully')
    }
    const data = {name,prn,yos,transactionId,phone,email};
    const res = API.createNewStudent(data);
    console.log(res.data);
  }

  return (
    <div id='events'>
      <h2>Recent Events</h2>
      <div>
        <div className='event-container'>
          <div className="event">
            <div className="event-image">
              <img src={PROFILE} alt="" />
            </div>
            {/* <div className="event-info">
              <h5>Event Name</h5>
              <h6>Event Description</h6>
            </div> */}

          </div>
          
        </div>
          <div className='event-form'>
            <form>
              <input type='text'  id='name' placeholder='Enter your Name' onChange={handleNameChange}/>
              <input type='text'  id='prn' placeholder='Enter your PRN' onChange={handlePrnChange}/>
              <input type='text'  id='yos' placeholder='Enter your Year' onChange={handleYosChange}/>
              <input type='text'  id='transactionId' placeholder='Enter your Transaction Id' onChange={handleTransactionIdChange}/>
              <input type='text'  id='phone' placeholder='Enter your Mobile Number' onChange={handlePhoneChange}/>
              <input type='email'  id='email' placeholder='Enter your Email Id' onChange={handleEmailChange}/>
              <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Events
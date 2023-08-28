import React from 'react';
import './admin.css';
import * as API from '../../API/registerAPI'
import { useEffect, useState } from 'react';

const Admin = () => {
    const [userDetails, setuserDetails] = useState([])
    const [allDetails, setallDetails] = useState([])
    const [search, setSearch] = useState("");
    const [filteredItems, setFilteredItems] = useState(userDetails);
    const updateUsers = async()=>{
        const res = await API.getAllRegisteredStudents();
        console.log(res.data);
        setuserDetails(res.data.tasks);
        setallDetails(res.data.tasks);
        setFilteredItems(res.data.tasks)
    }
    useEffect(() => {
        updateUsers();
    }, [userDetails])
    
    

    const handleSearch = (e) => {
        const searchText = e.target.value;
        setSearch(searchText);
    };

    const handleCheckBox=async(e,index)=>{
        const updateCheck = await API.updateStudent(index,e);
        
    }
    return (
        <div id='admin-page'>
            <h1>Admin</h1>
            <div className='search'>
                <input type="text" placeholder="Enter the otp" onChange={handleSearch}/>
            </div>
            <div className='student-list'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>PRN</th>
                            <th>OTP</th>
                            <th>Scanned</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems && userDetails
              .filter((item) => {
                return search === ''
                  ? item
                  : String(item.otp).includes(search);
              }).map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.prn}</td>
                                <td>{user.otp}</td>
                                <td><input type="checkbox" checked={user.visited} onChange={(e)=>{handleCheckBox(e.target.checked,user._id)}}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;

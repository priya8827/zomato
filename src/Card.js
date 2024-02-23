import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
 

function card() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-4'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLl67AryMhYnUXrWTSruRyYolX6Oy3ykeWRA&usqp=CAU'/>
              <h3> order food</h3>
              <p>stye home</p>
        
        </div>
        <div className='col-lg-4'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4IBOWzyodPsbO23nftojFtZ7Ns06NzFD6g&usqp=CAU'/>
              <h3> order food</h3>
              <p>stye home</p>
        
        </div>
        <div className='col-lg-4'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9eJcCpqrWNxcuRRhO391qu5bQHFjIit1tw&usqp=CAU'/>
              <h3> order food</h3>
              <p>stye home</p>
        
        </div>
      </div>
    </div>
  )
}

export default card

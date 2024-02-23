import React, { useState } from 'react'
import arr from"./CardData"

function Veiwfood() {
  const[data , Setdata] = useState()
  const [search , Setsearch] = useState(arr)
  let fun1=(e)=>{
    Setdata(e.target.value)
    console.log(e.target.value);

  }
  let fun2=(e)=>{
    e.preventDefault()
    let newA = search.filter((str)=>{
      return str.text===data
    })
    Setsearch(newA)

  }
  return (
    <div>
      <div className='container w-75 d-flex justify-content-between align-item-center'>
        <img style={{width:'9rem'}} src='data:image/png;base64,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'/>
      <h1>Search here</h1>
      
      </div>
      <div className=''>
        <form class='container d-flex justify-content-center align-items-center'>
      <div class="col-lg-4">
        <input  onChange={fun1} value={data} type=" text" placeholder='enter your search' class="form-control" id='inputsearch'/>
      </div>
      <div className=''>
        <button onClick={fun2} style={{backgroundColor:'blue'}} >Search</button>
      </div>
        </form>
      </div>
      <section className='container w-75 mt-5'>
       <h2 style={{fontweight:400}}>Best food in the Bhopal</h2>
        <div className='row d-flex justify-content-between align-item-center'>
         
         {
          search.map((res)=>{
            return(
              <div class="card" style={{width:300}}>
              <img src={res.img} class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">{res.text}</p>
              </div>
            </div>
            )
          })
         }
      </div> 
     


        
      </section>
    </div>
    
  )
}

export default Veiwfood

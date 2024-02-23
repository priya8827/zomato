import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
   import Card from './Card'
   import Footer from './Footer'
   import City from './City'
function Home() {
  return (
    <div>
        <div className='parent'>
      
      <img src='https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png'/>
        <div className='Navbar'>
            <div className='Navbar-left'>
            <Link to='/veiw' className='text'>veiw food</Link>
            <Link to='/addres' className='text'>addrestorent</Link>


            </div>
            <div className='Navbar-right'>
                <Link to='/Login' className='text'>login</Link>
                <Link to='/Signup' className='text'>signup</Link>
               

            </div>
        </div>
                    <div className='logo'>
                      <img  className='img'src="https://logos-world.net/wp-content/uploads/2020/11/Zomato-Logo.png "/>
                    </div>
                    <div className='input-search'>
                      <h3> Discover the best food & drinks in chitkara </h3>
                      <div className='input'>
                        <select name='' id=''>
                          <option value='delhi'>delhi</option>
                          <option value='bhopal'>bhopal</option>
                          <option value='channai'>channai</option>

                          <option value='mumbai'>mumbai</option>

                        </select>
                        <input type='text' placeholder='search for a restorent or a rish'/>
                      </div>
                    </div>
           
         

      </div>
      <Card/> 
      <section>
        <City/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
    )
}

export default Home

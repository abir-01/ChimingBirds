import React from 'react'
import { Link } from 'react-router-dom'
import bird from '../assets/bird.png'
const Navbar = () => {
  return (
      
          <nav className="navbar navbar-expand-lg bg-body-tertiary m-0 p-0">
          <div className="container-fluid d-flex bg-black ">
              <Link className="navbar-brand mx-auto text-light" to="/"><h1 className='px-4 pt-5 pb-3 position-relative'>
                  <img src={bird} alt="" className='position-absolute bird' />
                  <p className='title'>Chiming Birds</p>
              </h1></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              {/* <div className="collapse navbar-collapse d-flex " id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#"></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Pricing</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                      </li>
                  </ul>
              </div> */}
          </div>
      </nav>
  )
}

export default Navbar
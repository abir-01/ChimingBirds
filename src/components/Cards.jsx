import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () => {
    return (

        <div className="card m-4 " style={{ width: "18rem" }}>
            <img src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5fGVufDB8fDB8fHww&w=1000&q=80" className="card-img-top img-size" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Bird Name</h5>
                    <h5 className="card-title">Scientific Name </h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/bird/1" className="btn btn-primary">read More</Link>
                </div>
        </div>

    )
}

export default Cards
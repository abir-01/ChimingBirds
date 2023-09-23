import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({bird}) => {
    return (

        <div className="card m-4 " style={{ width: "18rem" }}>
            <img src={bird.img_link} className="card-img-top img-size" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{bird.scientific_name}</h5>
                <p className="card-text">Height: {bird.height}</p>
                <p className="card-text">Weight: {bird.weight}</p>
                <p className="card-text">Color: {bird.color}</p>
                <Link to={`/bird/${bird._id}`} className="btn btn-primary ">read More</Link>
                </div>
        </div>

    )
}

export default Cards
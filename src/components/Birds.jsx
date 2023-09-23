import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from './Cards';

const Birds = () => {

    const [birdsarr, setbirdsarr] = useState([]);

    useEffect(() => {
        axios.get("https://chiming-birds-backend.onrender.com/api/birds/getallbirds")
            .then((res) => {
                console.log(res.data)
                setbirdsarr(res.data.birds);
            })
            .catch(err => console.log(err));
    }, [])


    return (
        <div className='d-flex justify-content-around flex-wrap'>
            {birdsarr.length!==0 && 
                birdsarr.map((bird,i) => (
                    <Cards bird={bird} key={i}/>
                ))
            }
        </div>
    )
}

export default Birds
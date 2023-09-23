import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Bird = () => {

    const [id, setid] = useState("");
    const [scientific_name, setscientific_name] = useState("");
    const [color, setcolor] = useState("");
    const [height, setheight] = useState("");
    const [weight, setweight] = useState("");
    const [domain, setdomain] = useState("");
    const [kingdom, setkingdom] = useState("");
    const [phylum, setphylum] = useState("");
    const [class1, setclass1] = useState("");
    const [order, setorder] = useState("");
    const [family, setfamily] = useState("");
    const [genus, setgenus] = useState("");
    const [species, setspecies] = useState("");
    const [imglink, setimglink] = useState("");

    const params = useParams();

    useEffect(() => {
        setid(params.id);

        {
            id !== "" &&
                axios.get(`https://chiming-birds-backend.onrender.com/api/birds/getbird/${id}`)
                    .then(res => {
                        console.log(res.data.bird[0])
                        setscientific_name(res.data.bird[0].scientific_name);
                        setcolor(res.data.bird[0].color);
                        setheight(res.data.bird[0].height);
                        setweight(res.data.bird[0].weight);
                        setdomain(res.data.bird[0].domain);
                        setkingdom(res.data.bird[0].kingdom);
                        setphylum(res.data.bird[0].phylum);
                        setclass1(res.data.bird[0].class1);
                        setorder(res.data.bird[0].order);
                        setfamily(res.data.bird[0].family);
                        setgenus(res.data.bird[0].genus);
                        setspecies(res.data.bird[0].species);
                        setimglink(res.data.bird[0].img_link);
                    })
        }
    }, [id])


    return (
        <div className='d-flex flex-column'>
            <img src={imglink} className='bird-img my-5' />
            <h3 className='mx-auto my-2 '>{scientific_name}</h3>
            {/* <h3 className='mx-auto my-2 '>Scientific Name</h3> */}
            <div className='mx-auto my-4'>

                <p>Height : {height} </p>
                <p>Weight : {weight} </p>
                <p>Color : {color} </p>
                <p>Domain : {domain} </p>
                <p>Kingdom : {kingdom} </p>
                <p>Phylum : {phylum} </p>
                <p>Class : {class1} </p>
                <p>Order : {order} </p>
                <p>Family : {family} </p>
                <p>Genus : {genus} </p>
                <p>Species : {species} </p>
            </div>
        </div>
    )
}

export default Bird
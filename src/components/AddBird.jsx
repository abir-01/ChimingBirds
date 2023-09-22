import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AddBird = () => {

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
    const [added, setadded] = useState(0);


    const bodyParameters = {
        scientific_name: scientific_name,
        color: color,
        height: height,
        weight: weight,
        domain: domain,
        kingdom: kingdom,
        phylum: phylum,
        class1: class1,
        order: order,
        family: family,
        genus: genus,
        species: species,
        img_link:imglink
    }

    const addnewbird = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5001/api/birds/addbird", bodyParameters)
            .then((res) => {
                console.log(res.data);
                setadded(1);
                setTimeout(() => {
                    setadded(0);
                }, 2500);
                setscientific_name("");
                setcolor("");
                setheight("");
                setweight("");
                setdomain("");
                setkingdom("");
                setphylum("");
                setclass1("");
                setorder("");
                setfamily("");
                setgenus("");
                setspecies("");
                setimglink("");
            })
            .catch(err => console.log(err));
    }


    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className="d-flex">
                <div>
                    <label htmlFor="scientific" className='mx-4 mt-5'>Scientific Name : </label>
                    <input required type="text" id="scientific" value={scientific_name} onChange={(e) => setscientific_name(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="color" className='mx-4 mt-5'>Color : </label>
                    <input type="text" id="color" value={color} onChange={(e)=>setcolor(e.target.value)}/>
                </div>

            </div>
            <div className="d-flex">
                <div>
                    <label htmlFor="height" className='mx-4 mt-5'>Height : </label>
                    <input type="text" id="height" value={height} onChange={(e)=>setheight(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="weight" className='mx-4 mt-5'>Weight : </label>
                    <input type="text" id="weight" value={weight} onChange={(e)=>setweight(e.target.value)}/>
                </div>

            </div>
            <div className="d-flex">
                <div>
                    <label htmlFor="domain" className='mx-4 mt-5'>Domain : </label>
                    <input type="text" id="domain" value={domain} onChange={(e) => setdomain(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="kingdom" className='mx-4 mt-5'>Kingdom : </label>
                    <input type="text" id="kingdom" value={kingdom} onChange={(e) => setkingdom(e.target.value)} />
                </div>

            </div>
            <div className="d-flex">
                <div>
                    <label htmlFor="phylum" className='mx-4 mt-5'>Phylum: </label>
                    <input type="text" id="phylum" value={phylum} onChange={(e) => setphylum(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="class1" className='mx-4 mt-5'>Class: </label>
                    <input type="text" id="class1" value={class1} onChange={(e) => setclass1(e.target.value)} />
                </div>

            </div>
            <div className="d-flex">
                <div>
                    <label htmlFor="order" className='mx-4 mt-5'>Order: </label>
                    <input type="text" id="order" value={order} onChange={(e) => setorder(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="family" className='mx-4 mt-5'>Family : </label>
                    <input type="text" id="family" value={family} onChange={(e) => setfamily(e.target.value)} />
                </div>

            </div>
            <div className="d-flex">
                <div>
                    <label htmlFor="genus" className='mx-4 mt-5'>Genus : </label>
                    <input type="text" id="genus" value={genus} onChange={(e) => setgenus(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="species" className='mx-4 mt-5'>species: </label>
                    <input type="text" id="species" value={species} onChange={(e) => setspecies(e.target.value)} />
                </div>

            </div>
            <div>
                <label htmlFor="imglink" className='mx-4 mt-5'>Image Link : </label>
                <input type="text" id="imglink" value={imglink} onChange={(e) => setimglink(e.target.value)} />
            </div>

            <button onClick={(e) => addnewbird(e)} className='px-4 py-2 bg-primary my-5 text-light border-0 rounded'>{added === 0 ? "Submit" : "Submitted successfully !!"}</button>
        </div>
    )
}

export default AddBird
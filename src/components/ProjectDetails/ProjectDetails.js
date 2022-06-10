import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const {id} = useParams();
    const [projects1, setProjects1] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/project/${id}`).then(res=>res.json()).then(data=>setProjects1(data))
    }, [])
    const { name, url, smDescription, Description, clientCode, serverCode, img, img2, img3, technology } = projects1;
    

    return (
        <div className=''>
            <div>
                <h2 className=' text-center my-20 text-secondary lg:text-6xl font-bold'>"{name} Website"</h2>
                <h2 className=' text-center my-20 text-white lg:text-3xl font-bold'> <span className='text-yellow-200'>Technologies :</span> {technology} </h2>
            </div>
            <div>
                <img className='lg:w-1/2 my-10 border border-secondary p-5 border-2 mx-auto w-3/4 ' src={img} alt="" />
            </div>
            <div>
                <img className='lg:w-1/2 my-10 border border-secondary p-5 border-2 mx-auto w-3/4 ' src={img2} alt="" />
            </div>
            <div>
                <img className='lg:w-1/2 my-10 border border-secondary p-5 border-2 mx-auto w-3/4 ' src={img3} alt="" />
            </div>
            <div className='w-1/2 mx-auto'>
                <h2 className=' text-center my-20 text-white lg:text-3xl font-bold'> <span className='text-yellow-200'>Description :</span> {Description} </h2>
                <div className='mx-auto text-center mb-20'>
                <a href={url} class="btn btn-xs  sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-secondary m-3">Go To Website</a>
                <a href={clientCode} class="btn btn-xs  sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-primary m-3">Client Site Code</a>
                {serverCode && <a href={serverCode} class="btn btn-xs  sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-accent m-3">Server Code Link</a >}
                </div>
            </div>
            
        </div>
    );
};

export default ProjectDetails;

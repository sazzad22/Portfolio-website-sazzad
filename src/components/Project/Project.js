import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Project = ({ project, }) => {
    const navigate = useNavigate();
    const { _id,name, url, smDescription, clientCode, serverCode, technology,img } = project;

    const handleNavigate = id => {
        navigate(`/projectdetails/${id}`)
        console.log('clicked',id);
    }
    return (
        <div className='text-white border border-yellow-500 p-1 hover:scale-110 ease-in-out duration-300'>
            <div>
                <img className='w-full' src={img} alt="" />
            </div>
            <div>
                <h2 className='text-4xl my-4 text-yellow-300'>{name}</h2>
                <p>{smDescription}</p>
                
                <p className='my-5'> <span className='lg:text-xl font-bold ' >Technologies :</span> {technology}</p>
                <a href={url} class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-secondary m-3">Go To Website</a>
                <a href={clientCode} class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-primary m-3">Client Site Code</a>
                {serverCode && <a href={serverCode} class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-accent m-3">Server Code Link</a >}
                
                <button onClick={()=>handleNavigate(_id)} className="bg-sky-500 rounded-md px-2 py-1 text-white ">Project Details</button>
            </div>
        </div>
    );
};

export default Project;

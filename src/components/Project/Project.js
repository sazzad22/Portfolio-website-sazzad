import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Project = ({ project, }) => {
    const navigate = useNavigate();
    const { _id,name, url, smDescription, clientCode, serverCode, technology,img } = project;

    const handleNavigate = id => {
        navigate(`/api/v2/project/${id}`)
        console.log('clicked',id);
    }
    return (
        <div className='text-white border border-yellow-500 p-1 hover:scale-110 ease-in-out duration-300'>
            <div>
                <img className='w-full' src={img} alt="" />
            </div>
            <div className='px-10'>
                <h2 className='text-4xl my-4 text-yellow-300 '>{name}</h2>
                <p className='lg:text-2xl'>{smDescription}</p>
                
                <p className='my-5 lg:text-2xl'> <span className='lg:text-xl font-bold ' >Technologies :</span> {technology}</p>
                <a href={url} class="btn md:btn-md lg:btn-lg btn-outline btn-secondary my-3 ml-3">Go To Website</a>
                <a href={clientCode} class="btn md:btn-md lg:btn-lg btn-outline btn-primary my-3 ml-3">Client Site Code</a>
                {serverCode && <a href={serverCode} class="btn md:btn-md lg:btn-lg btn-outline btn-accent my-3 ml-3">Server Code Link</a >}
                
                <button onClick={()=>handleNavigate(_id)} className="btn btn-outline md:btn-md lg:btn-lg my-3 ml-3 btn-sky-300 rounded-md px-2 py-3 text-white ">Project Details</button>
            </div>
        </div>
    );
};

export default Project;

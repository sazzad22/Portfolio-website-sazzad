import React from 'react';

const ProjectDetails = ({ project,  }) => {
    const { name, url, smDescription, clientCode, serverCode, technology,img } = project;
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
                {serverCode && <a href={serverCode} class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-accent m-3">Server Code Link</a > }
            </div>
        </div>
    );
};

export default ProjectDetails;

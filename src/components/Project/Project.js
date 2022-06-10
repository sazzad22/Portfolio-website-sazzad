import React from 'react';

const Project = ({ project, img }) => {
    const { name, url, smDescription, clientCode, serverCode, technology } = project;
    return (
        <div className='text-white border border-yellow-500 p-1 hover:scale-110 ease-in-out duration-300'>
            <div>
                <img className='w-full' src={img} alt="" />
            </div>
            <div>
                <h2 className='text-4xl my-4 text-yellow-300'>{name}</h2>
                <p>{smDescription}</p>
                <p>{url}</p>
                <p>{clientCode}</p>
                <p>{serverCode}</p>
                <p>{technology}</p>
                <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-secondary m-3">Go To Website</button>
                <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-primary m-3">Go To Website</button>
                <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-accent m-3">Go To Website</button>
            </div>
        </div>
    );
};

export default Project;

import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() =>{
        fetch('https://job-portal-server-lyart.vercel.app/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    })
    return (
        <div className='mt-12 mb-20'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}>

                    </HotJobCard>)
                }
            </div>
            
        </div>
    );
};

export default HotJobs;
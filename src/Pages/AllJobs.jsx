import React, { useState } from 'react';
import UseJobs from '../hooks/UseJobs';
import HotJobCard from './Home/HotJobCard';
import { BiSearch } from 'react-icons/bi';

const AllJobs = () => {
    const [sort, setSort] = useState(false);
    const [minSalary, setMinSalary] = useState('');
    const [maxSalary, setMaxSalary] = useState('');
    const [search, setSearch] = useState('');
    const { jobs, loading } = UseJobs(sort, search,minSalary,maxSalary);

    // console.log(sort);

    if (loading) {
        return <h2>Job is loading</h2>
    }

    return (
        <div>
            <h1 className='py-5 text-4xl font-bold text-center'>All Jobs</h1>
            <div className='w-11/12 mx-auto bg-base-200 py-5 px-3 flex items-center gap-4'>
                <button onClick={() => setSort(!sort)} className={`btn btn-neutral ${sort && "btn-success"}`}>
                    {sort ? "Sorted by Salary" : "Sort By Salary"}</button>
                <BiSearch></BiSearch>
                <input onChange={(e) => setSearch(e.target.value)}
                    type="text" className='input w-full max-w-2xl'
                    placeholder='Search Jobs by Location' />

                <div className='space-y-3'>
                    <input onChange={(e) => setMinSalary(e.target.value)}
                        type="text" className='input w-full max-w-xs'
                        placeholder='Min Salary' />

                     <input onChange={(e) => setMaxSalary(e.target.value)}
                        type="text" className='input w-full max-w-xs'
                        placeholder='Max Salary' />   
                </div>
            </div>
            <div className='grid py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}>

                    </HotJobCard>)
                }
            </div>
        </div>
    );
};

export default AllJobs;

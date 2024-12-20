import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const { _id, title, company, applicationDeadline } = useLoaderData();
    // console.log(job);

    return (
        <div className='m-10'>
            <h2>Job Details for {title}</h2>
            <p>apply for: {company}</p>
            <p>deadline: {applicationDeadline}</p>
            <Link to={`/JobApply/${_id}`}>
                <button className='btn btn-primary mt-3'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;
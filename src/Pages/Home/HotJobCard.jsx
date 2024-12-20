import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { LiaMapMarkerAltSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className='flex gap-3 mt-3'>
                <figure>
                    <img
                        src={company_logo}
                        className='w-12 ml-4'
                        alt="Shoes" />
                </figure>
                <div>
                    <h3 className='text-2xl'>{company}</h3>
                    <p className='flex gap-1 text-base items-center'><LiaMapMarkerAltSolid />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="badge badge-secondary">NEW</div>
                <p>{description}</p>
                <div className='flex gap-2 flex-wrap'>
                    {
                        requirements.map((skill , index) => <p key={index} className='border rounded-md text-center px-2
                        hover:text-blue-500 bg-gray-200'>
                            {skill}
                        </p>)
                    }
                </div>
                <div className="card-actions justify-end items-center mt-2">
                    <p className='flex items-center'>Salary: <FaDollarSign></FaDollarSign> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-sm btn-primary">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;
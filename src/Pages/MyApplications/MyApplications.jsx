import { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import axios from "axios";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";


const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    const axiosSecure = UseAxiosSecure();

    useEffect(() => {
        // fetch(`https://job-portal-server-lyart.vercel.app/job-application?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setJobs(data))

        // axios.get(`https://job-portal-server-lyart.vercel.app/job-application?email=${user.email}`, {
        // withCredentials: true })
        // .then(res => setJobs(res.data))

        axiosSecure.get(`/job-application?email=${user.email}`)
        .then(res => setJobs(res.data));

    }, [user.email])

    return (
        <div>
            <h2 className="text-3xl text-center mb-3">My Applications: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <th className=""> Logo & Company & Location</th>
                            <th>Job Title</th>
                            <th>Job Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map(job => <tr key={job._id}>
                                {/* <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th> */}
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.company}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {job.title}
                                </td>
                                <td>{job.category}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">X</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyApplications;
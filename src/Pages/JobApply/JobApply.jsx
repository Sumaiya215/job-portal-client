import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";


const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    console.log(id, user);

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const LinkedIn = form.LinkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        // console.log(LinkedIn, github, resume);

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            LinkedIn,
            github,
            resume
        }

        fetch('https://job-portal-server-lyart.vercel.app/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myApplications')
                }
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content ">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={submitJobApplication} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">LinkedIn URL</span>
                            </label>
                            <input type="url" name="LinkedIn" placeholder="LinkedIn URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Github URL</span>
                            </label>
                            <input type="url" name="github" placeholder="Github URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume URL</span>
                            </label>
                            <input type="url" name="resume" placeholder="Resume URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Apply</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;
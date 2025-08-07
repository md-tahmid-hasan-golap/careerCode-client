import React from "react";
import { Link, useParams } from "react-router";
import UseContext from "../../Huks/UseContext";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jonId } = useParams();
  const { user } = UseContext();
  console.log(jonId, user);
  const handleApplyFrom = (e) => {
    e.preventDefault();
    const from = e.target;
    const linkedin = from.linkedin.value;
    const gitHub = from.gitHub.value;
    const resume = from.resume.value;

    console.log(linkedin, gitHub, resume);

    const application = {
      jonId,
      applicant: user.email,
      linkedin,
      gitHub,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Your Application Has Been Submitted!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="w-full max-w-md bg-base-200 p-8 rounded-2xl shadow-lg border border-base-300">
        <h2 className="text-3xl font-semibold text-center mb-6 text-blue-700">
          Apply for This Job : <Link to={`/jobs/${jonId}`}>Details</Link>
        </h2>
        <form onSubmit={handleApplyFrom}>
          <div className="form-control mb-4">
            <label className="label font-medium">LinkedIn Profile</label>
            <input
              type="url"
              name="linkedin"
              className="input input-bordered"
              placeholder="https://linkedin.com/in/yourname"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label font-medium">GitHub Profile</label>
            <input
              type="url"
              name="gitHub"
              className="input input-bordered"
              placeholder="https://github.com/yourname"
              required
            />
          </div>

          <div className="form-control mb-6">
            <label className="label font-medium">Resume Link</label>
            <input
              type="url"
              name="resume"
              className="input input-bordered"
              placeholder="Google Drive / Portfolio Resume URL"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApply;

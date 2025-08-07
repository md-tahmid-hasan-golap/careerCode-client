import React, { use } from "react";
import JobApplicationRaw from "./JobApplicationRaw";

const ApplicationListS = ({ myApplicationPromised }) => {
  const applications = use(myApplicationPromised);
  return (
    <div>
      <h2 className="text-3xl text-center my-4">
        Job Application SDo Far : {applications.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <JobApplicationRaw
                key={application._id}
                index={index}
                application={application}
              ></JobApplicationRaw>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationListS;

import React, { useEffect, useState } from "react";
import JobCard from "../Shared/JobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  //   console.log(jobs);
  return (
    <div className="text-center mb-7">
      <h2 className="mb-7 text-4xl font-semibold">
        🚀 Explore the Hottest Jobs Right Now
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;

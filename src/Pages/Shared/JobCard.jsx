import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    location,
    title,
    company,
    description,
    requirements,
    company_logo,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex gap-2">
        {" "}
        <figure>
          <img src={company_logo} className="w-16" alt="Shoes" />
        </figure>
        <div>
          <h2 className="text-4xl">{company}</h2>
          <p className="flex items-center gap-1">
            <FaMapMarkerAlt size={25} /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary : {salaryRange.min} - {salaryRange.max} -{" "}
          {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`} className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

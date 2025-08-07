import React from "react";
import { Link, useLoaderData } from "react-router-dom"; // updated import

const JobDetails = () => {
  const job = useLoaderData();

  const {
    _id,
    applicationDeadline,
    category,
    jobType,
    location,
    title,
    company,
    description,
    requirements,
    company_logo,
    salaryRange,
    responsibilities,
    hr_name,
    hr_email,
    status,
  } = job;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-24 h-24 object-cover rounded-xl shadow-md"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-1 text-blue-700">
            {title}
          </h2>
          <p className="text-gray-600 text-lg">{company}</p>
          <div className="text-sm text-gray-500">
            📍 {location} • 🗂 {category} • 🕒 {jobType}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">
          Job Description
        </h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">
          Requirements
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">
          Responsibilities
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>

      {/* Extra Info */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-gray-100 p-5 rounded-xl">
          <h4 className="text-lg font-semibold mb-2">💰 Salary</h4>
          <p className="text-gray-700">
            ৳{salaryRange.min.toLocaleString()} - ৳
            {salaryRange.max.toLocaleString()} BDT
          </p>
        </div>
        <div className="bg-gray-100 p-5 rounded-xl">
          <h4 className="text-lg font-semibold mb-2">📅 Deadline</h4>
          <p className="text-gray-700">{applicationDeadline}</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-xl">
          <h4 className="text-lg font-semibold mb-2">📨 Contact HR</h4>
          <p className="text-gray-700">
            {hr_name} <br />
            <a href={`mailto:${hr_email}`} className="text-blue-600 underline">
              {hr_email}
            </a>
          </p>
        </div>
        <div className="bg-gray-100 p-5 rounded-xl">
          <h4 className="text-lg font-semibold mb-2">📌 Status</h4>
          <p
            className={`inline-block px-3 py-1 rounded-full text-white text-sm ${
              status === "active" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {status}
          </p>
        </div>
      </div>

      {/* Apply Button */}
      <div className="text-center">
        <Link to={`/jobApply/${_id}`}>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            {" "}
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;

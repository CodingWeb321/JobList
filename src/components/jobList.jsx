import JobCard from "./JobCard";

const JobList = ({ jobs, onEdit, onDelete }) => {
  return (
    <div className='job-list-container'>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard key={job.id} job={job} onEdit={onEdit} onDelete={onDelete} />
        ))
      ) : (
        <p className='no-results-message'>
          Sorry, no jobs match your search or filter criteria.
        </p>
      )}
    </div>
  );
};

export default JobList;

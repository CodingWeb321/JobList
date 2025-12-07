const JobCard = ({ job, onEdit, onDelete }) => {
  const {
    id,
    title,
    company,
    postedDate,
    jobType,
    employmentType,
    seniorityLevel,
    location,
    salary,
  } = job;

  const formatSalary = (amount) => {
    return `$${amount.toLocaleString()}`;
  };

  return (
    <div className='job-card'>
      <div className='job-header-section'>
        <div className='job-logo-placeholder'>{company.charAt(0)}</div>
        <div className='job-title-info'>
          <div className='job-title-row'>
            <h3>{title}</h3>
            <span className='posted-date'>{postedDate}</span>
          </div>
          <p className='company-name'>{company}</p>
        </div>
      </div>

      <div className='job-details-section'>
        <span className='detail-tag employment-tag'>{employmentType}</span>
        <span className='detail-tag level-tag'>{seniorityLevel}</span>
      </div>

      <div className='location-salary-row'>
        <span className='location'>{location}</span>
        <span className='salary'>{formatSalary(salary)}</span>
      </div>

      <div className='job-action-footer'>
        <span className='detail-tag job-type-tag-bottom'>{jobType}</span>

        <div className='job-actions'>
          <button onClick={() => onEdit(job)} className='action-btn edit-btn'>
            ✏️ Edit
          </button>
          <button
            onClick={() => onDelete(id)}
            className='action-btn delete-btn'
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

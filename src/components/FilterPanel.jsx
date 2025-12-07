const jobTypeOptions = [
  "All",
  "Developer",
  "Engineer",
  "Design",
  "Marketing",
  "Architect",
];
const employmentTypeOptions = [
  "All",
  "Full Time",
  "Part Time",
  "Contract",
  "Internship",
  "Freelance",
];
const seniorityLevelOptions = [
  "All",
  "Intern",
  "Junior",
  "Mid-level",
  "Senior",
];
const locationOptions = ["All", "Remote", "United States", "Hong Kong"];

const FilterPanel = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <aside className='filter-panel'>
      <h2>Filter</h2>

      <div className='filter-group search-box'>
        <label htmlFor='searchQuery'>Search Jobs</label>
        <input
          type='text'
          id='searchQuery'
          name='searchQuery'
          placeholder='Job Title or Company...'
          value={filters.searchQuery}
          onChange={handleFilterChange}
        />
      </div>

      <div className='filter-group'>
        <label>Job Type</label>
        <select
          name='jobType'
          value={filters.jobType}
          onChange={handleFilterChange}
        >
          {jobTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className='filter-group'>
        <label>Employment Type</label>
        <select
          name='employmentType'
          value={filters.employmentType}
          onChange={handleFilterChange}
        >
          {employmentTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className='filter-group'>
        <label>Seniority Level</label>
        <select
          name='seniorityLevel'
          value={filters.seniorityLevel}
          onChange={handleFilterChange}
        >
          {seniorityLevelOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className='filter-group'>
        <label>Location</label>
        <select
          name='location'
          value={filters.location}
          onChange={handleFilterChange}
        >
          {locationOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
};

export default FilterPanel;

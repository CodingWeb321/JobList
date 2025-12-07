import { useState, useEffect } from "react";

const jobTypeOptions = [
  "Developer",
  "Engineer",
  "Design",
  "Marketing",
  "Architect",
];
const employmentTypeOptions = [
  "Full Time",
  "Part Time",
  "Contract",
  "Internship",
  "Freelance",
];
const seniorityLevelOptions = ["Intern", "Junior", "Mid-level", "Senior"];
const locationOptions = ["Remote", "United States", "Hong Kong"];

const initialFormState = {
  title: "",
  company: "",
  jobType: jobTypeOptions[0],
  employmentType: employmentTypeOptions[0],
  seniorityLevel: seniorityLevelOptions[0],
  location: locationOptions[0],
  salary: 0,
};

const JobForm = ({ jobToEdit, onSubmit, onClose }) => {
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (jobToEdit) {
      setFormData(jobToEdit);
    } else {
      setFormData(initialFormState);
    }
  }, [jobToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "salary" ? parseFloat(value) || 0 : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.company || formData.salary <= 0) {
      alert("Please fill in Job Title, Company Name, and Salary.");
      return;
    }

    onSubmit(formData);
  };

  const isEditMode = !!jobToEdit;

  return (
    <form onSubmit={handleSubmit} className='job-form'>
      <div className='form-group-grid'>
        <div className='form-group full-width'>
          <label>Job Title *</label>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label>Job Type *</label>
          <select
            name='jobType'
            value={formData.jobType}
            onChange={handleChange}
            required
          >
            {jobTypeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <label>Employment Type *</label>
          <select
            name='employmentType'
            value={formData.employmentType}
            onChange={handleChange}
            required
          >
            {employmentTypeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className='form-group'>
          <label>Seniority Level *</label>
          <select
            name='seniorityLevel'
            value={formData.seniorityLevel}
            onChange={handleChange}
            required
          >
            {seniorityLevelOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <label>Salary (USD/Month) *</label>
          <input
            type='number'
            name='salary'
            value={formData.salary}
            onChange={handleChange}
            required
            min='1000'
          />
        </div>

        <div className='form-group'>
          <label>Company Name *</label>
          <input
            type='text'
            name='company'
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Company Logo (Optional)</label>
          <input type='file' name='logo' disabled={isEditMode} />
        </div>

        <div className='form-group full-width'>
          <label>Company Location *</label>
          <select
            name='location'
            value={formData.location}
            onChange={handleChange}
            required
          >
            {locationOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='form-actions'>
        <button type='button' onClick={onClose} className='btn btn-cancel'>
          Cancel
        </button>
        <button
          type='submit'
          className={`btn ${isEditMode ? "btn-save" : "btn-publish"}`}
        >
          {isEditMode ? "Save Changes" : "Publish"}
        </button>
      </div>
    </form>
  );
};

export default JobForm;

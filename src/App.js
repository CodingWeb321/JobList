import React, { useState, useEffect } from "react";
import axios from "axios";
import JobList from "./components/JobList";
import Header from "./components/Header";
import FilterPanel from "./components/FilterPanel";
import JobForm from "./components/JobForm";
import Modal from "./components/reusable/Modal";
import "./styles/main.css";

const API_URL = "/jobs"; // Axios calls this via the proxy set in package.json

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [filters, setFilters] = useState({
    searchQuery: "",
    jobType: "All",
    employmentType: "All",
    seniorityLevel: "All",
    location: "All",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  //  DATA FETCH (Read/GET)
  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL);
      setJobs(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setIsLoading(false);
      alert(
        "Failed to load jobs. Check if JSON Server is running on port 5000."
      );
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // --- 2. FILTERING/SEARCH LOGIC (useEffect) ---
  useEffect(() => {
    let updatedJobs = [...jobs];

    // Search job list
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      updatedJobs = updatedJobs.filter(
        (job) =>
          job.title.toLowerCase().includes(query) ||
          job.company.toLowerCase().includes(query)
      );
    }

    // Apply filters
    if (filters.jobType !== "All") {
      updatedJobs = updatedJobs.filter(
        (job) => job.jobType === filters.jobType
      );
    }
    if (filters.employmentType !== "All") {
      updatedJobs = updatedJobs.filter(
        (job) => job.employmentType === filters.employmentType
      );
    }
    if (filters.seniorityLevel !== "All") {
      updatedJobs = updatedJobs.filter(
        (job) => job.seniorityLevel === filters.seniorityLevel
      );
    }
    if (filters.location !== "All") {
      updatedJobs = updatedJobs.filter(
        (job) => job.location === filters.location
      );
    }

    setFilteredJobs(updatedJobs);
  }, [jobs, filters]);

  // --- 3. CRUD Handlers ---

  // CREATE (POST)
  const handleAddJob = async (newJobData) => {
    const jobToSubmit = {
      ...newJobData,
      postedDate: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };

    try {
      await axios.post(API_URL, jobToSubmit);
      setIsModalOpen(false);
      fetchJobs(); // Re-fetch all jobs
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  // UPDATE (PUT)
  const handleEditJob = async (updatedJobData) => {
    try {
      await axios.put(`${API_URL}/${updatedJobData.id}`, updatedJobData);
      setIsModalOpen(false);
      setEditingJob(null);
      fetchJobs(); // Re-fetch all jobs
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  // DELETE (DELETE)
  const handleDeleteJob = async (jobId) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      try {
        await axios.delete(`${API_URL}/${jobId}`);
        fetchJobs(); // Re-fetch all jobs
      } catch (error) {
        console.error("Error deleting job:", error);
      }
    }
  };

  const openEditModal = (job) => {
    setEditingJob(job);
    setIsModalOpen(true);
  };

  return (
    <div className='app-container'>
      <Header
        openAddModal={() => {
          setEditingJob(null);
          setIsModalOpen(true);
        }}
      />

      <main className='content-area'>
        <h1 className='main-title'>
          The Most Complete Job Listings In The World
        </h1>
        <p className='subtitle'>Discover the job you want at top companies</p>

        {isLoading ? (
          <p className='loading-message'>Loading jobs from local API...</p>
        ) : (
          <>
            <p className='job-count'>{filteredJobs.length} Jobs</p>
            <div className='main-layout'>
              <FilterPanel filters={filters} setFilters={setFilters} />
              <JobList
                jobs={filteredJobs}
                onEdit={openEditModal}
                onDelete={handleDeleteJob}
              />
            </div>
          </>
        )}
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <JobForm
          jobToEdit={editingJob}
          onSubmit={editingJob ? handleEditJob : handleAddJob}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default App;

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import JobList from './components/JobList';
import Pagination from './components/Pagination';
import JobForm from './components/JobForm';
import Footer from './components/Footer';
import { initialJobs } from './data/job';

function App() {
  const [jobs, setJobs] = useState(initialJobs);
  
  // State Filter, Search, Sort & Pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // State Edit Modal
  const [editingJob, setEditingJob] = useState(null);

  // 1. Logika Search & Filter
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = filterLocation === '' || job.location === filterLocation;
    const matchesStatus =
      filterStatus === '' ||
      (filterStatus === 'open' && job.status === true) ||
      (filterStatus === 'closed' && job.status === false);

    return matchesSearch && matchesLocation && matchesStatus;
  });

  // 2. Logika Sorting
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === 'name-asc') return a.title.localeCompare(b.title);
    if (sortBy === 'salary-low') return a.salary - b.salary;
    if (sortBy === 'salary-high') return b.salary - a.salary;
    return 0;
  });

  // 3. Logika Pagination (Math.ceil)
  const totalPages = Math.ceil(sortedJobs.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = sortedJobs.slice(indexOfFirstItem, indexOfLastItem);

  // 4. Logika Save Editing (.map)
  const handleSaveJob = (updatedJob) => {
    setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
    setEditingJob(null);
  };

  return (
    <div className="bg-slate-100 min-h-screen font-sans flex flex-col justify-between">
      <div>
        <Header />
        <Hero />
        
        <main className="px-6 py-8">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={(val) => { setSearchTerm(val); setCurrentPage(1); }}
            filterLocation={filterLocation}
            setFilterLocation={(val) => { setFilterLocation(val); setCurrentPage(1); }}
            filterStatus={filterStatus}
            setFilterStatus={(val) => { setFilterStatus(val); setCurrentPage(1); }}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          <JobList jobs={currentJobs} onEdit={(job) => setEditingJob(job)} />

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </main>
      </div>

      {editingJob && (
        <JobForm
          job={editingJob}
          onSave={handleSaveJob}
          onClose={() => setEditingJob(null)}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
import JobCard from './JobCard';

function JobList({ jobs, onEdit }) {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 max-w-5xl mx-auto my-6">
        <p className="text-4xl mb-2">🔍</p>
        <p className="text-lg font-semibold text-slate-700">Data lowongan tidak ditemukan</p>
        <p className="text-sm text-slate-500">Coba ubah kata kunci pencarian atau reset filter kamu.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default JobList;
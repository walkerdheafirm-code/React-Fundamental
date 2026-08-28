function JobCard({ job, onEdit }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="text-lg font-bold text-blue-600 leading-snug">{job.title}</h3>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${job.status ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {job.status ? 'Open' : 'Closed'}
          </span>
        </div>
        
        <p className="text-sm font-semibold text-slate-700 mb-3">{job.company}</p>

        <div className="text-sm text-slate-500 space-y-1 mb-4">
          <p>📍 {job.location}</p>
          <p>💰 Rp {job.salary.toLocaleString('id-ID')}</p>
        </div>
      </div>

      <button
        onClick={() => onEdit(job)}
        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 rounded-lg transition-colors text-sm cursor-pointer"
      >
        ✏️ Edit Lowongan
      </button>
    </div>
  );
}

export default JobCard;
function JobCard({ title, company, location, salary, type, level, accentColor, tags }) {
  return (
    <div style={styles.card}>
      {/* Header Kartu */}
      <div style={styles.cardHeader}>
        <span style={{ ...styles.typeBadge, backgroundColor: `${accentColor}15`, color: accentColor }}>
          {type}
        </span>
        <span style={styles.levelBadge}>{level}</span>
      </div>

      {/* Judul & Perusahaan */}
      <h3 style={{ ...styles.jobTitle, color: '#0f172a' }}>{title}</h3>
      <p style={styles.companyName}>{company}</p>

      {/* Info Detail */}
      <div style={styles.infoList}>
        <div style={styles.infoItem}>
          <span style={styles.icon}>📍</span>
          <span>{location}</span>
        </div>
        <div style={styles.infoItem}>
          <span style={styles.icon}>💰</span>
          <span style={styles.salaryText}>{salary} / bulan</span>
        </div>
      </div>

      {/* Skill Tags */}
      {tags && (
        <div style={styles.tagContainer}>
          {tags.map((tag, idx) => (
            <span key={idx} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Tombol Aksi */}
      <button style={{ ...styles.button, backgroundColor: accentColor }}>
        Lihat Detail
      </button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '14px',
  },
  typeBadge: {
    fontSize: '12px',
    fontWeight: '700',
    padding: '4px 10px',
    borderRadius: '8px',
  },
  levelBadge: {
    fontSize: '12px',
    color: '#64748b',
    backgroundColor: '#f1f5f9',
    padding: '4px 8px',
    borderRadius: '6px',
    fontWeight: '500',
  },
  jobTitle: {
    fontSize: '18px',
    fontWeight: '700',
    margin: '0 0 4px 0',
  },
  companyName: {
    fontSize: '14px',
    color: '#64748b',
    margin: '0 0 16px 0',
    fontWeight: '500',
  },
  infoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '16px',
    backgroundColor: '#f8fafc',
    padding: '12px',
    borderRadius: '10px',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    color: '#334155',
  },
  salaryText: {
    fontWeight: '700',
    color: '#0f172a',
  },
  icon: {
    fontSize: '14px',
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginBottom: '20px',
  },
  tag: {
    fontSize: '11px',
    backgroundColor: '#f1f5f9',
    color: '#475569',
    padding: '3px 8px',
    borderRadius: '6px',
    fontWeight: '500',
  },
  button: {
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    padding: '12px 0',
    width: '100%',
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '14px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
};

export default JobCard;
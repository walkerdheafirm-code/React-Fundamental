import Header from './components/Header';
import Hero from './components/Hero';
import JobCard from './components/JobCard';
import Footer from './components/Footer';

function App() {
  // Data Lowongan Kerja Beragam dengan Warna Aksen Modern
  const jobsList = [
    {
      id: 1,
      title: 'UI/UX Designer',
      company: 'Tokopedia / GoTo Group',
      location: 'Jakarta (Hybrid)',
      salary: 'Rp 10.500.000',
      type: 'Hybrid',
      level: 'Mid Level',
      tags: ['Figma', 'User Research', 'Design System'],
      accentColor: '#4f46e5', // Indigo
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Bukalapak Tech Hub',
      location: 'Bandung',
      salary: 'Rp 12.000.000',
      type: 'Full-time',
      level: 'Senior',
      tags: ['React.js', 'TypeScript', 'Tailwind CSS'],
      accentColor: '#2563eb', // Blue
    },
    {
      id: 3,
      title: 'Data Analyst',
      company: 'Bank Central Asia (BCA)',
      location: 'Jakarta Pusat',
      salary: 'Rp 9.500.000',
      type: 'On-site',
      level: 'Entry Level',
      tags: ['SQL', 'Python', 'Tableau'],
      accentColor: '#059669', // Emerald
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'Traveloka Indonesia',
      location: 'Remote (Indonesia)',
      salary: 'Rp 16.000.000',
      type: 'Remote',
      level: 'Senior',
      tags: ['AWS', 'Docker', 'Kubernetes'],
      accentColor: '#7c3aed', // Violet
    },
    {
      id: 5,
      title: 'Product Manager',
      company: 'Ruanggutru Edutech',
      location: 'Jakarta Selatan',
      salary: 'Rp 14.500.000',
      type: 'Full-time',
      level: 'Mid Level',
      tags: ['Roadmap', 'Scrum', 'Agile'],
      accentColor: '#d97706', // Amber
    },
    {
      id: 6,
      title: 'Content Specialist',
      company: 'Shopee Indonesia',
      location: 'Jakarta Hub',
      salary: 'Rp 7.500.000',
      type: 'Full-time',
      level: 'Entry Level',
      tags: ['SEO', 'Copywriting', 'Social Media'],
      accentColor: '#e11d48', // Rose
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <Header />
        <main style={styles.content}>
          <Hero />

          <section style={styles.jobSection}>
            <div style={styles.sectionHeader}>
              <h3 style={styles.sectionTitle}>Daftar Lowongan Kerja Terbaru</h3>
              <span style={styles.countBadge}>{jobsList.length} Posisi tersedia</span>
            </div>

            <div style={styles.cardGrid}>
              {jobsList.map((job) => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  salary={job.salary}
                  type={job.type}
                  level={job.level}
                  tags={job.tags}
                  accentColor={job.accentColor}
                />
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#cbd5e1',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  wrapper: {
    width: '100%',
    maxWidth: '1100px',
    backgroundColor: '#f8fafc',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
  },
  content: {
    flex: 1,
    paddingBottom: '60px',
  },
  jobSection: {
    marginTop: '10px',
    padding: '0 32px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '28px',
    flexWrap: 'wrap',
    gap: '12px',
  },
  sectionTitle: {
    color: '#0f172a',
    fontSize: '20px',
    fontWeight: '800',
    margin: 0,
  },
  countBadge: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#64748b',
    backgroundColor: '#e2e8f0',
    padding: '4px 12px',
    borderRadius: '20px',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
  },
};

export default App;
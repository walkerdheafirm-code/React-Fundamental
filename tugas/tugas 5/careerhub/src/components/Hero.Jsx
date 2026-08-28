function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.statusPill}>
        <span style={styles.dot}></span> 150+ Lowongan Kerja Aktif
      </div>
      <h2 style={styles.title}>Eksplorasi Peluang Karir Masa Depan</h2>
      <p style={styles.description}>
        Jelajahi berbagai posisi teknis dan kreatif dari startup berkembang hingga perusahaan multinasional di Indonesia.
      </p>
    </section>
  );
}

const styles = {
  hero: {
    padding: '40px 24px 16px 24px',
    textAlign: 'center',
    maxWidth: '680px',
    margin: '0 auto',
  },
  statusPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#e0e7ff',
    color: '#3730a3',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '16px',
  },
  dot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#22c55e',
    borderRadius: '50%',
  },
  title: {
    fontSize: '26px',
    color: '#0f172a',
    marginBottom: '12px',
    fontWeight: '800',
    letterSpacing: '-0.3px',
  },
  description: {
    fontSize: '15px',
    color: '#64748b',
    lineHeight: '1.6',
    margin: 0,
  },
};

export default Hero;
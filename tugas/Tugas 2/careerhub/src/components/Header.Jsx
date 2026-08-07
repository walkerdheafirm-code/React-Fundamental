function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoBadge}>PRO</div>
      <h1 style={styles.title}>CareerHub</h1>
      <p style={styles.subtitle}>Temukan Karir Impianmu di Perusahaan Terbaik</p>
    </header>
  );
}

const styles = {
  header: {
    background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
    color: '#ffffff',
    padding: '48px 24px',
    textAlign: 'center',
    position: 'relative',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  logoBadge: {
    display: 'inline-block',
    backgroundColor: '#6366f1',
    color: '#ffffff',
    fontSize: '11px',
    fontWeight: '800',
    padding: '3px 8px',
    borderRadius: '12px',
    letterSpacing: '1px',
    marginBottom: '10px',
  },
  title: {
    margin: 0,
    fontSize: '32px',
    fontWeight: '800',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    margin: '8px 0 0 0',
    fontSize: '15px',
    color: '#c7d2fe',
    fontWeight: '400',
  },
};

export default Header;
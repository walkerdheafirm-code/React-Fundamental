function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2026 CareerHub • Platform Lowongan Kerja Modern</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#0f172a',
    color: '#94a3b8',
    textAlign: 'center',
    padding: '24px 20px',
    marginTop: 'auto',
    borderTop: '1px solid #1e293b',
  },
  text: {
    margin: 0,
    fontSize: '13px',
    fontWeight: '500',
  },
};

export default Footer;
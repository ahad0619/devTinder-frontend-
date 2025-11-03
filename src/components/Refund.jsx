const headingStyle = {
  color: '#95f9e4',
  fontWeight: 700,
  fontSize: '2.2rem',
  letterSpacing: '-0.01em',
  marginBottom: '22px'
};

const sectionHeading = {
  color: '#fff',
  fontWeight: 600,
  fontSize: '1.18rem',
  marginTop: '34px',
  marginBottom: '10px'
};

const text = {
  color: '#e3e7ee',
  fontSize: '1.05rem',
  lineHeight: 1.8
};

const listStyle = {
  color: '#e3e6e8',
  fontSize: '1.05rem',
  paddingLeft: '28px',
  marginBottom: '18px',
  lineHeight: 1.7
};

const contentBlock = {
  maxWidth: '680px',
  margin: '0 auto',
  padding: '50px 22px 80px 22px',
  background: 'rgba(23, 34, 48, 0.92)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.25)'
};

const RefundPolicy = () => (
  <main style={{
    minHeight: '100vh',
    background: 'linear-gradient(132deg, #172036 60%, #202234 100%)',
    fontFamily: 'Inter, Arial, sans-serif'
  }}>
    <article style={contentBlock}>
      <header>
        <h1 style={headingStyle}>Refund Policy</h1>
        <p style={text}>
          At devConnect, we strive to provide maximum satisfaction for your learning experience. We offer a <strong style={{ color: '#7ee0b7' }}>7 days “NO QUESTIONS ASKED”</strong> refund policy for all course purchases.
        </p>
      </header>
      <hr style={{ margin: '28px 0', borderColor: '#3a4e65', borderWidth: '1.5px 0 0' }} />
      <section>
        <h2 style={sectionHeading}>How it Works</h2>
        <ul style={listStyle}>
          <li>Request a refund at any time within 7 days of your course purchase.</li>
          <li>Simply email us at <a href="mailto:support@devconnect.asia" style={{ color: "#36a2f8", textDecoration: "underline" }}>support@devconnect.asia</a> to start the process.</li>
        </ul>
      </section>
      <section>
        <h2 style={sectionHeading}>Refund Rules & Details</h2>
        <ul style={listStyle}>
          <li>For course bundles, refunds apply to the entire bundle, not to individual courses within the bundle.</li>
          <li>After initiation, it takes approximately <strong style={{ color: '#9ecfff' }}>5–7 business days</strong> for funds to reflect in your account.</li>
          <li>Once a refund is processed, no further refunds will be provided for the same purchase or course.</li>
          <li>Purchases made with the “Gift-a-course” feature are <b>not eligible</b> for a refund.</li>
          <li>Refunds are provided only if you have valid access to the course.</li>
          <li>If your email ID is found suspicious or involved in malicious activity, refunds will <b>not</b> be initiated.</li>
        </ul>
      </section>
      <section>
        <h2 style={sectionHeading}>Contact Us</h2>
        <p style={text}>
          For any questions or concerns regarding our refund policy, feel free to contact us anytime at <a href="mailto:support@devconnect.asia" style={{ color: "#36a2f8", textDecoration: "underline" }}>support@devconnect.asia</a>.
        </p>
      </section>
    </article>
  </main>
);

export default RefundPolicy;

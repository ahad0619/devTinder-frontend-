import React from 'react';

const headerStyle = {
  color: '#7fd7fa',
  fontWeight: 700,
  fontSize: '2.2rem',
  letterSpacing: '-0.01em',
  marginBottom: '20px'
};

const subheaderStyle = {
  color: '#fff',
  fontWeight: 600,
  fontSize: '1.19rem',
  marginTop: '32px',
  marginBottom: '8px'
};

const text = {
  color: '#e7eaf0',
  fontSize: '1.08rem',
  lineHeight: 1.7
};

const cardStyle = {
  maxWidth: '468px',
  margin: '0 auto',
  padding: '44px 22px 60px 22px',
  background: 'rgba(18, 28, 38, 0.97)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.22)'
};

const ContactUs = () => (
  <main style={{
    minHeight: '100vh',
    background: 'linear-gradient(128deg, #1d283a 70%, #1d2e38 100%)',
    fontFamily: 'Inter, Arial, sans-serif'
  }}>
    <article style={cardStyle}>
      <header>
        <h1 style={headerStyle}>Contact Us</h1>
        <p style={text}>
          If you have any questions or need assistance, we’re here to help!
        </p>
      </header>
      <section>
        <h2 style={subheaderStyle}>Support Email</h2>
        <p style={text}>
          Write to us anytime at:
          <br />
          <a href="mailto:support@devconnect.asia" style={{ color: "#36bffd", textDecoration: "underline", fontWeight: 500 }}>
            support@devconnect.asia
          </a>
        </p>
      </section>
      <section>
        <h2 style={subheaderStyle}>Operational Address</h2>
        <p style={text}>
          Lucknow, Uttar Pradesh – 226010
        </p>
      </section>
      <section>
        <h2 style={subheaderStyle}>Response Time</h2>
        <p style={text}>
          You’ll receive a reply from our team within 24–48 business hours.
        </p>
      </section>
    </article>
  </main>
);

export default ContactUs;

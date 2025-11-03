import React from 'react';

const headingStyle = {
  color: '#74e3ee',
  fontWeight: 700,
  fontSize: '2.2rem',
  letterSpacing: '-0.01em',
  marginBottom: '20px'
};

const sectionHeading = {
  color: '#fff',
  fontWeight: 600,
  fontSize: '1.18rem',
  marginTop: '34px',
  marginBottom: '11px'
};

const text = {
  color: '#e4e8ec',
  fontSize: '1.07rem',
  lineHeight: 1.8
};

const cardStyle = {
  maxWidth: '700px',
  margin: '0 auto',
  padding: '50px 26px 70px 26px',
  background: 'rgba(17, 29, 39, 0.96)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.20)'
};

const AboutUs = () => (
  <main style={{
    minHeight: '100vh',
    background: 'linear-gradient(132deg, #172231 60%, #233046 100%)',
    fontFamily: 'Inter, Arial, sans-serif'
  }}>
    <article style={cardStyle}>
      <header>
        <h1 style={headingStyle}>About Us</h1>
        <p style={text}>
          <strong>devConnect</strong> is an edtech platform dedicated to empowering learners and innovators across India and beyond. We believe in creating transformative online experiences and democratizing access to high-quality tech education for everyone.
        </p>
      </header>
      <section>
        <h2 style={sectionHeading}>Our Mission</h2>
        <p style={text}>
          To bridge the gap between ambition and opportunity by providing practical, industry-relevant skills, learning paths, and career support—all designed to help students and professionals thrive in the digital age.
        </p>
      </section>
      <section>
        <h2 style={sectionHeading}>What We Offer</h2>
        <ul style={{ ...text, paddingLeft: '22px', marginBottom: '15px' }}>
          <li>Cutting-edge courses in software development, AI, and other emerging technologies</li>
          <li>Expert instructors and mentors from top companies and startups</li>
          <li>Accessible learning for all levels—beginner to advanced</li>
          <li>Community-driven support and engagement</li>
          <li>Transparent policies focused on quality and student satisfaction</li>
        </ul>
      </section>
      <section>
        <h2 style={sectionHeading}>Our Story</h2>
        <p style={text}>
          Founded by <strong>Akshay EdTech Pvt Ltd</strong> in Dehradun, Uttarakhand, devConnect grew from a simple vision: that talented and determined learners deserve better opportunities and a supportive, modern learning environment. Our journey is guided by a genuine commitment to ethics, accessibility, and results.
        </p>
      </section>
      <section>
        <h2 style={sectionHeading}>Connect With Us</h2>
        <p style={text}>
          Want to learn more or join our mission? Email us at <a href="mailto:support@devconnect.asia" style={{ color: "#36cfff", textDecoration: "underline", fontWeight: 500 }}>support@devconnect.asia</a>.<br/>
          Our team is always ready to listen, collaborate, and help you succeed.
        </p>
      </section>
    </article>
  </main>
);

export default AboutUs;

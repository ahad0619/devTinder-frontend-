import React from 'react';

const headingStyle = {
  color: '#69e4c6',
  fontWeight: 700,
  fontSize: '2.15rem',
  letterSpacing: '-0.01em',
  marginBottom: '18px'
};

const sectionHeading = {
  color: '#fff',
  fontWeight: 600,
  fontSize: '1.18rem',
  marginTop: '30px',
  marginBottom: '8px'
};

const text = {
  color: '#e2e6ee',
  fontSize: '1.05rem',
  lineHeight: 1.8
};

const listStyle = {
  color: '#e3e6e8',
  fontSize: '1.05rem',
  paddingLeft: '26px',
  marginBottom: '20px',
  lineHeight: 1.68
};

const contentBlock = {
  maxWidth: '820px',
  margin: '0 auto',
  padding: '48px 22px 80px 22px',
  background: 'rgba(19, 28, 39, 0.97)',
  borderRadius: '17px',
  boxShadow: '0 8px 34px rgba(0,0,0,0.21)'
};

const PrivacyPolicy = () => (
  <main style={{
    minHeight: '100vh',
    background: 'linear-gradient(132deg, #162431 70%, #233046 100%)',
    fontFamily: 'Inter, Arial, sans-serif'
  }}>
    <article style={contentBlock}>
      <header>
        <h1 style={headingStyle}>Privacy Policy</h1>
        <p style={text}>
          This Privacy Policy (“Policy”) describes how devConnect (“Platform”, “We”, “Us”, “Our”) collects, uses, maintains, and discloses information from users (“Learners”, “You”, “Your”). It outlines your privacy rights and choices. By using the Platform, providing Personal Information, or signaling agreement, you consent to this Policy and our Terms of Use. If you disagree, please discontinue use. Contact us anytime at <a href="mailto:support@devconnect.asia" style={{ color: "#62d8fa", textDecoration: "underline" }}>support@devconnect.asia</a>.
        </p>
      </header>
      <hr style={{ margin: '28px 0', borderColor: '#28445c', borderWidth: '1.5px 0 0' }} />

      <section>
        <h2 style={sectionHeading}>1. Personal Information</h2>
        <p style={text}>
          “Personal Information” means information that identifies a Learner, such as name, identification number, contact details, age, gender, photo, etc.
        </p>
        <p style={text}>
          “Sensitive Personal Information” includes: passwords, financial data, health data, government identifiers, sexual orientation, race, ethnicity, political/religious beliefs, account details, or any data classified as sensitive under applicable laws (IT Rules, GDPR, CCPA, and similar).
        </p>
      </section>

      <section>
        <h2 style={sectionHeading}>2. Information We Collect</h2>
        <ul style={listStyle}>
          <li><b>Personal Identifiable Information:</b> Name, email, and similar details submitted voluntarily. Refusal may limit access to certain features.</li>
          <li><b>Non-Personal Identifiable Information:</b> Browser type, language, referral site, date/time, operating system, provider details, etc.</li>
          <li><b>Cookies:</b> Used to enhance experience. You may restrict cookies in browser settings, but some features may not work if disabled.</li>
        </ul>
      </section>

      <section>
        <h2 style={sectionHeading}>3. How We Use and Share Information</h2>
        <ul style={listStyle}>
          <li>To enable Platform access, technical support, process purchases, verify user information, and resolve issues.</li>
          <li>To improve, customize, and secure the Platform, including for fraud prevention.</li>
          <li>To send offers, updates, product/service news, or respond to your queries. You may unsubscribe at any time.</li>
        </ul>
        <p style={text}>
          We do <span style={{ color: '#ff868b', fontWeight: 500 }}>not</span> sell or trade your Personal Information. Data may be shared in anonymized, aggregated forms for analytics or legal/investigative purposes only.
        </p>
      </section>

      <section>
        <h2 style={sectionHeading}>4. Your Choices</h2>
        <ul style={listStyle}>
          <li>Limit information you provide (may affect Platform access).</li>
          <li>Opt out of non-essential communications; some legal/security notifications are mandatory.</li>
          <li>Reject/remove cookies in your browser (some features may be unavailable).</li>
          <li>Email ID changes are not permitted after registration and course purchase.</li>
        </ul>
      </section>

      <section>
        <h2 style={sectionHeading}>5. Your Rights</h2>
        <ul style={listStyle}>
          <li><b>Right to Confirmation &amp; Access:</b> Request access to your Personal Information.</li>
          <li><b>Right to Correction:</b> Request rectification or update if inaccurate or incomplete.</li>
          <li><b>Right to be Forgotten:</b> Restrict further disclosure under certain circumstances.</li>
          <li><b>Right to Erasure:</b> Request deletion of your Personal Information (may result in account deletion).</li>
        </ul>
        <p style={text}>
          Rights may vary by jurisdiction; see <b>Country Specific Additional Rights</b>. Verification may be required.
        </p>
      </section>

      <section>
        <h2 style={sectionHeading}>6. Protection of Your Information</h2>
        <p style={text}>
          devConnect uses reasonable safeguards against unauthorized access, alteration, or destruction of data. Disclosure is limited to staff, contractors, or affiliates who “need to know” and are bound by confidentiality. Information may also be disclosed to comply with legal requests, orders, or to defend our rights, property, or safety.
        </p>
        <p style={text}>
          Prior notice is given when legally possible.
        </p>
      </section>

      <section>
        <h2 style={sectionHeading}>7. Third Party Websites</h2>
        <p style={text}>
          External links or content are governed by their own terms and privacy policies. devConnect is not responsible for practices or content on third party sites; please review their policies before engagement.
        </p>
      </section>

      <section>
        <h2 style={sectionHeading}>8. Cross-Border Data Transfer</h2>
        <p style={text}>
          Personal Information is primarily stored on Amazon Web Services (AWS) in India, and may be stored or processed in other countries as required by affiliates or service providers. By using the Platform, you consent to such cross-border transfer, subject to privacy laws of those jurisdictions.
        </p>
      </section>

      <section>
        <h2 style={sectionHeading}>9. Data Retention</h2>
        <p style={text}>
          Information is retained as needed for stated purposes or legal compliance. Some public content (e.g., comments) may not be fully deletable but will be anonymized. Modification and deletion rights can be exercised from the Platform or by emailing <a href="mailto:support@devconnect.asia" style={{ color: "#62d8fa", textDecoration: "underline" }}>support@devconnect.asia</a>.
        </p>
      </section>

      <section>
        <h2 style={sectionHeading}>10. Policy Updates</h2>
        <p style={text}>
          The Policy may be updated periodically, with changes reflected in the “updated date.” Please check back regularly for updates. The most recent Policy applies unless noted otherwise.
        </p>
      </section>

      <section>
        <h2 style={sectionHeading}>11. Contact &amp; Grievances</h2>
        <p style={text}>
          For privacy requests, questions, or grievances, email <a href="mailto:support@devconnect.asia" style={{ color: "#62d8fa", textDecoration: "underline" }}>support@devconnect.asia</a>.
        </p>
      </section>

      <hr style={{ margin: '32px 0', borderColor: '#28445c', borderWidth: '1.2px 0 0' }} />

      <section>
        <h2 style={sectionHeading}>Country Specific Additional Rights</h2>
        <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#9ecfff', fontWeight: 500, fontSize: '1.09rem', marginBottom: '12px' }}>For Indian Residents</h3>
            <ul style={listStyle}>
              <li>Right to Confirmation &amp; Access</li>
              <li>Right to Correction</li>
              <li>Right to Data Portability</li>
              <li>Right to be Forgotten</li>
              <li>Right to Erasure</li>
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#9ecfff', fontWeight: 500, fontSize: '1.09rem', marginBottom: '12px' }}>For UK, EU, EEA Residents</h3>
            <ul style={listStyle}>
              <li>Right to Access Personal Information</li>
              <li>Right to Rectification</li>
              <li>Right to Erasure</li>
              <li>Right to Object to Processing</li>
              <li>Right to Restrict Processing</li>
              <li>Right to Data Portability</li>
              <li>Right to Lodge a Complaint</li>
              <li>Right to Not Be Subject to Automated Decision Making</li>
            </ul>
            <p style={text}>
              <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener" style={{ color: '#62d8fa', textDecoration: "underline" }}>
                Find Supervisory Authority
              </a>
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#9ecfff', fontWeight: 500, fontSize: '1.09rem', marginBottom: '12px' }}>For California Residents (CCPA)</h3>
            <ul style={listStyle}>
              <li>Right to Access, Know, &amp; Delete Personal Information</li>
              <li>Right to Opt In/Out of Marketing &amp; Analytics</li>
              <li>Right to Non-Discrimination &amp; Equal Services</li>
              <li>Right to Request Deletion</li>
              <li>Notice &amp; Verification Requirements Apply</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  </main>
);

export default PrivacyPolicy;

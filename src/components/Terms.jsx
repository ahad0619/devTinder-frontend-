import React from 'react';

const sectionHeading = {
    color: '#fff',
    fontWeight: 600,
    fontSize: '1.22rem',
    marginTop: '38px',
    marginBottom: '10px'
};

const subHeading = {
    color: '#9ecfff',
    fontWeight: 700,
    fontSize: '2.5rem',
    letterSpacing: '-0.02em',
    marginBottom: '25px'
};

const text = {
    color: '#e5e7eb',
    fontSize: '1.08rem',
    lineHeight: 1.9
};

const contentBlock = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '54px 22px 96px 22px',
    background: 'rgba(18, 23, 37, 0.94)',
    borderRadius: '18px',
    boxShadow: '0 8px 38px rgba(0,0,0,0.30)'
};

const TermsOfService = () => (
    <main style={{
        minHeight: '100vh',
        background: 'linear-gradient(130deg, #21273e 60%, #24243e 100%)',
        padding: '0',
        fontFamily: 'Inter, Arial, sans-serif'
    }}>
        <article style={contentBlock}>
            <header>
                <h1 style={subHeading}>Terms of Service</h1>
                <p style={text}>
                    This website and service are operated by Akshay EdTech Pvt Ltd (“we”, “us”, “our”). devConnect offers this website, along with all information, tools, and services available within, to you, the user, conditional upon your acceptance of all terms, conditions, policies, and notices here.
                </p>
                <p style={text}>
                    By visiting our site and/or purchasing from us, you engage in our “Service” and agree to be bound by these Terms of Service (“Terms”), as well as additional policies referenced or linked herein. These Terms apply to all users, including browsers, vendors, customers, merchants, and content contributors.<br /><br />
                    Please read them carefully before accessing or using our website. Your continued use of any part of the site signifies agreement. If you do not agree to all terms, you may not use the site or its services.
                </p>
            </header>

            <hr style={{ margin: '32px 0', borderColor: '#475167', borderWidth: '1.5px 0 0' }} />

            <section>
                <h2 style={sectionHeading}>1. Online Store Terms</h2>
                <p style={text}>
                    By using this site, you confirm you are at least the age of majority in your state or province of residence. Products must not be used for illegal purposes. You must not transmit any destructive code. Any breach may result in immediate termination of your services.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>2. General Conditions</h2>
                <p style={text}>
                    We reserve the right to refuse service to anyone. Your content (not including credit card data) may cross various networks and may be modified to conform to technical standards. Credit card information is always encrypted in transfer. You may not reproduce, sell, or exploit any part of the Service without express permission.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>3. Accuracy, Completeness, and Timeliness</h2>
                <p style={text}>
                    We are not responsible if information on this site is not complete, accurate, or current. Content is provided for general information and should not be relied upon as the sole basis for decisions.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>4. Modifications to Service &amp; Prices</h2>
                <p style={text}>
                    Product prices can change without notice. We may modify or discontinue the Service anytime, without liability for any price change or service discontinuation.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>5. Products or Services</h2>
                <p style={text}>
                    Some products/services may be exclusive or limited in supply and subject to our Return Policy. We strive to display colors/images accurately but cannot guarantee your screen's accuracy. Offers may be void where prohibited. We do not warrant product/service quality will meet your expectations.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>6. Billing and Account Information</h2>
                <p style={text}>
                    We may refuse or limit any order at our discretion. You agree to provide current, accurate account and purchase details. For Returns Policy, please review our website.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>7. Optional Tools</h2>
                <p style={text}>
                    We may offer access to third-party tools “as is” without warranty. Use of such tools is entirely at your risk and subject to third-party terms.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>8. Third-Party Links</h2>
                <p style={text}>
                    Some content or services may include materials from third parties. devConnect is not responsible for third-party websites or their policies. Please review any third-party terms before engaging in a transaction.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>9. User Comments, Feedback, and Submissions</h2>
                <p style={text}>
                    Submitted materials (e.g., ideas, feedback) may be edited, published, or used by us without restriction and without any obligation of confidentiality or compensation. You agree to post only lawful, non-infringing material and are responsible for your comments’ accuracy.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>10. Personal Information</h2>
                <p style={text}>
                    Submission of personal information is governed by our <a href="/privacy" style={{ color: "#54afff", textDecoration: "underline" }}>Privacy Policy</a>.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>11. Errors, Inaccuracies, and Omissions</h2>
                <p style={text}>
                    Information may contain typographical errors, inaccuracies or omissions. We reserve the right to update or correct errors and cancel orders if needed. We undertake no duty to update Service information except as required by law.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>12. Prohibited Uses</h2>
                <ul style={{ ...text, listStyle: 'disc', paddingLeft: '32px' }}>
                    <li>For illegal activities or to solicit the same;</li>
                    <li>To violate international, federal, state or local regulations;</li>
                    <li>To infringe upon ours or others’ intellectual property;</li>
                    <li>To harass, abuse, insult, harm, defame, slander, intimidate or discriminate;</li>
                    <li>To submit false info or transmit malware;</li>
                    <li>To collect or track others' personal data;</li>
                    <li>To spam, phish, crawl or scrape;</li>
                    <li>For obscene/immoral purposes;</li>
                    <li>To interfere with security features;</li>
                    <li>To share access/account details or use course content except for individual use.</li>
                </ul>
                <p style={text}>
                    Violations may result in temporary or permanent account suspension.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>13. Disclaimer of Warranties; Limitation of Liability</h2>
                <p style={text}>
                    We do not guarantee uninterrupted, error-free, or secure service. Use of our service is at your own risk and provided “as is.'' Akshay EdTech Pvt Ltd and devConnect are not liable for damages, including lost profits, except as required by law.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>14. Indemnification</h2>
                <p style={text}>
                    You agree to indemnify and hold harmless Akshay EdTech Pvt Ltd and devConnect against any claim due to your breach of these Terms or any applicable law.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>15. Severability</h2>
                <p style={text}>
                    If any provision of these Terms is found unenforceable, it will be severed, and remaining provisions remain effective.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>16. Termination</h2>
                <p style={text}>
                    Terms remain in effect until terminated by either party. We may terminate at any time for breach. You remain liable for all charges up to termination.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>17. Lifetime Access</h2>
                <p style={text}>
                    “Lifetime access” refers to continued product or service access for its maintained duration, not the literal lifetime of the user or company. Lifetime access is non-transferable and may be terminated if the product or platform is retired, at the sole discretion of the provider.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>18. Entire Agreement</h2>
                <p style={text}>
                    These Terms constitute the full agreement between you and us regarding Service use, superseding all prior agreements and communications.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>19. Governing Law</h2>
                <p style={text}>
                    These Terms are governed by the laws of India and the jurisdiction of Dehradun, Uttarakhand.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>20. Changes to Terms</h2>
                <p style={text}>
                    The latest version of these Terms is always available on this page. We may change/revise these Terms at any time. Your continued use is considered acceptance of changes.
                </p>
            </section>

            <section>
                <h2 style={sectionHeading}>21. Contact</h2>
                <p style={text}>
                    Questions? Contact us at <a href="mailto:support@devconnect.asia" style={{ color: "#54afff", textDecoration: "underline" }}>support@devconnect.asia</a>.
                </p>
            </section>
        </article>
    </main>
);

export default TermsOfService;

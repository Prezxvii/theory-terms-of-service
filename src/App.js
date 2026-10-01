import './App.css';

const LAST_UPDATED = 'October 3, 2026';
const SUPPORT_EMAIL = 'theorysportsapp@outlook.com';

const sections = [
  {
    number: '1',
    title: 'The Services',
    paragraphs: [
      'Theory is a sports discussion and community platform allowing users to create profiles, participate in debates, polls, battles, predictions, comments, reactions, rankings, badges, and other community features.',
      'Theory displays sports content, scores, standings, and news from various sources. We reserve the right to modify, add, or discontinue features at any time.',
    ],
  },
  {
    number: '2',
    title: 'Eligibility',
    paragraphs: [
      'You must be at least 13 years old to use Theory. If you are under the age of majority where you live, you must have permission from and be supervised by a parent or legal guardian.',
      'Theory is not directed to children under 13. Do not create an account or provide personal information if you are under 13.',
    ],
  },
  {
    number: '3',
    title: 'Accounts',
    paragraphs: [
      'You are responsible for maintaining account security and for all activity occurring through your account. You agree to provide accurate registration info and keep it updated.',
      'You may not impersonate others, create deceptive accounts, or use unlawful or infringing usernames.',
    ],
  },
  {
    number: '4',
    title: 'User content',
    paragraphs: [
      'You retain ownership of the content you post on Theory. By submitting content, you grant Theory a non-exclusive, worldwide, royalty-free license to host, store, reproduce, display, distribute, adapt, and use your content to operate and promote the service.',
      'Public user content is visible to others. Do not post private, financial, health, location, or sensitive information in public areas.',
    ],
  },
  {
    number: '5',
    title: 'Acceptable use',
    paragraphs: [
      'You agree not to post unlawful, harmful, defamatory, threatening, harassing, hateful, sexually explicit, or abusive content.',
      'Do not infringe intellectual property or privacy rights, distribute spam/malware, scrape data, or interfere with service operations.',
      'Do not impersonate others or attempt to manipulate XP, rankings, badges, polls, battles, votes, or reward systems.',
    ],
  },
  {
    number: '6',
    title: 'Moderation',
    paragraphs: [
      'We reserve the right (but have no obligation) to review, remove, edit, hide, or restrict access to User Content or accounts that violate these Terms or threaten platform safety.',
      'We may suspend or terminate accounts at our discretion for conduct that harms the community or service.',
    ],
  },
  {
    number: '7',
    title: 'Third-party content',
    paragraphs: [
      'The Services may display links, previews, images, metadata, videos, or other materials from third-party sources. This content is provided for informational purposes only.',
      'Theory does not guarantee the accuracy or reliability of third-party content. Comments displayed under external content inside Theory are created by Theory users and not imported from third parties.',
    ],
  },
  {
    number: '8',
    title: 'Sports information',
    paragraphs: [
      'Scores, schedules, standings, statistics, news, and predictions may be delayed or inaccurate. Theory is not a sportsbook and does not provide gambling, wagering, financial, or legal advice.',
    ],
  },
  {
    number: '9',
    title: 'Intellectual property',
    paragraphs: [
      'The Theory name, branding, app design, software, text, graphics, and materials are owned by or licensed to Theory and protected by IP laws.',
      'You may use the service for personal, non-commercial use only. You may not copy, reverse engineer, or exploit the platform without authorization.',
    ],
  },
  {
    number: '10',
    title: 'Privacy',
    paragraphs: [
      'Your use of the Services is also governed by the Theory Privacy Policy, which explains how we collect, store, and share your data.',
    ],
  },
  {
    number: '11',
    title: 'Disclaimers',
    paragraphs: [
      'Theory is provided on an “as is” and “as available” basis without warranties of any kind, including implied warranties of merchantability, fitness for a particular purpose, or non-infringement.',
    ],
  },
  {
    number: '12',
    title: 'Limitation of liability',
    paragraphs: [
      'To the maximum extent permitted by law, Theory and its affiliates will not be liable for indirect, incidental, special, consequential, or punitive damages, or loss of data, profits, or goodwill.',
    ],
  },
  {
    number: '13',
    title: 'Termination',
    paragraphs: [
      'You may stop using the service or delete your account at any time through the app. We may suspend or terminate your account if you violate these Terms or use the service unlawfully.',
    ],
  },
  {
    number: '14',
    title: 'Changes to Terms',
    paragraphs: [
      'We may update these Terms from time to time. If changes are material, we will provide notice through the application or email. Continued use of Theory after updates take effect constitutes acceptance of the new Terms.',
    ],
  },
  {
    number: '15',
    title: 'Contact',
    paragraphs: [
      <>
        For questions or notices regarding these Terms, contact Theory at{' '}
        <a className="email-link" href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{' '}
        or write to Mount Vernon, NY 10550, United States.
      </>,
    ],
  },
];

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="header-content">
          <a className="brand" href="/" aria-label="Theory Terms of Use">
            THEORY
          </a>
        </div>
      </header>

      <main className="content">
        <section className="hero">
          <p className="eyebrow">THEORY LEGAL</p>
          <h1>Terms of Use</h1>
          <p className="hero-description">
            These Terms of Use govern your access to and use of Theory, including its sports discussions, debates, battles, polls, profiles, and related services.
          </p>
          <p className="last-updated">Last updated: {LAST_UPDATED}</p>
        </section>

        <article className="legal-document">
          {sections.map((section) => (
            <section key={section.number} className="legal-section">
              <h2>
                <span>{section.number}.</span>
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {section.bullets?.length ? (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Theory. All rights reserved.</p>
          <div className="footer-links">
            <a href="/">Terms of Use</a>
            <a href="https://theory-privacy.vercel.app">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
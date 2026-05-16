export default function App() {
  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <div style={styles.badge}>Available for freelance projects</div>

        <h1 style={styles.name}>Shruthi Sairam</h1>

        <h2 style={styles.role}>
          Full-Stack Developer • QA Automation Engineer
        </h2>

        <p style={styles.summary}>
          I have 6+ years of experience in QA Automation and Full-Stack
          Development. I build professional React applications, Node.js APIs,
          MongoDB backends, authentication systems, and AI-driven security
          platforms.
        </p>

        <div style={styles.buttons}>
          <a href="mailto:shruthisairam12@gmail.com" style={styles.primaryBtn}>
            Hire Me
          </a>

          <a
            href="https://github.com/shruthisoumya"
            target="_blank"
            style={styles.secondaryBtn}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shruthi-sairam12/"
            target="_blank"
            style={styles.secondaryBtn}
          >
            LinkedIn
          </a>
        </div>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p style={styles.text}>
          I am a Berlin-based developer with strong experience in QA automation,
          frontend development, backend APIs, authentication, and security
          platforms. My work combines testing experience with full-stack
          development to build reliable, user-friendly applications.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Belzir-SIEM</h3>
            <p style={styles.cardText}>
              AI-driven SOC/SIEM platform using React, Node.js, MongoDB, Wazuh,
              AI triage, incident management, analyst workflow, and alert
              pattern learning.
            </p>
            <span style={styles.tag}>React</span>
            <span style={styles.tag}>Node.js</span>
            <span style={styles.tag}>MongoDB</span>
            <span style={styles.tag}>AI Security</span>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>IAM Authentication Platform</h3>
            <p style={styles.cardText}>
              User management and authentication system with Keycloak, MFA,
              JWT verification, role-based access control, and secure API
              integration.
            </p>
            <span style={styles.tag}>Keycloak</span>
            <span style={styles.tag}>MFA</span>
            <span style={styles.tag}>JWT</span>
            <span style={styles.tag}>RBAC</span>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Sohnemann Bar App</h3>
            <p style={styles.cardText}>
              App concept for bar operations with modern UI design,
              authentication flow, backend API integration, and customer-focused
              features.
            </p>
            <span style={styles.tag}>React</span>
            <span style={styles.tag}>UI Design</span>
            <span style={styles.tag}>API</span>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills</h2>

        <div style={styles.skills}>
          {[
            "React",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Selenium",
            "Java",
            "API Testing",
            "Keycloak",
            "Wazuh",
            "GitHub",
            "Manual Testing",
          ].map((skill) => (
            <span key={skill} style={styles.skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        <p>Berlin, Germany</p>
        <p>© 2026 Shruthi Sairam. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #020617 0%, #0f172a 45%, #111827 100%)",
    color: "#f8fafc",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
    padding: "40px 20px",
  },

  hero: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "70px 20px 50px",
    textAlign: "center",
  },

  badge: {
    display: "inline-block",
    padding: "10px 18px",
    borderRadius: "999px",
    background: "rgba(56, 189, 248, 0.12)",
    color: "#67e8f9",
    border: "1px solid rgba(103, 232, 249, 0.35)",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "24px",
  },

  name: {
    fontSize: "64px",
    lineHeight: "1.1",
    margin: "0 0 18px",
    color: "#ffffff",
    fontWeight: "800",
    letterSpacing: "-1px",
  },

  role: {
    fontSize: "26px",
    color: "#38bdf8",
    fontWeight: "600",
    margin: "0 0 24px",
  },

  summary: {
    maxWidth: "800px",
    margin: "0 auto",
    color: "#cbd5e1",
    fontSize: "20px",
    lineHeight: "1.7",
  },

  buttons: {
    marginTop: "34px",
    display: "flex",
    justifyContent: "center",
    gap: "14px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "#38bdf8",
    color: "#020617",
    padding: "14px 24px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "700",
    boxShadow: "0 12px 35px rgba(56, 189, 248, 0.35)",
  },

  secondaryBtn: {
    background: "rgba(255,255,255,0.08)",
    color: "#ffffff",
    padding: "14px 24px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "700",
    border: "1px solid rgba(255,255,255,0.14)",
  },

  section: {
    maxWidth: "1100px",
    margin: "0 auto 44px",
    padding: "32px",
    borderRadius: "24px",
    background: "rgba(15, 23, 42, 0.78)",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    boxShadow: "0 24px 70px rgba(0,0,0,0.25)",
  },

  sectionTitle: {
    fontSize: "30px",
    margin: "0 0 18px",
    color: "#ffffff",
  },

  text: {
    color: "#cbd5e1",
    fontSize: "18px",
    lineHeight: "1.7",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "22px",
  },

  card: {
    background: "rgba(2, 6, 23, 0.75)",
    borderRadius: "20px",
    padding: "24px",
    border: "1px solid rgba(148, 163, 184, 0.18)",
  },

  cardTitle: {
    color: "#ffffff",
    fontSize: "22px",
    marginTop: "0",
  },

  cardText: {
    color: "#cbd5e1",
    fontSize: "16px",
    lineHeight: "1.6",
  },

  tag: {
    display: "inline-block",
    margin: "8px 8px 0 0",
    padding: "8px 11px",
    borderRadius: "999px",
    background: "rgba(56, 189, 248, 0.12)",
    color: "#67e8f9",
    fontSize: "13px",
    fontWeight: "600",
  },

  skills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },

  skill: {
    padding: "12px 16px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.08)",
    color: "#ffffff",
    border: "1px solid rgba(255,255,255,0.12)",
    fontWeight: "600",
  },

  footer: {
    textAlign: "center",
    color: "#94a3b8",
    padding: "30px 10px",
    fontSize: "15px",
  },
};
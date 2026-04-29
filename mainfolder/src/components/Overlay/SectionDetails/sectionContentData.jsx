// Components
import TeamCarousel from "../TeamCarousel";

// Sections content data
const sectionsContentData = [
  {
    key: "about",
    title: "Super Hot",
    content: (
      <div>
        <p>
          Super Hot is the scorching force turning hackathon ice into molten
          code. Powered by Aryan, Deven, Sachin, and Riya, the team cranks
          algorithms to blistering temperatures, melting bugs and forging
          unbeatable prototypes that leave rivals in the ashes.
        </p>
        <p>
          We specialize in boiling complex problems into clean, killer
          solutions. With blazing full-stack builds and zero-downtime deploys,
          Super Hot does not just participate in hackathons, we dominate them.
        </p>
      </div>
    ),
  },
  { key: "team", title: "Profile", content: <TeamCarousel /> },
  {
    key: "credits",
    title: "Highlights",
    content: (
      <ul className="credits">
        <li>
          Education: B.Tech CSE, SITRC Nashik (2023-2027 expected)
        </li>
        <li>
          Experience: Data Analytics Intern at YSM Infosolution (Jul 2025 - Sep
          2025)
        </li>
        <li>
          Project: FinVoice AI Expense Manager (SunHack 2025 finalist, Top
          18/625)
        </li>
        <li>
          Project: Circle to Search (OCR + local LLM workflow)
        </li>
        <li>
          Project: Civic AI urban environmental management platform
        </li>
        <li>
          Certifications: Google Data Analytics, IBM Python for Data Science,
          Infosys, Deloitte AI for Everyone
        </li>
        <li>
          <a href="mailto:vishwakarmaaryan442@gmail.com">Email Aryan</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/aryanvishwakarma">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/ryanbasic1/aryanbasic">GitHub</a>
        </li>
        <li>
          <a href="tel:+917972250722">Call +91 79722 50722</a>
        </li>
        <li>
          <a href="https://github.com/ryanbasic1/aryanbasic">
            View More Projects
          </a>
        </li>
      </ul>
    ),
  },
];

export default sectionsContentData;

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "jQuery", "HTML5", "CSS/SCSS", "Tailwind CSS", "Bootstrap", "Framer Motion", "MJML"],
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "Express", "REST APIs", "MySQL", "MongoDB", "Sequelize", "AWS Cognito", "Docker"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "Agile/Scrum", "JIRA", "Confluence", "Asana", "HubSpot", "Slate", "WCAG Accessibility", "SEO", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-4 mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
            <span className="font-mono text-lg md:text-xl mr-2 gradient-text">03.</span>
            Skills & Tech
          </h2>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-border to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-4 md:p-6 rounded-xl bg-surface border border-border gradient-border glow"
            >
              <h3 className="font-mono text-sm mb-3 md:mb-6 tracking-wider gradient-text">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 md:hidden">
                {category.skills.map((skill) => (
                  <span key={skill} className="text-xs text-muted px-2.5 py-1 rounded-full bg-surface-light">
                    {skill}
                  </span>
                ))}
              </div>
              <ul className="hidden md:block space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-muted">
                    <span className="text-accent-secondary text-xs">&#9656;</span>
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

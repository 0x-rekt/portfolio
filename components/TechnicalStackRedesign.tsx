import { skills } from "@/constants/skills";
import Image from "next/image";

const groups = [
  { title: "Build", names: ["TypeScript", "JavaScript", "React.js", "Next.js", "Node.js", "FastAPI", "Python", "Rust"] },
  { title: "Data", names: ["PostgreSQL", "Prisma", "MongoDB", "Firebase", "Pinecone"] },
  { title: "Operate", names: ["Git", "Github", "Docker", "AWS", "GCP", "CI/CD", "Shell Scripting"] },
];

export default function TechnicalStackRedesign() {
  const iconFor = (name: string) => skills.find((skill) => skill.name === name)?.icon;

  return (
    <section id="skills" className="dossier-section">
      <div className="dossier-rail">
        <div className="section-heading"><p className="mono-label">Tools I reach for</p><h2>A practical stack, not a collection.</h2><p>Languages, frameworks, data systems, and infrastructure chosen for the problem in front of me.</p></div>
        <div className="stack-groups">
          {groups.map((group) => <div className="stack-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="stack-list">
              {group.names.map((name) => <span className="stack-item" key={name}>{iconFor(name) && <Image src={iconFor(name) as string} alt="" width={14} height={14} />}{name}</span>)}
            </div>
          </div>)}
        </div>
        <div className="section-index"><span>02</span><span>Stack</span></div>
      </div>
    </section>
  );
}

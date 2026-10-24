import SkillBadge from '../components/SkillBadge';

type Skill = {
  id: number;
  label: string;
};

type LinkItem = {
  id: number;
  label: string;
  href: string;
};

function SkillsPage() {
  const skills: Skill[] = [
    { id: 1, label: 'React' },
    { id: 2, label: 'TypeScript' },
    { id: 3, label: 'Python' },
    { id: 4, label: 'C++' },
  ];

  const links: LinkItem[] = [
    { id: 1, label: 'Email', href: 'mailto:y_zhumabayev@kbtu.kz' },
    { id: 2, label: 'Github', href: 'https://github.com/zhumabayeverbol007-ersq/iwamad-practice' },
  ];

  return (
    <main className="flex flex-col items-center gap-6 p-6">
      <h2 className="text-2xl font-semibold">My Skills</h2>

      {skills.length > 0 ? (
        <ul className="flex gap-4 flex-wrap">
          {skills.map((skill) => (
            <li key={skill.id}>
              <SkillBadge skill={skill} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No skills added yet.</p>
      )}

      <h3 className="text-xl font-semibold mt-6">Links</h3>
      {links.length > 0 ? (
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="text-blue-600 underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No links added yet.</p>
      )}
    </main>
  );
}

export default SkillsPage;
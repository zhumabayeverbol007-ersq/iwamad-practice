import ProfileCard from '../components/ProfileCard';

type LinkItem = {
  id: number;
  label: string;
  href: string;
};

function HomePage() {
  const links: LinkItem[] = [
    { id: 1, label: 'Email', href: 'mailto:y_zhumabayev@kbtu.kz' },
    { id: 2, label: 'Github', href: 'https://github.com/zhumabayeverbol007-ersq/iwamad-practice' },
  ];

  return (
    <main className="flex justify-center p-6">
      <ProfileCard
        name="Yerbol"
        bio="My name is Yerbol. I am a student interested in technology, programming, and web development."
        avatarUrl={`${import.meta.env.BASE_URL}dev.jpeg`}
        links={links}
      />
    </main>
  );
}

export default HomePage;
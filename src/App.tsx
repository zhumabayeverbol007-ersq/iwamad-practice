import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import './App.css';
import './style.css';

function App() {
  const links = [
  { id: 1, label: 'Email', href: 'mailto:y_zhumabayev@kbtu.kz' },
  { id: 2, label: 'Github', href: 'https://github.com/zhumabayeverbol007-ersq/iwamad-practice' },
];

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
      <Header name="Yerbol" role="Web Development Student" />
      <main className="flex justify-center p-6">
        <ProfileCard
          name="Yerbol"
          bio="My name is Yerbol. I am a student interested in technology, programming, and web development."
          avatarUrl="/dev.jpeg"
          links={links}
        />
      </main>
      <Footer year={2026} author="Yerbol" />
    </div>
  );
}

export default App;
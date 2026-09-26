type HeaderProps = {
  name: string;
  role: string;
};

function Header({ name, role }: HeaderProps) {
  return (
    <header className="p-6 bg-white shadow-sm text-center">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="text-gray-600 mt-1">{role}</p>
    </header>
  );
}

export default Header;
type FooterProps = {
  year: number;
  author: string;
};

function Footer({ year, author }: FooterProps) {
  return (
    <footer className="p-6 text-center text-sm text-gray-500">
      <p>© {year} {author}</p>
    </footer>
  );
}

export default Footer;
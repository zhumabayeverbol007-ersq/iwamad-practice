type LinkItem = {
  id: number;
  label: string;
  href: string;
};

type LinkBadgeProps = {
  link: LinkItem;
};

function LinkBadge({ link }: LinkBadgeProps) {
  return (
    <li>
      <a
        href={link.href}
        target={link.href.startsWith('http') ? '_blank' : undefined}
        rel={link.href.startsWith('http') ? 'noopener' : undefined}
        className="text-blue-600 underline"
      >
        {link.label}
      </a>
    </li>
  );
}

export default LinkBadge;
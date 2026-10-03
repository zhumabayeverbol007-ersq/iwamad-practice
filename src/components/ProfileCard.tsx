import LinkBadge from './LinkBadge';
import LikeButton from './LikeButton';

type LinkItem = {
  id: number;
  label: string;
  href: string;
};

type ProfileCardProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
  links: LinkItem[];
};

function ProfileCard({ name, bio, avatarUrl, links }: ProfileCardProps) {
  return (
    <article className="card flex flex-col items-center gap-4 max-w-lg w-full">
      {avatarUrl && <img src={avatarUrl} alt={name} className="avatar" />}
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="text-center text-gray-700">{bio}</p>

      {links.length > 0 ? (
        <ul className="flex gap-6">
          {links.map((link) => (
            <LinkBadge key={link.id} link={link} />
          ))}
        </ul>
      ) : (
        <p>No links added yet.</p>
      )}

      <LikeButton />
    </article>
  );
}

export default ProfileCard;
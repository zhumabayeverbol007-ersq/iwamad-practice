import LinkBadge from './LinkBadge';
import LikeButton from './LikeButton';
import Card from './ui/Card';

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
    <Card>
      <div className="flex flex-col items-center gap-4">
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
      </div>
    </Card>
  );
}

export default ProfileCard;
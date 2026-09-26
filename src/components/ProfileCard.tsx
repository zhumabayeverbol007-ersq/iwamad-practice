import { useState } from 'react';
import LinkBadge from './LinkBadge';

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
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLikes(likes + 1);
    setLiked(!liked);
  }

  return (
    <article className={`card flex flex-col items-center gap-4 max-w-lg w-full${liked ? ' card-liked' : ''}`}>
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

      <button onClick={handleLike} className={`btn${liked ? ' liked' : ''}`}>
        {liked ? '❤️' : '🤍'} Like {likes}
      </button>
    </article>
  );
}

export default ProfileCard;
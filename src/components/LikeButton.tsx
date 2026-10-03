import { useLikes } from '../context/LikesContext';

function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <button onClick={addLike} className="btn">
      🤍 Like {likes}
    </button>
  );
}

export default LikeButton;
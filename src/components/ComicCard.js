import '../styles/ComicCard.scss';

export default function ComicCard({ comic, onClick}) {
  return (
    <div onClick={onClick} className="comic-card">
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
        className="comic-card__image"
        onClick={onClick}
      />
      <h2 className="comic-card__title">{comic.title}</h2>
    </div>
  );
}
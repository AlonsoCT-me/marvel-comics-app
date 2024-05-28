import ReactModal from 'react-modal';
import '../styles/ComicModal.scss';

export default function ComicModal({ comic, onClose }) {
  return (
    <ReactModal
      isOpen={true}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div>
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
          className="modal-image"
        />
        <h2 className="modal-title">{comic.title}</h2>
        <p>{comic.description || 'No description available.'}</p>
        <button
          onClick={onClose}
          className="modal-close-button"
        >
          Close
        </button>
      </div>
    </ReactModal>
  );
}
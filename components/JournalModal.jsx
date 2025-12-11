import "./JournalModal.css";

const JournalModal = ({ article, onClose }) => {
  if (!article) return null;

  // Close modal when clicking backdrop
  const handleBackdropClick = (e) => {
    if (e.target.className === "journal-modal-backdrop") {
      onClose();
    }
  };

  return (
    <div className="journal-modal-backdrop" onClick={handleBackdropClick}>
      <div className="journal-modal-content">
        <button className="journal-modal-close" onClick={onClose}>
          ✕
        </button>

        <h2 className="journal-modal-title">{article.title}</h2>

        {/* Image Section */}
        {article.images && article.images.length > 0 && (
          <div className="journal-modal-images">
            {article.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${article.title} - Image ${index + 1}`}
                className="journal-modal-image"
              />
            ))}
          </div>
        )}

        {/* Text Content Section */}
        {article.content && (
          <div className="journal-modal-text">
            <p>{article.content}</p>
          </div>
        )}

        {/* Date */}
        <div className="journal-modal-date">{article.date}</div>
      </div>
    </div>
  );
};

export default JournalModal;

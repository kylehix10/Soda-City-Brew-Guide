function BeerDescriptionModal({ beer, onClose }) {
  if (!beer) {
    return null
  }

  return (
    <aside className="beer-description">
      <button className="close-button" type="button" onClick={onClose} aria-label="Close description">
        Close
      </button>
      <h3>{beer.name}</h3>
      <p className="beer-meta">
        {beer.style} | {beer.abv} ABV
      </p>
      <p>{beer.description}</p>
    </aside>
  )
}

export default BeerDescriptionModal

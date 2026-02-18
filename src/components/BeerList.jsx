function BeerList({ beers, selectedBeerId, onSelect }) {
  return (
    <section className="beer-list">
      {beers.map((beer) => (
        <article
          key={beer.id}
          className={`beer-card ${selectedBeerId === beer.id ? 'is-selected' : ''}`}
        >
          <button type="button" onClick={() => onSelect(beer.id)}>
            <h3>{beer.name}</h3>
            <p>{beer.style}</p>
            <span>{beer.abv} ABV</span>
          </button>
        </article>
      ))}
    </section>
  )
}

export default BeerList

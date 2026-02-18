function BreweryGrid({ breweries, onSelect }) {
  return (
    <section className="brewery-grid animate-in">
      {breweries.map((brewery) => (
        <button
          key={brewery.id}
          className="brewery-tile"
          onClick={() => onSelect(brewery.id)}
          type="button"
          aria-label={brewery.name}
          title={brewery.name}
        >
          <img src={brewery.imageUrl} alt={brewery.name} className="brewery-image" />
        </button>
      ))}
    </section>
  )
}

export default BreweryGrid

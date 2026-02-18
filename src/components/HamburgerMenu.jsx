function HamburgerMenu({
  breweries,
  isOpen,
  onToggle,
  onSelect,
  selectedBreweryId,
  disabled,
}) {
  return (
    <div className={`hamburger-wrap ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="hamburger-button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="brewery-menu"
        disabled={disabled}
      >
        <span />
        <span />
        <span />
      </button>
      <nav id="brewery-menu" className="hamburger-menu">
        {breweries.map((brewery) => (
          <button
            key={brewery.id}
            type="button"
            className={selectedBreweryId === brewery.id ? 'active' : ''}
            onClick={() => onSelect(brewery.id)}
          >
            {brewery.name}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default HamburgerMenu

function BeerImagePanel({ beer, brewery }) {
  const defaultImage = brewery.imageUrl

  if (!beer) {
    return (
      <aside className="beer-image-panel">
        <img src={defaultImage} alt={`${brewery.name} default`} className="beer-image-preview" />
      </aside>
    )
  }

  const imageSrc = beer.imageUrl ?? defaultImage

  return (
    <aside className="beer-image-panel">
      <img src={imageSrc} alt={`${beer.name} beer`} className="beer-image-preview" />
      <p className="beer-image-caption">{beer.name} {beer.abv}</p>
    </aside>
  )
}

export default BeerImagePanel

import BeerDescriptionModal from './BeerDescriptionModal'
import BeerImagePanel from './BeerImagePanel'
import BeerList from './BeerList'

function BreweryThemeView({ brewery, selectedBeer, onBeerSelect, onClearBeer }) {
  return (
    <section className="theme-view animate-in">
      <div className="theme-header">
        <h2>{brewery.name}</h2>
        <p>{brewery.tagline}</p>
      </div>
      <div className="theme-body">
        <div className="theme-main">
          <BeerList beers={brewery.beers} selectedBeerId={selectedBeer?.id} onSelect={onBeerSelect} />
          <BeerDescriptionModal beer={selectedBeer} onClose={onClearBeer} />
        </div>
        <BeerImagePanel beer={selectedBeer} brewery={brewery} />
      </div>
    </section>
  )
}

export default BreweryThemeView

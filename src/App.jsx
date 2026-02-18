import { useMemo, useState } from 'react'
import BreweryGrid from './components/BreweryGrid'
import BreweryThemeView from './components/BreweryThemeView'
import HamburgerMenu from './components/HamburgerMenu'
import breweries from './data/breweries'
import './App.css'

function App() {
  const [selectedBreweryId, setSelectedBreweryId] = useState(null)
  const [selectedBeerId, setSelectedBeerId] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const selectedBrewery = useMemo(
    () => breweries.find((brewery) => brewery.id === selectedBreweryId) ?? null,
    [selectedBreweryId],
  )

  const selectedBeer = useMemo(() => {
    if (!selectedBrewery) {
      return null
    }
    return selectedBrewery.beers.find((beer) => beer.id === selectedBeerId) ?? null
  }, [selectedBrewery, selectedBeerId])

  const themeVars = selectedBrewery?.theme ?? {}

  const style = {
    '--theme-background': themeVars.background ?? '#ffffff',
    '--theme-panel': themeVars.panel ?? '#ffffff',
    '--theme-text': themeVars.text ?? '#1f2a24',
    '--theme-accent': themeVars.accent ?? '#7a4f2f',
    '--theme-accent-soft': themeVars.accentSoft ?? '#d7bda7',
  }

  const handleBrewerySelect = (breweryId) => {
    setSelectedBreweryId(breweryId)
    setSelectedBeerId(null)
    setIsMenuOpen(false)
  }

  const handleHomeClick = () => {
    setSelectedBreweryId(null)
    setSelectedBeerId(null)
    setIsMenuOpen(false)
  }

  return (
    <div
      className={`app-shell ${selectedBrewery ? 'is-themed' : ''}`}
      style={style}
      data-brewery-id={selectedBrewery?.id ?? ''}
    >
      <header className="top-bar">
        <button className="top-bar-home" type="button" onClick={handleHomeClick}>
          Soda City Brew Guide
        </button>
        <p>Explore Columbia's breweries and browse their current pours.</p>
        <HamburgerMenu
          breweries={breweries}
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen((open) => !open)}
          onSelect={handleBrewerySelect}
          selectedBreweryId={selectedBreweryId}
          disabled={!selectedBrewery}
        />
      </header>

      <main className="content">
        {!selectedBrewery ? (
          <BreweryGrid breweries={breweries} onSelect={handleBrewerySelect} />
        ) : (
          <BreweryThemeView
            brewery={selectedBrewery}
            selectedBeer={selectedBeer}
            onBeerSelect={setSelectedBeerId}
            onClearBeer={() => setSelectedBeerId(null)}
          />
        )}
      </main>
      <div className="grain-overlay" />
    </div>
  )
}

export default App

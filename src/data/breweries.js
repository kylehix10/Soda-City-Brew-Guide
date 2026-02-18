export const breweries = [
  {
    id: 'steelhands',
    name: 'Steel Hands Brewing',
    imageUrl: '/src/img/steelHands.png',
    location: '2350 Foreman St, Cayce, SC',
    tagline: 'Your hometown destination brewery',
    theme: {
      background: '#df6439',
      panel: '#7a4f2f',
      text: '#ffffff',
      accent: '#df6439',
      
    },
    beers: [
      {
        id: 'coffee-lager',
        name: 'Coffee Lager',
        imageUrl: '/src/img/coffeeLager.png',
        style: 'Lager',
        abv: '4.5%',
        description:
          'Rise & shine! A rich aroma of your morning coffee gently fades to an easy drinking lager. Golden, light and crisp, this beer is a classic style with the familiarity of a good ‘ole cup of Joe. A smooth and balanced taste that is sure to please beer drinkers and coffee aficionados alike. Infused with coffee from local roaster, Loveland Coffee.',
      },
      {
        id: 'tropical-ipa',
        name: 'Tropical IPA',
        imageUrl: '/src/img/tropicalIPA.png',
        style: 'India Pale Ale',
        abv: '4.5%',
        description:
          'This India Pale Ale bursts with juicy hops and an intense tropical aroma of mango, passion fruit and papaya.  Fiercely flavorful and refreshingly drinkable, the hop experience is citrusy, tropical and fruity with subtly sweet malt and a balanced, satisfying finish. Truly mouthwatering!',
      },
      {
        id: 'pecan-brown-ale',
        name: 'Pecan Brown Ale',
        imageUrl: '/src/img/pecanBrown.png',
        style: 'Brown Ale',
        abv: '5.5%',
        description:
          'Our Pecan Brown Ale is a malty sweet treat that balances hints of biscuit, caramel and chocolate with the rich nutiness from pecans.  No matter how you say it, “Pee-can” or “Puh-kahn”, this beer was meant for gathering together.',
      },
    ],
  },
  {
    id: 'savageCraft',
    name: 'Savage Craft Ale Works',
    imageUrl: '/src/img/savageCraft.png',
    location: '430 Center St, West Columbia, SC',
    tagline: '',
    theme: {
      background: '#000000',
      panel: '#ffffff3d',
      text: '#ffffff',
      accent: '#e0e0e0',
      accentSoft: '#afafaf',
    },
    beers: [
      {
        id: 'carolina-Light',
        name: 'Carolina Light Cream Ale',
        imageUrl: '/src/img/carolinaLight.jpeg',
        style: 'Cream Ale',
        abv: '4.7%',
        description:
          '2024 US Open Gold Medal Winner 2025 South Carolina Brewers Cup Gold Medal Winner The latest rendition of our classic Golden Sour. Blended with Juicy Pineapple, Tropical Coconut, Mango, and Passionfruit. This sipper will have you sitting on a beach no matter where you are.',
      },
      {
        id: 'vale',
        name: 'Vale Cream Ale',
        imageUrl: '/src/img/vale.jpeg',
        style: 'Cream Ale',
        abv: '4.7%',
        description:
          "We doubled our golden sour recipe to create a true Pastry Style Sour Ale. We then conditioned it on loads of fresh Blueberry Puree', Vanilla, Milk Sugar, and Cinnamon. This confectionary creation is perfect for the season and will remind you of grandma's house. (Contains Lactose)",
      },
      {
        id: 'purge',
        name: 'Purge Under Pilsner',
        imageUrl: 'src/img/purge.jpeg',
        style: 'Pilsner-German',
        abv: '4.9%',
        description:
          'Experience this classic German Pilsner crafted using traditional German decoction methods and imported German malted Barley and Hops. Crisp, Golden and Refreshing, Purge under Pilsner is the perfect beer to remove those unwanted stresses.',
      },
    ],
  },
  {
    id: 'hunterGatherer',
    name: 'Hunter-Gatherer Brewery',
    imageUrl: '/src/img/hg.png',
    location: '1402 Jim Hamilton Blvd, Columbia, SC',
    tagline: '',
    theme: {
      background: '#000000',
      panel: '#ffffff3d',
      text: '#ffffff',
      accent: '#fcb900',
    },
    beers: [
      {
        id: 'hazy',
        name: 'Hazy IPA',
        imageUrl: '/src/img/hazy.jpg',
        style: 'IPA',
        abv: '7.0%',
        description:
          '',
      },
      {
        id: 'stout',
        name: 'Stout',
        imageUrl: 'src/img/stout.jpg',
        style: 'Stout',
        abv: '4.0%',
        description:
          '',
      },
      {
        id: 'rasp-sour',
        name: 'Raspberry Sour',
        imageUrl: 'src/img/rasp-sour.jpg',
        style: 'Sour Ale ',
        abv: '4%',
        description:
          '',
      },
    ],
  },
  {
    id: 'bierkeller',
    name: 'Bierkeller',
    imageUrl: 'src/img/bierkeller.png',
    location: '600 Canalside St Suite 1009, Columbia, SC',
    tagline: 'Columbia’s Original Riverfront Brewery, Restaurant, and Biergarten',
    theme: {
      background: '#162068',
      panel: '#ffffff',
      text: '#162069',
      accent: '#162069',
      accentSoft: '#162069',
    },
    beers: [
      {
        id: 'kellerbier',
        name: 'Kellerbier',
        imageUrl: 'src/img/kellerbier.png',
        style: 'Unfiltered Franconian Lager',
        abv: '--%',
        description:
          '',
      },
      {
        id: 'kolsch',
        name: 'Kolsch',
        imageUrl: 'src/img/kolsch.png',
        style: 'Kolsch',
        abv: '--%',
        description:
          'Crisp and refreshing with a taste of white wine/grapes',
      },
      {
        id: 'weissbier',
        name: 'Weissbier',
        imageUrl: 'src/img/weissbier.png',
        style: 'Bavarian Wheat Beer',
        abv: '--%',
        description:
          '',
      },
    ],
  },
]

export default breweries

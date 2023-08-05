# PokéDex

## Project Overview

In a way, this lets you find all the Pokemon using the PokeAPI. However, instead of physically hunting for little monsters in forests, grasslands, and various other locales like those darn kids, here it's accomplished simply through a search bar. Search them all!

## Installation

To install and run follow these steps:

1. Clone the repository to your local machine `$ git clone https://github.com/benatwerk/pokemon-search.git`

2. Navigate to the cloned repository `$ cd pokemon-search`

3. Install the necessary packages `$ npm install`

4. Start the application `$ npm start`

The application will start running at http://localhost:3000.

## Running Tests

Unit tests written using the Jest. To run tests run: `$ npm test`

The tests include:

-   Search component
-   PokemonItem component
-   SearchHistory component

## Uncompleted Parts

The UI is pretty simple and could use some polish and better design. I'm not that familiar with Pokemon so I wasn't sure what's interesting about them to display so I just covered the basics as a proof of concept. The way it's built it'd be easy to add any other sections to make it more complete. I didn't get around to adding fetching other stats through the endpoints the API provides, but that would be something else I think would be useful. Had I done that I would have added them into a tooltip on hover, I think.

I could have also blocked search while in a loading state. I would have just pulled in the pokemon state and then set a class on the form and in the css used pointer-event: none.

The tests are pretty simple, PokemonItem in particular could use more test cases.

## Concurrency Considerations

this isn't my strong suit, but I would think that this app would need additional considerations like caching to reduce the number of repeated requests and optimistic rendering.

## Additional Comments

I think this project is a good gauge of frontend skill sets. It was pretty straightforward but leaves plenty of room for different implementation decisions. Initially, I thought it would require a layout with pagination to click through a list of Pokemon. I had even prototyped that idea while exploring the API docs. A screenshot for additional context in the project description would have been beneficial.

## Technologies Used

-   React
-   Redux
-   TypeScript
-   Jest
-   @testing-library/react
-   PokeAPI

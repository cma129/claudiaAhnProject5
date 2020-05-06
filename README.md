# myBeerSelection

"My Beer Selection" is a React-based beer selection web app to create personal beer selections based on user's tastes. Uses an API call on random beer generator considering user inputs.

## Target Users
I'm targeting beer drinkers who love exploring new types of beers and want to try different ones.

## Usage
My application can provide a fun environment for searching new beers and learning about them, as well as trying them out if they want! The unique descriptions and brewer's tips can vividly illustrate each beer being featured, and they could really get people to try it.

## Built with:
- React
- API
- CSS3
- HTML5

## Getting up and running
After cloning this repository, run npm install in the root directory to install the dependencies. As soon as all of them are installed, you can npm start in the root directory and open 0.0.0.0:3000 in your browser to see your local copy of the app.

## Structure
The main part of the application is in the App.js file found at src/App.js.
#### Components
- Header
- Flavour
- Food
- Selection
- Footer

## To-Do's
Some things I'd love to include to improve my app:
- additional text input as part of drop down for both flavour and food sections so that users can type in what they want, too
- use of Express.js to store user's selection data
- log-in option to store each user's personalized selection data
- finding another API that I can use to provide more beer options 
- hyperlinks to The Beer Store or LCBO for users to purchase picked beers (The current API's beers are not sold on The Beer Store or LCBO.)
- another 'beer type' section to recommend beers based on types (The current API data structure cannot show various beers by type.)
- hiding 'check my selection' button when the screen is showing the selection section
- option to show 'similar beers' without complicating the UI or UX
- catalog page showing all beers in the API with info

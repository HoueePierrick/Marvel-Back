# Back-end of the Marvel test of LeReacteur bootcamp
This back-end interacts with:
- **LeReacteur's API** to retrieve Marvel's characters and comics
- **MongoDB** to stock users accounts and each user's favorites characters and comics
- **Marvel's front-end** which is deployed on Netlify

This back-end is currently deployed on Heroku: https://reacteur-marvel-back.herokuapp.com

## It contains the following routes
Each route has it's one description on its page, it can be found from Index.js, which contains them all
- **/characters**: a route allowing to retrieve characters = get route
- **/comics**: a route allowing to retrieve comics = get route
- **/comics/:characterID**: a route allowing to retrieve comics associated with a character = get route
- **/create**: a route allowing to create account = post route
- **/login**: a route allowing user to login => get
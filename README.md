To run our application you will need to clode and pull all the files from GitHub.
You will then in the location that you stored the files run the command 'npm run install' on your terminal to get all the required technologies
You will also need to go to https://developer.nutritionix.com/, click the link 'signup for your API key' and complete the steps required to generate your own key required to access the API we used. Once you have your ID and KEY you will need to create a file and add it the location 'client/src/helpers' the file needs to be named 'keys.js'. In the file it will need to look like this:
module.exports = {
    'x-app-id': '********',
    'x-app-key': '***************************************'
}
Once you have done this you will need to open 3 seperate terminal windows, in the first type the command 'mongod' and leave that running.
In the second type the command 'npm run build' and leave this running too
Finally in the third type 'npm run server:dev' and leave this running.
Now you will be able to load a web page and in the search bar type in 'localhost:3000' - this will bring you to our Web App.

The Brief

Habit Tracker
Nowadays everyone is trying to build or break a habit. But it's tricky to keep track of them. Identify a habit you'd like to help someone break or build (e.g. alcohol consumption, smoking, calories, exercise, healthy eating...) and make an app to help.

MVP
A user should be able to:

Make CRUD entries on the front-end that are persisted on a MongoDB database on the back-end
Display the data in visually interesting / insightful ways.
Example Extension
Bring in an external API to provide nutritional info, exercises, beers etc
Handle dates elegantly - let a user filter by week, month to see progress over time

Technologies we used were:
Java Script base code, mongo DB

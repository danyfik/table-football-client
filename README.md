# Table-Football Game 

The goal of this program is to be able to create table-football games and display statistics about the teams and the players.

## Main features

- Create new players
- Create new teams by selecting one or two available players
- Create a new game between two teams to keep track of the score as the game is being playing
- Create a new game that has already been played
- See statistics about the teams and the players in order to see who is the ultimate champion
- See history of each player

## Database

For this application, a MariaDB/MySQL database was used.\
Version : 10.4.20

To import the data :
1. Open the command prompt of your database server
2. Run `mysql -u root < yourClientPath/database.sql`

Feel free to add or delete the players, team or games you want.

## Installation of the server

Go to the server directory
1. Install all the dependencies with `npm install`
2. Run the server with `npm start`

## Installation of the client

Go to the client directory 
1. Install all the dependencies with `npm install`
2. Run the client with `npm start`
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser (the page will open automatically)

## Author
Dany Djedovic
# YELP Fusion API Integration Challenge
This challenge returns the top five ice cream shops in Alpharetta, GA, US.

# Installation

You can run this project using either docker-compose or npm.
<br>First of all, you should clone this repository.

# Docker
If you want to run it through docker-compose, please make sure you have docker installed on your computer.
<br>Once you have it done, just run `docker-compose up` in the project root folder.
 
# Without Docker
If you desire to run it without Docker, please run `npm install` in your project root folder.
<br> Now run `npm start` and that should be enough.

In order to access it, you must go to `localhost:3000`.

# Parameters
You can set query params in the url to change the number of rows it returns. Default is 5.
```
http://localhost:3000/?top=15
http://localhost:3000/?top=15&offset=5
```

# Movies & Reviews full stack web application

## Table of contents
- ### [Introduction](#introduction)
  - [Frontend](#frontend)
  - [Backend]()
  - [Database]()
- ### [How to use the code](#how-to-use-the-code-1)
- ### Contact me for discussions or queries
  - [Twitter](https://twitter.com/sharathlingams)
  - [Email](mailto:sharathprof1517@gmail.com)
- ### [Check out my profile](https://github.com/Sharath-1517)
<hr>
<br>

# Introduction
<br>

  - ## Frontend
    - ### Tech stacks that I have used / that you must be familiar with:<br>
      - [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" height="50"/>](https://www.w3schools.com/html/) [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" height="50"/>](https://www.w3schools.com/Css/) [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" height="50"/>](https://react.dev/) [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="50"/>](https://developer.mozilla.org/en-US/docs/Web/javascript) <br><br>
  - ## Backend
    - ### Tech stacks that I have used / that you must be familiar with:<br>
      - [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" height="50"/>](https://dev.java/learn/) [<img src="icons/maven.png" height="50" style="border: 2px solid #504B4B"/>](https://maven.apache.org/) &nbsp;&nbsp;[<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" height="50"/>](https://spring.io/projects/spring-boot) <br><br>
  - ## Database
    - Tech stacks that I have used / that you must be familiar with:<br>
      - [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" height="50"/>](https://www.mongodb.com/docs/guides/)
<hr>
<br>

# How to use the code

  - ## Step-1: Setting up the database
    - Install MongoDB Community server and MongoDB Compass from your preferred local browser. [Link to download](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.5-signed.msi).
    - After installing go to [MongoDB Atlas](https://account.mongodb.com/account/login), login if you already have an account or signup for a new one.
    - Follow up with the signup guide that the interface provides and create a free tier cluster (or you can use the paid one if you have that, anything that is according to your convienience).
    - `NOTE: Do not provide any special characters in your password else you will find it trouble in connecting  with the MongoDBCompass; Although, you have a solution for it. I will not recommend using the special characters in it.`
    - Now you have to connect the MongoDB Atlas cluster with your MongoDB Compass.
    ![Web capture_3-5-2023_12222_www bing com](https://user-images.githubusercontent.com/111525679/235846283-d3d00b14-2e20-4cb0-9f6b-f367694f5b2f.jpeg)
    - Copy the code that you can see from the above, and paste it in your MongoDB Compass. It will look like this, <br><br>
    ![Screenshot 2023-05-03 120650](https://user-images.githubusercontent.com/111525679/235846789-ff3cd9e0-d2d6-41c2-bd2c-f0550dae5f06.png)
    - Now click the connect button (`do not forget about the password you have to change in the connection string as they have mentioned **<password>** replace it with your password that you created when you created that database.`)
    - After successfully connecting your MongoDB Compass, now it's time to create a database `movie` (`You can give any name for the collection but only if you're sure that you can identify and change the .env variables accordingly in the` [src/main/resources](https://github.com/Sharath-1517/movie-application/blob/main/movies/src/main/resources/.env.example)`file and make sure you change the file name .env.example to .env`).
    - Next, you need to create a collection `movies`.
    - Go to this link provided ([LINK](https://raw.githubusercontent.com/fhsinchy/movieist/master/_data/movies.json)) and click `WIN + S` and save that file in your preferrable location in your computer.
    - Now head back to the MongoDB compass and select the `Add data button > Import data from JSON/CSV` 
    ![image](https://user-images.githubusercontent.com/111525679/235850701-293370b0-9718-4127-abbe-a649a34baa9b.png)


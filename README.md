# Travelux frontend app with React, HTML and CSS
An app similar to Airbnb, designed for users to explore rental properties or list their own.

It's configured to interact with the corresponding server, available at https://github.com/MartinKraychev/TraveLux-Backend.

Both the client and server are already deployed and there is no need for any setup.

You can access the app [here](https://marvelous-dusk-809212.netlify.app/). Netlify is used for the client deployment.

## App structure and functionality

JW Token is used for authentication.

Each components comes with its own css module.

Users can login, register and logout.

The main collection is Properties and users have full CRUD on that. The project has public and private part. Users can interact with properties by giving ratings

## API Reference

The backend is written with FastAPI and it comes with swagger docs.

To see all the api calls the app does, you can check the server api docs [here](https://travelux-ooow2st62q-nw.a.run.app/docs). 

## To install locally

If you would like to install this project locally do the following:

Clone the project

```bash
  git clone https://github.com/MartinKraychev/TraveLux
```

Go to the project directory

```bash
  cd Travelux
```

Install dependancies

```bash
  npm install
```

Create .env file in the main root containing 

```
REACT_APP_EMAIL_API_KEY = {api key to sending emails , I am using Brevo for this service. You need to create one yourself}

REACT_APP_EMAIL_RECEIVER = {Email receiver}
```

Start the project

```bash
  npm start
```













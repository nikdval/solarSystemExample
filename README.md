# Solar System Application

The applicatition provides information about the celestial bodies in our Solar System.

It is a single-page Javascript application with React in client side and Node.js with Express framework in server side.


## Requirement

For the instalation has been used:
* Node.js v14.17.1
* npm v6.14.13

Older versions possible can work but they haven't been tested.


## Instalation

* Server:

```bash
cd api
npm install
```

* Client

```bash
cd solarsystem
npm install
```
## Run the application
The application run on [http://localhost:3000](http://localhost:3000)

and the server on [http://localhost:9000](http://localhost:9000)

API endpoints:

* [http://localhost:9000/solarSystem](http://localhost:9000/solarSystem)


* /solarSystem/:planet

Example: [http://localhost:9000/solarSystem/earth](http://localhost:9000/solarSystem/earth)



### To run both server and client side

```bash
cd solarsystem
npm run dev
```

### To run it in separate bash

* Server
```bash
cd api
npm start
```

* Client
```bash
cd solarsystem
npm start
```

## Initial setup

For the intial setup:

* Server: 

```bash
npx express-generator
```

The port has been changed from 3000 to 9000 in ./bin/www to avoid conflict with client.

* Client:

```bash
npx create-react-app solarsystem
```


## Further improvement
* Setup config for production mode [port, host]

* The application can also so extra infromation for each planet in a overlay side block onClick as it shown in mockup-100.js



Reference:
https://museumsvictoria.com.au/scienceworks/visiting/melbourne-planetarium/fact-sheets/planets-of-the-solar-system/
 
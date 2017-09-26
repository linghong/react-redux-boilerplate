#React-Redux Boilerplate

##About
This ia a boilerplate app for a react-redux site. Bootstrap css files are used to facilitate styling the site. All images are compressed before loading, and small images are further packaged into the bundle.js file to imporve the site performance while large images are kept as external files.


##Clone Repo
```bash
$ git clone https://github.com/linghong/react-redux-boilerplate.git
```

##Installation
```bash
$ npm install
```

##Start Dev Server
```bash
$ npm run serve
```

##View the Site
http://localhost:8080
### You can also view the boilerplate look at [https://react-redux-webpack2.herokuapp.com/](https://react-redux-webpack2.herokuapp.com/)


##Build a Production Version
```bash
$ npm run build
```
####It will generate a build folder for the production version of the code. 

##Deploy to Heroku
####step 1. Install Heroku CLI in your computer. 
####step 2. Open a new repository in your heroku account.
####step 3. Add your heroku repo to your local repository.
####step 4. Add and commit the code in your local repository and push it to your heroku master
```bash
$ git add .
$ git commit -am "added something new"
$ git push heroku master
```

##License
MIT
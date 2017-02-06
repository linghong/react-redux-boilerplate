#React-Redux Boilerplate

##About
This ia a boilerplate app for a react-redux site. Bootstrap css files are used to facilitate styling the site. All images are compressed before loading, and small images are further packaged into the bundle.js file to imporve the site performance while large images are kept as external files.


##Clone Repo
```bash
git clone https://github.com/linghong/react-redux-boilerplate.git
```

##Installation
```bash
npm install
```

##Start Dev Server
```bash
npm run serve
```

##View the site
localhost:8080

##Deploy to Heroku
step 1. install Heroku CLI in your computer. 
step 2. open a new repository in your heroku account.
step 2. add your heroku repo to your local repository.
step 3. add and commit the code in your local repository and push it to your heroku master
```bash
$ git add .
$ git commit -am "added something new"
$ git push heroku master
```

##Demo
### [https://react-redux-webpack2.herokuapp.com/](https://react-redux-webpack2.herokuapp.com/)


##Deploy to Github gh-pages
```bash
$ npm run build
$ git checkout -b gh-pages
```

##### remove "/build" in the .gitignore
```bash
$ git add build/
$ git commit -m "new deploy"
$ npm run deploy
```

##License
MIT
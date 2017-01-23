#React-Redux Boilerplate

##About
This ia a start boilerplate app for a react-redux site. Bootstrap css files are used to facilitate styling the site. All images are compressed before loading, and small images are further packaged into the bundle.js file to imporve the site performance while large images are kept as external files.


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


##Build A Production Version
```bash
npm run build
```

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
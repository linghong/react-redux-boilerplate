#React-Redux Boilerplate


##About
This ia a start boilerplate app for a react-redux site. Bootstrap css files are used to facilitate styling the site. All images are compressed before loading, and small images are further packaged into the bundle.js file to imporve the site performance while large images are kept as external files.


##Clone Repo
git clone https://github.com/linghong/react-redux-boilerplate.git


##Installation
npm install


##Start Dev Server
npm run serve


##View the site
localhost:8080


##Building A Production Version
npm run build


##Deploy to Github gh-pages
npm run build
git checkout -b gh-pages
remove "/build" in the .gitignore
git add .
git commit -m "new deploy"
npm run deploy


##Demo
[https://linghong.github.io/react-redux-boilerplate](https://linghong.github.io/react-redux-boilerplate)


##License
MIT
# ainama-react-cli

React template. Highly Customize. `style` use sass. `router` use react-router-dom. `data` use react-redux. `optimization` use lazy() & code-splitting. `service` use koa.js.

### Use
```js

sudo npm install ainama-react-cli -g

cd <your path>

ainama-react-cli init <name>

cd <name>

npm run server

open http://localhost:3000/

npm run webpack

```

### package.json
```js

{
  "dependencies": {
    "koa": "^2.11.0",
    "koa-static": "^5.0.0",
    "react": "^16.7.0",
    "react-dom": "^16.7.0",
    "react-redux": "^6.0.0",
    "react-router-dom": "^4.3.1",
    "redux": "^4.0.1",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.3.0"
  },
  "devDependencies": {
    "@babel/core": "^7.2.2",
    "@babel/preset-env": "^7.2.3",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.5",
    "css-loader": "^2.1.0",
    "mini-css-extract-plugin": "^0.8.0",
    "node-sass": "^4.11.0",
    "sass-loader": "^7.1.0",
    "webpack": "^4.28.4",
    "webpack-cli": "^3.2.1",
    "webpack-dev-server": "^3.1.14"
  }
}


```

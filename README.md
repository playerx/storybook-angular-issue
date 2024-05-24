# Storybook Angular Issue

Steps to reproduce:
1. `npm i`
2. `npm run storybook`
3. open page console and you will see the error:
```
Uncaught TypeError: __webpack_require__.nmd is not a function
    at ./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&overlay={"errors":true,"warnings":false,"runtimeErrors":false}&noInfo=false (VM481 vendors-node_modules_storybook_angular_dist_client_config_js-node_modules_webpack-hot-middlew-e8465c.iframe.bundle.js:115226:53)
    at __webpack_require__ (VM485 runtime~styles.scss.iframe.bundle.js:28:33)
    at __webpack_exec__ (VM484 main.iframe.bundle.js:284:48)
    at VM484 main.iframe.bundle.js:285:148
    at __webpack_require__.O (VM485 runtime~styles.scss.iframe.bundle.js:72:23)
    at VM484 main.iframe.bundle.js:286:56
    at webpackJsonpCallback (VM485 runtime~styles.scss.iframe.bundle.js:1188:39)
    at Array.forEach (<anonymous>)
    at VM485 runtime~styles.scss.iframe.bundle.js:1202:31
    at VM485 runtime~styles.scss.iframe.bundle.js:1204:13
```


Also, when you try to change the component, it's not updated in storybook, you get another error and you need to manually refresh the page.

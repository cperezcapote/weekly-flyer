# Requirements

Task is to develop a webpage that features fully responsive design based on assets provided in the zip file, and has 4 "modes" of responsiveness (assume that display screen is 1080p):

1. Desktop (full screen and over 3/4 of the screen) shown in '1 - Desktop.jpg'
2. Tablet (show when re-sizing browser to under 3/4 of the screen) shown in '2 - Tablet.jpg'
3. Portrait (show when re-sizing browser to under 1/2 of the screen) shown in '3 - Portrait.jpg'
4. Mobile (show when re-sizing browser to under 1/4 of the screen) shown in '4 - Mobile.jpg'

Additional feature should be a login screen with username/password stored in the web config file for simplicity.
Along with the package, provide installation instructions for end user (assume end user is non-technical person) on how to setup/access the page.

Notes:

1. All content needs to be used in all modes, the content just shifts down based on the screen mode we are in
2. Mobile mode has a catch, it needs to hide menu that shows 'all deals|flyer items|print flyer|coupons' and only display 'Weekly flyer' banner
3. Project needs to be done in Vue.JS

# Implementation

- My idea for the login screen was to add `vue-router` and a couple of screen with its specific routes, one for the `login` and another for the `flyer`. Show the login on the \ route and protect the other one with a [route guard](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards). I would have added a token to the `localStorage` after a successfull authentication and check for it on the guard before navigating to that route.
- The `Product` component could be reused for both main and regular products by just adding the right css class (`.product` vs `.main-product`).
- Could have used a css pre-procesor.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

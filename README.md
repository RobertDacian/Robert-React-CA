# Robert-React-CA

## Starting the project

- instal dependencies

```js
npm install
```

- start the project

```js
npm run dev
```

- build command

```js
npm run build
```

## Just for my reference

### For deployment with redirect on Netlify

- can add a \_redirect file in the public folder with the following line of code inside

```js
 /index.html 200
```

### For continuous deployment on Netlify

- added "CI=" to the build script command in package.json

```js
"scripts": {
    "dev": "vite",
    "build": "CI= vite build",
    "preview": "vite preview"
  },
```

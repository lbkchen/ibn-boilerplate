# ibn-boilerplate

### Setup

```
yarn install
```

### Run App

```
yarn start
```

### Adding a component

1. Create a new file in `src/components/YourComponent.jsx`.
2. Add an entry to the `<div>` in `src/App.js` like so (see the commented lines in that file for an example):

```jsx
<Router>
  <div>
    <Route exact path="/" component={HomePage} />
    {/* <Route exact path="/your_path" component={YourComponent} /> */}
  </div>
</Router>
```

3. You can add any stylesheets to `src/stylesheets`, and then import them in `src/stylesheets/app.scss`. Prefer not to modify any of the existing stylesheets, as it may cause merge conflicts.
4. Add any assets to `src/images`.
5. You will be able to see `YourComponent` at `localhost:3000/your_path`, where the path is specified in the `App.js`.

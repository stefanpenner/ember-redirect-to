# Ember-redirect-to

Ever confused by when to use `this.transitionTo` and `this.replaceWith` in the `redirect`while trying to preserve history?
...Me too...

This addon introduces `this.redirectTo` which _appears_ to always do the what I want it to do....

### Usage

```js
ember install ember-redirect-to
```

In the route you wish to "alias" to another.

```js
// routes/index.js
export default Route.extend({
  redirect() {
    // redirects / -> dashboard
    // correctly chooses transitionTo or replaceWith to ensure the expected history
    this.redirectTo('dashboard');
  }
})
```


## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

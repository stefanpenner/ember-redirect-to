# Ember-redirect-to [![Build Status](https://travis-ci.org/stefanpenner/ember-redirect-to.svg)](https://travis-ci.org/stefanpenner/ember-redirect-to)

**DEPRECATED**: Starting with Ember v2.10 this addon is no longer needed and you can just use `this.replaceWith` to get the correct behavior!

Ever confused by when to use `this.transitionTo` and `this.replaceWith` in the `redirect`while trying to preserve history?
...Me too...

This addon makes `this.redirectTo` available in Routes, which _appears_ to always do the right things.

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

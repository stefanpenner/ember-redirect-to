import Ember from 'ember';
import RedirectTo from 'ember-redirect-to/mixins/redirect-to';
import { module, test } from 'qunit';

let MockRoute;
const transitionToWasCalled = [];
const replaceWithWasCalled = [];

module('Unit | Mixin | redirect-to', {
  beforeEach() {
    MockRoute = Ember.Object.extend(RedirectTo, {
      replaceWith() {
        replaceWithWasCalled.push([...arguments]);
      },
      transitionTo() {
        transitionToWasCalled.push([...arguments]);
      }
    });
  },
  afterEach() {
    transitionToWasCalled.length = 0;
    replaceWithWasCalled.length = 0;
  }
});

test('replaceWith is called if oldState is falsy', function(assert) {
  var route = MockRoute.create({
    router: { router: { oldState: undefined }},
  });

  route.redirectTo('foo', 'bar', 'baz');

  assert.deepEqual(transitionToWasCalled, []);

  assert.deepEqual(replaceWithWasCalled, [
    [ 'foo', 'bar', 'baz' ]
  ]);
});


test('transitionTo is called if oldState is truthy', function(assert) {
  var route = MockRoute.create({
    router: { router: { oldState:  {} }},
  });

  route.redirectTo('foo', 'bar', 'baz');

  assert.deepEqual(transitionToWasCalled, [
    [ 'foo', 'bar', 'baz' ]
  ]);

  assert.deepEqual(replaceWithWasCalled, [
  ]);
});

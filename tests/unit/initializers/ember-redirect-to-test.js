import Ember from 'ember';
import EmberRedirectToInitializer from '../../../initializers/ember-redirect-to';
import { module, test } from 'qunit';

var application;

module('Unit | Initializer | ember redirect to', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  EmberRedirectToInitializer.initialize(application);
  assert.ok(typeof Ember.Route.create().redirectTo === 'function');
});

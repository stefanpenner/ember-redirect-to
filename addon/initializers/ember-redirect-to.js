import Ember from 'ember';
import RedirectTo from '../mixins/redirect-to';

export function initialize(/* application */) {
  Ember.Route.reopen(RedirectTo);
}

export default {
  name: 'ember-redirect-to',
  initialize: initialize
};

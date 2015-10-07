import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('orgs');
  this.route('f');
  this.route('friends');
});

export default Router;

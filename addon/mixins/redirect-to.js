import Ember from 'ember';

export default Ember.Mixin.create({
  redirectTo() {
    if (this.router.router.oldState) {
      this.transitionTo(...arguments);
    } else {
      this.replaceWith(...arguments);
    }
  }
});

import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

const transitions = [];

class Location {
  init() {
    this.implementation = 'for-testing';
    this.updateCallback = undefined;
    this.path = '';
  }

  getURL() {
    return this.path;
  }

  setURL(path) {
    transitions.push(['setURL', path]);
    this.path = path;
  }

  replaceURL(path) {
    transitions.push(['replaceURL', path]);
    this.path = path;
  }

  onUpdateURL(callback) {
    this.updateCallback = callback;
  }

  handleURL(url) {
    transitions.push(['handleURL', url]);
    this.path = url;
    this.updateCallback(url);
  }

  formatURL(url) {
    return `#${url}`;
  }
}

moduleForAcceptance('Acceptance | the back button', {
  beforeEach() {
    this.application.register('location:none', new Location(), {
      instantiate: false
    });
  },
  afterEach() {
    transitions.length = 0;
  }
});

test('visiting / redirects to /orgs', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal(currentURL(), '/orgs');

    assert.deepEqual(transitions, [
      ['setURL', '/'],
      ['replaceURL', '/orgs']
    ]);

    transitions.length = 0;
  });
});

test('visiting /f redirects to /friends', function(assert) {
  visit('/f');

  andThen(() => {
    assert.equal(currentURL(), '/friends');

    assert.deepEqual(transitions, [
      ['setURL', '/f'],
      ['replaceURL', '/friends']
    ]);

    transitions.length = 0;
  });
});

test('complex sequence / -> /orgs -> /f -> /friends -> /', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal(currentURL(), '/orgs');

    assert.deepEqual(transitions, [
      ['setURL', '/'],
      ['replaceURL', '/orgs']
    ]);

    transitions.length = 0;
  });

  click('a:contains("friends (via /f)")');

  andThen(() => {
    assert.equal(currentURL(), '/friends');

    assert.deepEqual(transitions, [
      ['setURL', '/friends'],
    ]);

    transitions.length = 0;
  });

  click('a:contains("orgs via (/)")');

  andThen(() => {
    assert.equal(currentURL(), '/orgs');

    assert.deepEqual(transitions, [
      ['setURL', '/orgs']
    ]);
  });
});


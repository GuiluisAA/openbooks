import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | clicked-books', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:clicked-books');
    assert.ok(route);
  });
});

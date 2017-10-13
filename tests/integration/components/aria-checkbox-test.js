import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find, focus, blur, click } from 'ember-native-dom-helpers';

const SPACE_KEY = 32;
const ENTER_KEY = 13;

function triggerKeyboardEvent(el, keyCode) {
  var eventObj = document.createEventObject ?
      document.createEventObject() : document.createEvent("Events");

  if(eventObj.initEvent){
    eventObj.initEvent("keydown", true, true);
  }

  eventObj.keyCode = keyCode;
  eventObj.which = keyCode;

  el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent("onkeydown", eventObj);

}

moduleForComponent('aria-checkbox', 'Integration | Component | aria checkbox', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{aria-checkbox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#aria-checkbox}}
      template block text
    {{/aria-checkbox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it should have role="checkbox" attribute', function(assert) {
  this.render(hbs`
    {{#aria-checkbox}}
      template block text
    {{/aria-checkbox}}
  `);

  assert.ok(find('[role="checkbox"]'));
});

test('it should have tabindex="0" attribute', function(assert) {
  this.render(hbs`
    {{#aria-checkbox}}
      template block text
    {{/aria-checkbox}}
  `);

  assert.ok(find('[tabindex="0"]'));
});

test('it should have aria-checked="false" attribute', function(assert) {
  this.render(hbs`
    {{#aria-checkbox}}
      template block text
    {{/aria-checkbox}}
  `);

  assert.ok(find('[aria-checked="false"]'));
});

test('it should have aria-checked attribute from checked prop value', function(assert) {
  this.render(hbs`
    {{#aria-checkbox checked=true}}
      template block text
    {{/aria-checkbox}}
  `);

  assert.ok(find('[aria-checked="true"]'));
});

test('it toggles the checkbox on click', async function(assert) {

  this.set('myProperty', false);

  this.render(hbs`
    {{#aria-checkbox checked=myProperty}}
      template block text
    {{/aria-checkbox}}
  `);

  assert.ok(find('[aria-checked="false"]'));
  await click('[role="checkbox"]');
  assert.ok(find('[aria-checked="true"]'));
  await click('[role="checkbox"]');
  assert.ok(find('[aria-checked="false"]'));
});

test('it should toggle the checkbox on pressing space key', function(assert) {

  this.set('myProperty', false);

  this.render(hbs`
    {{#aria-checkbox checked=myProperty}}
      template block text
    {{/aria-checkbox}}
  `);

  assert.ok(find('[aria-checked="false"]'));
  triggerKeyboardEvent(find('[role="checkbox"]'), SPACE_KEY);
  assert.ok(find('[aria-checked="true"]'));
  triggerKeyboardEvent(find('[role="checkbox"]'), SPACE_KEY);
  assert.ok(find('[aria-checked="false"]'));
});

test('it should do nothing with the checkbox on pressing any other' , function(assert) {

  this.set('myProperty', false);

  this.render(hbs`
    {{#aria-checkbox checked=myProperty}}
      template block text
    {{/aria-checkbox}}
  `);

  assert.ok(find('[aria-checked="false"]'));
  triggerKeyboardEvent(find('[role="checkbox"]'), ENTER_KEY);
  assert.ok(find('[aria-checked="false"]'));
});

test('it should add focus class on focus', async function(assert) {
  this.render(hbs`
    {{#aria-checkbox}} My Checkbox {{/aria-checkbox}}
    <div id="dummy"></div>
  `);

  assert.notOk(find('.focus'));
  await focus('[role="checkbox"]');
  assert.ok(find('.focus'));
});

test('it should remove focus class on blur', async function(assert) {
  this.render(hbs`
    {{#aria-checkbox}} My Checkbox {{/aria-checkbox}}
  `);

  assert.notOk(find('.focus'));
  await focus('[role="checkbox"]');
  assert.ok(find('.focus'));
  await blur('[role="checkbox"]');
  assert.notOk(find('.focus'));
});

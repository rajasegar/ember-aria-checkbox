# ember-aria-checkbox

[![Build Status](https://travis-ci.org/rajasegar/ember-aria-checkbox.svg?branch=master)](https://travis-ci.org/rajasegar/ember-aria-checkbox) 
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-aria-checkbox/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-aria-checkbox?branch=master)
[![npm version](http://img.shields.io/npm/v/ember-aria-checkbox.svg?style=flat)](https://npmjs.org/package/ember-aria-checkbox "View this project on npm")
[![dependencies Status](https://david-dm.org/rajasegar/ember-aria-checkbox/status.svg)](https://david-dm.org/rajasegar/ember-aria-checkbox)
[![devDependencies Status](https://david-dm.org/rajasegar/ember-aria-checkbox/dev-status.svg)](https://david-dm.org/rajasegar/ember-aria-checkbox?type=dev)
[![EmberObserver](http://emberobserver.com/badges/ember-aria-checkbox.svg?branch=master)](http://emberobserver.com/addons/ember-aria-checkbox)


An Ember Checkbox addon widget based on the WAI-ARIA authoring practices.
Fore more info, visit the [page](https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox)

### Class Diagram
![Class Diagram](https://raw.githubusercontent.com/rajasegar/ember-aria-checkbox/master/pum/class-diagram.png)

### Component Interface

![Interface Diagram](https://raw.githubusercontent.com/rajasegar/ember-aria-checkbox/master/pum/interface.png)

## Demo

[Demo](http://rajasegar.github.io/ember-aria-checkbox/)



## Installation

* `ember install ember-aria-checkbox`

## Usage
Example Markup:

```hbs
{{#aria-checkbox}}Lettuce{{/aria-checkbox}}
```

Default checked state:

```hbs
{{#aria-checkbox checked=true}}Lettuce{{/aria-checkbox}}
```

You can also pass in any model value to the checked state to reflect the checkbox state.

```js
this.set('isLettuce', true);
```

```hbs
{{#aria-checkbox checked=isLettuce}}Lettuce{{/aria-checkbox}}
```



## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

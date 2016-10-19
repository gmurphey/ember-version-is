/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-version-is',

  included: function(app) {
    while (typeof app.import !== 'function' && (app.app || app.parent)) {
      app = app.app || app.parent;
    }

    this._super.included(app);
    app.import('vendor/semver.browser.js');
  }
};

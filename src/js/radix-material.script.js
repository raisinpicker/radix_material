(function () {
  'use strict';

  Drupal.behaviors.helloWorld = {
    attach: function (context) {
      console.log('Hello, this is Radix Material');
    }
  };

})(jQuery, Drupal);

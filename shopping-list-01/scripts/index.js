/* global shoppingList, cuid, store, Item*/
'use strict';
// eslint-disable-next-line no-unused-vars
console.log('hello');

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});
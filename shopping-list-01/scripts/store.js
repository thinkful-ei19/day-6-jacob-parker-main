/* global cuid */
// eslint-no-unused-vars
'use strict';
const store = (function() {
  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = {hideCheckedItems: false};
  let searchTerm = {searchTerm: ''};
  return {
    items, hideCheckedItems, searchTerm
  };
}());
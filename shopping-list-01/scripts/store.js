/* global cuid, Item */
// eslint-no-unused-vars
'use strict';
const store = (function() {

  function findById(id) {
    return items.filter(item => item.id === id)[0];
  }

  function addItem(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch (error) {
      console.log('Cannot add item: ' + error.message);
    }
  }

  function findAndToggleChecked(id) {
    this.findById(id).checked = !this.findById(id).checked;
  }

  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      this.findById(id).name = newName;
    } catch (error) {
      console.log('Cannot add item: ' + error.message);
    }
  }

  function findAndDelete(id) {
    this.items = this.items.filter(item => item.id !== id);
  }

  function toggleCheckedFilter() {
    
  }

  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';
  return {
    items, hideCheckedItems, searchTerm, findById,
    addItem, findAndToggleChecked, findAndUpdateName,
    findAndDelete
  };
}());
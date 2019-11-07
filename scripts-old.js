const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');
  const item__button = document.querySelector('.item__button');
  const item__checkbox = document.querySelector('.item__checkbox');
  
  text.init(form, items, item__button, item__checkbox);

});

const text = (() => {
  let items;

  function init(_form, _items, _item__button, _item__checkbox) {
    items = _items;
    _form.addEventListener('submit', formHandler);
    _item__button.addEventListener('click', deleteItem);
    _item__checkbox.addEventListener('click', check);
    // TODO láta hluti í _items virka

    //.addEventListener('change', check(e));

    
  }

  function check() {
    let chstat = document.getElementsByClassName('item__checkbox');
    
  
  }

   
  function formHandler(e) {
    e.preventDefault();
    let newLiText = document.getElementById('btext').value;
    add(newLiText);
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    let newIt = document.createElement("li");
    let newInput = document.createElement("input");
    let newText = document.createElement("span");
    newText.textContent = value;
    let newButton = document.createElement("button");
    newButton.textContent = 'Eyða';

    let addIt = document.getElementById('itemList');
    addIt.appendChild(newIt);
    newIt.appendChild(newInput).setAttribute('type', 'checkbox');
    newIt.appendChild(newText);
    newIt.appendChild(newButton);
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    console.log('Smellt');
    let pa = document.getElementById('itemList');
    let ch = document.getElementsByClassName('item')[0];
    pa.removeChild(ch);
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
    newInput.setAttribute('type', 'checkbox');

  }

  return {
    init: init
  }
})();

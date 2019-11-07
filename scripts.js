
const ENTER_KEYCODE = 13;
let pnform;
let newForm;
let oldButton;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');
  let item__button;
  const item__checkbox = document.querySelector('.item__checkbox');
  text.init(form, items, item__button, item__checkbox);
});

const text = (() => {
  let items;

  function init(_form, _items, _item__button, _item__checkbox) {
    items = _items;
    _form.addEventListener('submit', formHandler);

    const item__checkbox = document.querySelectorAll('.item__checkbox');
    for (let i = 0; i < item__checkbox.length; i++){
      item__checkbox[i].addEventListener('click', strikeThr);
    }

    const item__text = document.querySelectorAll('.item__text');
    for (let i = 0; i < item__text.length; i++){
      item__text[i].addEventListener('click', edit);
    }

    item__button = document.querySelectorAll('.item__button');
    for (let i = 0; i < item__button.length; i++){
      item__button[i].addEventListener('click', deleteItem);
    }
    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();
    let newLiText = document.getElementsByClassName('form__input')[0].value;
    add(newLiText);
  }

  function strikeThr(e){
    const{target} = e;
    const parentNode = target.parentNode;
    parentNode.classList.add('item--done');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    const{target} = e;
    const parentNode = target.parentNode;
    const oldText = target;
    parentNode.removeChild(oldText);  
    newForm = document.createElement('input');
    newForm.classList.add('form__input', 'item__text');
    newForm.setAttribute('type','text');
    oldButton = parentNode.getElementsByClassName('item__button')[0];
    parentNode.insertBefore(newForm, oldButton);
    pnform = parentNode;
    newForm.addEventListener('keydown', commit);    
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    if (e.key === 'Enter'){
      let newWork = pnform.getElementsByClassName('form__input')[0].value; 
      pnform.removeChild(newForm);
      let newWorkText = document.createElement('span');
      newWorkText.classList.add('item__text');
      newWorkText.textContent = newWork;
      pnform.insertBefore(newWorkText, oldButton);
    }
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
 
    const newIt = document.createElement("li");
    newIt.classList.add('item');

    const newInput = document.createElement("input");
    newInput.setAttribute ('type', 'checkbox');
    newInput.classList.add('item__checkbox');

    const newText = document.createElement("span");
    newText.classList.add('item__text');
    newText.textContent = value;

    const newButton = document.createElement("button");
    newButton.classList.add('item__button'); 
    newButton.textContent = 'Eyða';

    let addIt = document.getElementsByClassName('items')[0];
    addIt.appendChild(newIt);
    newIt.appendChild(newInput).setAttribute('type', 'checkbox');
    newIt.appendChild(newText);
    newIt.appendChild(newButton);
  
    const form = document.querySelector('.form');
    const items = document.querySelector('.items');
    let item__button;
    const item__checkbox = document.querySelector('.item__checkbox');
    text.init(form, items, item__button, item__checkbox);
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    const{target} = e;
    const parentNode = target.parentNode;
    let pa = document.getElementsByClassName('items')[0];
    pa.removeChild(parentNode);
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
    
  }

  return {
    init: init
  }
})();

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let count= parseInt(itemCountSpan.innerHTML)
let unCount = parseInt(uncheckedCountSpan.innerHTML)
function newTodo() {
  count++
  unCount++

  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const button = document.createElement('button');
  const span = document.createElement('span');
  const id = count;
  
  span.className=classNames.TODO_TEXT;
  span.textContent="Todo #"+count;
  

  checkbox.type='checkbox';
  checkbox.className=classNames.TODO_CHECKBOX;
  checkbox.addEventListener('click', function() {
    unCount--;
    uncheckedCountSpan.innerHTML = unCount;
    checkbox.setAttribute('checked',true);
  });


  button.textContent = "DELETE";
  button.className=classNames.TODO_DELETE;
  button.addEventListener('click', function() {
      count--;
      itemCountSpan.textContent = count;
       if (!button.previousElementSibling.previousElementSibling.getAttribute("checked"))
        {
          unCount--;
          uncheckedCountSpan.textContent = unCount;
        }
      document.getElementById(id).remove();
  }) ;

  li.id=id;
  li.className=classNames.TODO_ITEM
  
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);

  list.appendChild(li);

  itemCountSpan.textContent = count;
  uncheckedCountSpan.textContent = unCount;
}

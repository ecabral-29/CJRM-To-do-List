const formAddToDo = document.querySelector('.form-add-todo')
const inputSearch = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')

const addTodoItem = (event) => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()
  const checkIfFieldNotEmpty = inputValue.length
  const todoHTMLTemplate = `
    <li class="list-group-item d-flex justify-content-between align-items-center"
    data-item="${inputValue}">
    <span>${inputValue}</span>
    <i class="far fa-trash-alt delete" data-trash="${inputValue}"></i>
    </li>
  `
  if (checkIfFieldNotEmpty) {
    todosContainer.innerHTML += todoHTMLTemplate
    event.target.reset()
  }
}

const removeTodoItem = (event) => {
  const clickedElementTrash = event.target.dataset.trash
  const todoItem = document.querySelector(`[data-item = '${clickedElementTrash}']`)
  
  if (clickedElementTrash) {
    todoItem.remove()
  }
}

const searchTodoItem = (event) => {
  const inputValue = event.target.value.trim().toLowerCase()
  const todoItem = Array.from(todosContainer.children)

  todoItem
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('d-flex')
      todo.classList.add('hidden')
  })
  todoItem
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('hidden')
      todo.classList.add('d-flex')
  })
}

formAddToDo.addEventListener('submit', addTodoItem)
todosContainer.addEventListener('click', removeTodoItem)
inputSearch.addEventListener('input', searchTodoItem)

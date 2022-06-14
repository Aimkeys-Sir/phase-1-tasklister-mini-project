document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    addNewTask()
  })
})


function addNewTask() {

  let input = document.getElementById("new-task-description").value
  const taskList = document.getElementById("tasks")

  //capitalize first letter of input
  input=input.split("")
  input[0]=input[0].toUpperCase()
  input=input.join("")

  console.log(input)

  //the row
  const row = document.createElement("tr")
  const col1 = document.createElement("td")
  const col2 = document.createElement("td")
  const col3 = document.createElement("td")
  //the images
  const empty = document.createElement("img")
  empty.src = "./src/images/empty.png"
  const nope = document.createElement("img")
  nope.src = "./src/images/nope.png"

  empty.style.height = '20px'
  empty.style.width = '20px'

  nope.style.height = '20px'
  nope.style.width = '20px'
  //add to columns
  col1.append(empty)
  col2.textContent = input
  col3.append(nope)

  //add colums to the row and row to table
  row.append(col1, col2, col3)
  taskList.append(row)
  // clear input
  input.value = ""
  //add listeners
  col1.addEventListener("click", function(){
    empty.src="./src/images/check.png"
    col3.remove()
  })
  col3.addEventListener('click', function(){
    row.remove()
  })
}

document.addEventListener("click", handleClick);

// Selectors
const titleInput = document.querySelector(".title-input");
const toDoInput = document.querySelector(".to-do-input");
const addTextBtn = document.querySelector(".add-to-do-btn");
const toDoContainer = document.querySelector(".to-do-container");
const completedContainer = document.querySelector(".completed-container");

function handleClick(e) {
  const clickedElement = e.target;
  //Add To do
  if (clickedElement.classList.contains("add-to-do-btn")) {
    console.log("Add button pressed");
    const titleText = titleInput.value;
    const toDoText = toDoInput.value;
    const gridItem = `<div class="grid-item"><h2 class="delete-btn">x</h2><h2>${titleText}</h2><p>${toDoText}</p><h3 class="completed-btn">Completed</h3></div>`;
    toDoContainer.innerHTML += gridItem;
  }
  //Removing To DO container
  else if (clickedElement.classList.contains("delete-btn")) {
    clickedElement.parentElement.remove();

    //Färgar Title blå om man klickar nån annanstans
  } else if (clickedElement.classList.contains("grid-item")) {
    const children = clickedElement.children;
    children[1].style = "color:blue";
  } //Adding to do in completed list
  else if (clickedElement.classList.contains("completed-btn")) {
    const gridItem = clickedElement.parentElement;
    completedContainer.appendChild(gridItem);
  }
}

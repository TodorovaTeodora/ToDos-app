let input = document.getElementById("inputField");
let list = document.getElementById("todos");
let myForm = document.getElementById("myForm");

const addEvent = event => {
  event.preventDefault();
  if (input.value !== "") {
    let text = "'" + input.value + "'";
    const li = document.createElement("li");
    const label = document.createElement("label");
    label.className = "uncompleted";
    label.innerText = text;
    input.value = "";
    const deletion = document.createElement("button");
    deletion.id = "deleleteButton";
    deletion.innerText = "delete";
    deletion.addEventListener("click", event => {
      list.removeChild(li);
    });

    li.addEventListener("click", event => {
      const name = label.className;
      if (name === "completed") {
        label.className = "uncompleted";
      } else {
        label.className = "completed";
      }
    });

    li.appendChild(label);
    li.appendChild(deletion);
    list.appendChild(li);
  }
};

input.addEventListener("blur", addEvent);
myForm.addEventListener("submit", addEvent);

input.addEventListener("focus", event => {
  input.placeholder = "Click enter after each ToDo";
});

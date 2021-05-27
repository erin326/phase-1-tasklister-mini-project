document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.getElementById("new-task-description");
  const tasks  = document.getElementById('tasks');

 function addInput() {
  const li = document.createElement('li');
  li.innerText = input.value;
  tasks.appendChild(li);
  const btn = document.createElement('button');
  btn.innerHTML = 'X';
  btn.type = 'delete';
  btn.name = 'deleteBtn';
  li.appendChild(btn);
  btn.addEventListener('click', function() {
    li.parentNode.removeChild(li);
  })
 }


 const submit = document.getElementById('submit');

submit.addEventListener('click', addInput);

submit.addEventListener('click', function(event) {
  event.preventDefault();
})


});

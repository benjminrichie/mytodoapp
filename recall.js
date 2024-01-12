var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
const listItems = document.querySelectorAll('li');
const container = document.querySelector('.container');
const ol = document.querySelector("ol");

// Strike through
listItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('completed');
  });
});

// Adjust containers height dynamically
function updateContainerHeight() {
  const listHeight = ol.getBoundingClientRect().height;
  const newContainerHeight = listHeight + 100; // Adjust as needed
  container.style.height = newContainerHeight + 'px';
}

// REUSABLE FUNCTION
function gradient() {
  body.style.background =
    "linear-gradient(to right, " +
    color1.value +
    "," +
    color2.value +
    ")";
}

color1.addEventListener("input", gradient);
color2.addEventListener("input", gradient);

var userInput = document.getElementById("userInput");
var validate = document.getElementById("validate");

validate.addEventListener("click", function () {
  if (userInput.value.length > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));

    // Create remove button for the new list item
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('removeButton');

    // Add event listener to remove the list item
    removeButton.addEventListener('click', () => {
      li.remove();
      updateContainerHeight();
    });

    // Add event listener to the new list item
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Append the remove button to the new list item
    li.appendChild(removeButton);

    ol.appendChild(li);
    userInput.value = "";
    //updateContainerHeight(); // Update container height after adding an item
  }
});

userInput.addEventListener("keypress", function (event) {
  if (userInput.value.length > 0 && event.keyCode === 13) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));

    // Create remove button for the new list item
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('removeButton');

    // Add event listener to remove the list item
    removeButton.addEventListener('click', () => {
      li.remove();
      //updateContainerHeight();
    });

    // Add event listener to the new list item
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Append the remove button to the new list item
    li.appendChild(removeButton);

    ol.appendChild(li);
    userInput.value = "";
    //updateContainerHeight(); // Update container height after adding an item
  }
});

// Add this part to apply the completed class to existing items
listItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('completed');
  });
});
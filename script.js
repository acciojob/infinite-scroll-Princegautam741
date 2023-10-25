const scrollContainer = document.getElementById("infi-list");
let i = 10; // Start from 10 since you already added 10 items by default

function addOneItem() {
  const li = document.createElement("li");
  li.innerText = `Item ${i++}`;
  scrollContainer.appendChild(li);
}

// Add 10 items by default
for (let j = 0; j < 10; j++) {
  addOneItem();
}

// Add more items when the user reaches the end of the list
scrollContainer.addEventListener("scroll", () => {
  if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
    for (let j = 0; j < 2; j++) {
      addOneItem();
    }
  }
});

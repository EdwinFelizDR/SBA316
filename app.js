//2. Cache at least one element using querySelector or querySelectorAll. 
const submitBtn = document.querySelector('#submitBtn');

var tbl = document.querySelector('#tbl');


// Register at least two different event listeners and create the associated event handler functions
function addTask(event) {
   event.preventDefault();
   alert('this works');

   //1. Cache at least one element using selectElementById. 
   //Getting the element input box
   const inputEl = document.getElementById('itemText');
   const dateEl = document.getElementById('date');

   //Create a li element with the text inserted on the input box
   //5. Create at least one element using createElement. 
   const trEl = document.createElement('tr');
   const tdEldate = document.createElement('td');
   const tdEltext = document.createElement('td');

   //Storing the input text on the constant named textInput
   const textInput = inputEl.value;
   const dateInput = dateEl.value.toString();
   console.log(dateInput)

   //checking if is working
   //6. Use appendChild and/or prepend to add new elements to the DOM. 
   console.log(textInput);
   tbl.appendChild(trEl);

   //8. Modify the HTML or text content of at least one element 
   // in response to user interaction using innerHTML, innerText, or textContent. 
   tdEldate.innerHTML = dateInput; 
   trEl.appendChild(tdEldate);

   event.stopPropagation();

    tdEltext.innerHTML += textInput; 
    trEl.appendChild(tdEltext);
   // submitBtn
}

//11. Register at least two different event listeners and create the associated event handler functions
submitBtn.addEventListener('click', addTask );

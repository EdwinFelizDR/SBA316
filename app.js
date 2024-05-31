//2. Cache at least one element using querySelector or querySelectorAll. 
const submitBtn = document.querySelector('#submitBtn');
const tbl = document.querySelector('#tbl');
const tblheader = document.querySelector("#tblheader").children;
const feedbackMessage = document.getElementById('feedbackMessage');

console.log(tblheader);

//4. Iterate over a collection of elements to accomplish some task. 
//Change the color to blue for each element(th) on the table header.
Array.from(tblheader).forEach(element => {
   //9. Modify the style and/or CSS classes of an element in response to 
   //   user interactions using the style or classList properties. 
   element.style.color = "blue";
});

// Function to validate date
function validateDate() {
   const dateEl = document.getElementById('date');
   const selectedDate = new Date(dateEl.value);
   const today = new Date();

   // Check if the selected date is before today
   if (selectedDate < today ) {
      window.alert('Please select a valid date (after today).');
      return false;
   }
   return true;
}

// Register at least two different event listeners and create the associated event handler functions
// Event handler to add task
function addTask(event) {
   event.preventDefault();

   //Check the date to ensure is not before today
   if (!validateDate()) {
      return;
   }

   //1. Cache at least one element using selectElementById. 
   //Getting the element input box
   const inputEl = document.getElementById('itemText');
   const dateEl = document.getElementById('date');

   //Storing the input text on the constant named textInput
   const textInput = inputEl.value;
   const dateInput = dateEl.value.toString();

   if(textInput && dateInput){
   //Create a li element with the text inserted on the input box
   //5. Create at least one element using createElement. 
   const trEl = document.createElement('tr');
   const tdEldate = document.createElement('td');
   const tdEltext = document.createElement('td');
   const tdElstatus = document.createElement('td');
   const doneBtn = document.createElement('button');

   //8. Modify the HTML or text content of at least one element 
   // in response to user interaction using innerHTML, innerText, or textContent. 
   tdEldate.textContent = dateInput; 
   tdEltext.textContent = textInput; 
   tdElstatus.textContent = "In progress";

   doneBtn.textContent = 'Done';
   doneBtn.addEventListener('click', () => {
      tdElstatus.textContent = 'Completed';
      trEl.style.textDecoration = 'line-through';

      //10. Modify at least one attribute of an element in response to user interaction. 
      // Disable the button if done is press
      doneBtn.setAttribute('disabled', 'true');
   });

   //6. Use appendChild and/or prepend to add new elements to the DOM. 
   trEl.appendChild(tdEldate);
   trEl.appendChild(tdEltext);
   trEl.appendChild(tdElstatus);
   tbl.appendChild(trEl);
   trEl.appendChild(doneBtn);

   // Update feedback message
      feedbackMessage.innerText = 'Task added successfully!';

   //Show the feedback message for 5 seconds
   setTimeout(() => {
      feedbackMessage.innerText = '';
   }, 3000);

   //clear input fields
      inputEl.value = '';
      dateEl.value = '';

   } else {
      //12. Use at least two Browser Object Model (BOM) properties or methods. 
      window.alert('Please fill in all fields.');
   }
}

//11. Register at least two different event listeners and create the associated event handler functions
submitBtn.addEventListener('click', addTask );
document.getElementById('taskForm').addEventListener('submit', addTask);

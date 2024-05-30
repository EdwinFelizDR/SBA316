const submitBtn = document.querySelector('#submitBtn');

var tbl = document.querySelector('#tbl');


function addTask(event) {
   event.preventDefault();
   alert('this works');

   //Getting the element input box
   const inputEl = document.getElementById('itemText');
   const dateEl = document.getElementById('date');

   //Create a li element with the text inserted on the input box
   const trEl = document.createElement('tr');
   const tdEldate = document.createElement('td');
   const tdEltext = document.createElement('td');

   //Storing the input text on the constant named textInput
   const textInput = inputEl.value;
   const dateInput = dateEl.value.toString();
   console.log(dateInput)

   //checking if is working
   console.log(textInput);
   tbl.appendChild(trEl);
   tdEldate.innerHTML = dateInput; 
   trEl.appendChild(tdEldate);

   event.stopPropagation();

    tdEltext.innerHTML += textInput; 
    trEl.appendChild(tdEltext);
   // submitBtn
}

submitBtn.addEventListener('click', addTask );

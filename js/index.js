/* 
     FORMS
	 form element that takes the submit event


*/
const profileForm = document.querySelector("#profile-form");

profileForm.addEventListener("submit", onUpdateProfile);

function onUpdateProfile(e) {
	// stopping the submit event from refreshing the browser 
     e.preventDefault();

     // Reference Variable to the input elements
     //  . trim prevent white space input
	const firstName = document.querySelector("#first-name").value.trim();
	const lastName = document.querySelector("#last-name").value.trim();
     
     // Reference to the DOM that is used to display the text
	// const fullNameDisplay = document.querySelector("#full-name");
	document.querySelector("#full-name").textContent = `${firstName} ${lastName}`;
     // const name = firstName + "" + lastName;
     // console.log(name);
}


/* 
      Function fn()
      a reusable action same code ... task.

      $600.00

      Terminology 
      function body
      function formatNumber() {
          // write the js code... action
      }

      *invoke/call means run the function
      *formatNumber()

      formatNumber = () => {
          console.log("object");
      }
*/
//object methods things that it can do
// OOP + functional programming
// fn() return a value. We do this by using "return;"
function formatPrice(price) {
     // write the function action/method ... do
     // const formattedString = `$${price.toFixed(2)}`;
     // return formattedString
     //  OR 
     return `$${price.toFixed(2)}`;
}
// call/invoke/run
// (argument)
const price = formatPrice(600);
console.log(`Outside of the function: ${price}`);
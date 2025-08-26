Registration Link: https://stephen-semense.github.io/Registration-Form/

This script is responsible for handling the behavior of the registration form and the success popup. Instead of letting the form refresh the page after submission, the script takes control, checks if all the inputs are valid, and then shows a styled popup message to confirm that the registration was successful. It also provides multiple ways for the user to close the popup, either by clicking the close button or by clicking anywhere outside the popup box.

Here’s a breakdown of what happens:

• The script first grabs the form, the popup box, and the close button so it can control them later.

• When the user submits the form, the script prevents the page from reloading automatically.
	The script then checks if the form is valid (using the browser’s built-in validation rules such as required fields and 			pattern matching).

If the form is valid:

  •	The popup is displayed to tell the user their registration was successful.

  •	The form is reset so all fields are cleared.

If the form is not valid:
  •	The script shows the default browser error messages to guide the user in fixing their input.

The popup can be closed in two ways:

  •	By clicking the “×” close button in the corner.

  •	By clicking outside the popup box on the dark background overlay.

This way, the user experience feels smoother and more modern, without needing any page reloads or simple alert boxes.

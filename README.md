# INDIVIDUAL-ASSIGNMENT-WEB-TECH-
JavaScript Interaction:
1.	Submit button

•	When the user clicks the "Submit" button, the validateForm function is triggered.
•	The function checks if the checkbox is checked.

-	If the checkbox is not checked, it shows an alert message asking the user to tick the box and returns false, preventing form submission.
-	If the checkbox is checked, it shows a thank you message and returns true, allowing the form submission to proceed.
This JavaScript interaction ensures that the user must check the checkbox before submitting the form, providing a basic form of validation for sincere contribution.

2.	Add option button

•	When the user clicks the "Add option" button, the addOption function is triggered.
•	This function allows users to add new options to the dropdown list by entering text in a prompt.
•	This is more detail explaination:

1.	Get the Dropdown Element:
The dropdown element from the HTML document using its ID, which is 'kulliyyah'. The document.getElementById function is a common method to access HTML elements by their unique IDs.
2.	Create a New Option Element:
Creates a new option element using the document.createElement method. This new option will be added to the dropdown.
3.	Prompt for User Input:
The prompt function displays a dialog box that prompts the user for input. In this case, it asks the user to enter the text for the new option. The entered text is stored in the optionText variable.
4.	Set the Value and Text of the New Option:
If the user entered a value,it will be set both the value and text properties of the new option to the entered text. The value is what gets sent to the server when the form is submitted, and the text is what is displayed in the dropdown.
5.	Add the New Option to the Dropdown:
Finally, if the user entered a value, the kulliyah option adds the new option to the dropdown using the add method.



References

https://www.w3schools.com/html/html_form_input_types.asp
https://www.w3schools.com/w3css/w3css_slideshow.asp
https://www.w3schools.com/howto/howto_css_sidebar_responsive.asp
https://www.w3schools.com/jsref/met_select_add.asp#:~:text=The%20add()%20method%20is,use%20the%20remove()%20method.
https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/
https://www.sitepoint.com/community/t/form-drop-down-menus-select-other-and-make-a-textbox-appear/2789/2




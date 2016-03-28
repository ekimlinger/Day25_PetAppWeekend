# Welcome to your final weekend challenge Kappa!

In this challenge, you will be creating a Pet Application that allows a user to create Pets that are stored in a database. Then, in another view, the user can see the list of pets.

## You will need three views: 
### 1. Home view -
Nothing special, just greeting the user, giving them direction on how to use the application
### 2. Add view -
This page will allow the user to add a new pet with a form,
### 3. View view (Yup, view view) -
Meaning that the user can see a list of the entered pets.

You will need to use Angular Routes to control the views. You will need to use MongoDB as the database that stores the pets. You will need to use an Angular Factory to make the calls to the server, and to store the information. Meaning that the two views that interact with the server to Post information to the database, and Get information from the database belong to the Factory that is injected into the two Controllers. Each Pet will need to have the following information: - Name (example, Grilled Cheese) - Animal (example, Cat), - Age (example, 14) - Image Url

## Hard Mode
Look into delete functionality with Mongoose and add a button in the View view to delete a pet from the database. This will require research in how to identify the pet that is supposed to be deleted from the database.

## Pro Mode
Look into Filtering. In the View view, include a button to turn on Alphabetical Sorting of the pets. This option can be toggled on and off.

# Akan Name Generator

## Author

Roshi Mohamed

## About

Hi! This is a simple Akan Name Generator I made while practising HTML, CSS and JavaScript.

The website allows a user to enter their date of birth and choose Male or Female. It then calculates the weekday they were born and displays the Akan name connected to that day.

Working on this project helped me practise using JavaScript functions, arrays, operators, control flow, form validation, Git, GitHub and GitHub Pages.

## What You’ll Find on the Website

* A short introduction to Akan day names
* A form for entering the day, month and year of birth
* Male and Female selection options
* Validation for empty or incorrect information
* An alert when the user enters an invalid date
* A calculation that finds the user’s birth weekday
* The corresponding Akan name
* A form that clears after displaying the result
* A responsive layout that works on computers and smaller screens

## Akan Names Used

| Day | Male Name | Female Name |
| --- | --- | --- |
| Sunday | Kwasi | Akosua |
| Monday | Kwadwo | Adwoa |
| Tuesday | Kwabena | Abenaa |
| Wednesday | Kwaku | Akua |
| Thursday | Yaw | Yaa |
| Friday | Kofi | Afua |
| Saturday | Kwame | Ama |

## BDD (Behaviour-Driven Development)

BDD describes how the website should behave when a user performs a particular action.

| Behaviour | Example Input | Expected Result |
| --- | --- | --- |
| The user enters a valid birth date and selects Female | 28 July 2005, Female | The website displays Yaa and Thursday |
| The user enters a valid birth date and selects Male | 28 July 2005, Male | The website displays Yaw and Thursday |
| The user leaves one or more fields empty | Missing day, month, year or gender | The website displays an alert |
| The user enters an invalid day | Day is less than 1 or greater than 31 | The website displays an alert |
| The user enters an invalid month | Month is less than 1 or greater than 12 | The website displays an alert |
| The user enters a date that does not exist | 31 February 2005 | The website displays an alert |
| The user enters a future birth date | A date later than today | The website displays an alert |

## Technologies Used

* HTML
* CSS
* JavaScript
* Git
* GitHub
* GitHub Pages

## Project Setup Instructions

If you want to open the project on your computer, follow these steps.

1. Clone the repository:

   ```bash
   git clone https://github.com/Roshi-collab/akan-name-generator.git
   ```

2. Open the project folder:

   ```bash
   cd akan-name-generator
   ```

3. Open `index.html` in your browser.

That’s it. The project uses plain HTML, CSS and JavaScript, so there is nothing else to install.

## Live Website

[Open the live Akan Name Generator](https://roshi-collab.github.io/akan-name-generator/)

## GitHub Repository

[View the project on GitHub](https://github.com/Roshi-collab/akan-name-generator)

## Contact

You can find me on GitHub:

[Roshi-collab](https://github.com/Roshi-collab)

## Copyright

Copyright © 2026 Roshi Mohamed. All rights reserved.

## Licence

This project uses the MIT Licence. The full licence can be found in the `LICENSE` file.
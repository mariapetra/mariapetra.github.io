need to do:

check favicon is working
https://favicon.io/favicon-generator/ - used and files saved

icons for skills:
https://icons8.com

colour scheme - triadic
main blue - sub = pink/yellow

Primary = blue:

    main - #00bcd4
    Light - #62efff
    Dark - #008ba3

Secondary = pink

    Main - #e91e63
    Light - #ff6090
    Dark - #b0003a

Tertiary = yellow

    Main - #ffeb3b
    Light - #ffff72
    Dark - #c8b900

add light/dark mode
- light mode = chai and mornings
- dark mood = space and stars
    space invaders - shooting website (once all shot show contact me)
find way to add pyython to website

- create a 404 page

website theme - what do i love?
chai
space
stars



/* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
    width: 100%; /* Full width */
    padding: 12px; /* Some padding */  
    border: 2px solid var(--secondary-color); /* Gray border */
    border-radius: 10px; /* Rounded borders */
    box-sizing: border-box; /* Make sure that padding and width stays in place */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
    resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
  }
  
  /* Style the submit button with a specific background color etc */
  input[type=submit] {
    background-color: var(--secondary-color);
    color: var(--light-font);
    width: 8rem;
    justify-content: center;
    border: unset;
    padding-bottom: 2rem;
    padding: 10px 25px;
    border-radius: 20px;
    font-size: 20px;
    font-weight: var(--bold-font);
  }
  
  /* When moving the mouse over the submit button, add a darker green color */
  input[type=submit]:hover {
    background-color: var(--bg-color-light);
    color: var(--primary-shadow);  }
  
  /* Add a background color and some padding around the form */
  .form-container {
    border-radius: 5px;
    background-color: var(--bg-color-dark);
    padding: 20px;
  }
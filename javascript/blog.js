let blogElements = document.querySelectorAll('.blog-card');//Selecting all the divs with class name blog card


// USING FOREACH TO GET EACH DIV INSIDE blogElements 
blogElements.forEach((blog, index) => {
  let button = blog.querySelector('.read-more');
  // storing the tags having read-more class
  let show = blog.querySelector('.add-text');
  // storing the tags having add-text class
  let lessButton = blog.querySelector('.show-less');
  // storing the tags having show-less class


  // FUNCTION WHEN, read-more is clicked 
  button.addEventListener('click', () => {
    show.style.display = "inline-block";
    // SHOWING THE TEXT
    button.style.display = "none";
    // HIDING THE READ-MORE BUTTON
    lessButton.style.display = "inline-block";
    // SHOWING THE show-less button
  });

  // WHEN show-less is clicked

  lessButton.addEventListener('click', () => {
    lessButton.style.display = "none";
    // HIDING THE SHOW-LESS BUTTON
    show.style.display = "none";
    // HIDING THE TEXT
    button.style.display = "inline-block";
    // SHOWING THE READ MORE button
  });
});
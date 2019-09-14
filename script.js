//declare variables for form validation
const email = document.getElementById('email');
const comment = document.getElementById('comment');
const form = document.getElementById('form');
const emailError = document.getElementById('email-error');
const commentError = document.getElementById('comment-error')

//create new event listener for when submit button is pushed
form.addEventListener('submit', validate);

//function called from event listener to validate form
function validate(event) {
  let emailErrorMessages = [];
  let commentErrorMessages = [];
  if (email.value === '' || email.value == null) {
    emailErrorMessages.push('Email is required');
  }
  else if (!(email.value.includes("@"))) {
    emailErrorMessages.push("That doesn't look like an email");
  }
  if (comment.value === '' || comment.value == null) {
    commentErrorMessages.push('Comment is required');
  }
  //if at least one of the forms is not valid, stop submission and print errors to screen
  if (emailErrorMessages.length > 0 || commentErrorMessages.length > 0) {
    event.preventDefault();
    emailError.innerText = emailErrorMessages.join(', ');
    commentError.innerText = commentErrorMessages.join(', ');
  }
}

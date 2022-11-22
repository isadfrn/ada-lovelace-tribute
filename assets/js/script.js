document.getElementById('button-send').addEventListener('click', validateForm);

function validateForm() {
  if (
    document.getElementById('user-name').value != '' &&
    document.getElementById('user-phone').value != '' &&
    document.getElementById('user-email').value != ''
  ) {
    alert('Ready! You will receive the news by email!');
  } else {
    alert('Please fill in all fields!');
  }
}

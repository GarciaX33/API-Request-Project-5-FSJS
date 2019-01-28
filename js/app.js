/** will retrieve randomuser.me data **/
$( document ).ready(function() {
  fetch('https://randomuser.me/api?results=12&nat=us')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return displayUsers(data.results);
    });
});

function displayUsers(data){
  let gallery = $('#gallery');
  let userGroup = ''
  for (let index = 0; index < data.length; index++){ /** will start for loop **/
    userGroup += `
    <div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${data[index].picture.large}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${data[index].name.first} ${data[index].name.last}</h3>
            <p class="card-text">${data[index].email}</p>
            <p class="card-text cap">${data[index].location.city}</p>
        </div>
    </div>
    `;
  } /** will end for loop **/
  /** will append userGroup to gallery id **/
  gallery.append(userGroup);
  /** will use jquery on modal close button on click it calls the function to remove the modal container **/
  $('#modal-close-btn').on('click', function(){
    $('.modal-container').remove();
  });
}

/** will send a request to the API, and use the response data to display 12 users **/
/** will retrieve randomuser.me data when page loads **/
$( document ).ready(function() {
  fetch('https://randomuser.me/api?results=12&nat=us')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return displayUsers(data.results);
    });
});

/** will display user info and profile picture **/
function displayUsers(data){
  let userGroup = '';
  let gallery = '#gallery';
  for (let index = 0; index < data.length; index++){ /** will start for loop **/
    userGroup += `
    <div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${data[index].picture.large}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name">${data[index].name.first.toUpperCase()} ${data[index].name.last.toUpperCase()}</h3>
            <p class="card-text">${data[index].email}</p>
            <p class="card-text">${data[index].location.city.toUpperCase()}</p>
        </div>
    </div>
    `}; /** will end for loop **/
  /** will append userGroup to gallery id **/
  $(gallery).append(userGroup);
  /**  will add event listenr for modalUsers to display modalUsers**/
  $('.card').bind('click', function(){
      modalUsers(data[$('.card').index(this)]);
    });
}

/** will display extra user information viewable in the modal info container **/
function modalUsers(info) {
  let dob = info.dob.date;
  let day = dob.slice(8, 10);
  let month = dob.slice(5, 7);
  let year= dob.slice(2, 4);
  let gallery = '#gallery';
  let modalContainer = '.modal-container';
  let modalWindow = '';
    modalWindow +=
    `<div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${info.picture.large} " alt="profile picture">
                <h3 id="name" class="modal-name cap">${info.name.first} ${info.name.last}</h3>
                <p class="modal-text">${info.email}</p>
                <p class="modal-text cap">${info.location.city}</p>
                <hr>
                <p class="modal-text">${info.phone}</p>
                <p class="modal-text cap">${info.location.street}, ${info.location.state} ${info.location.postcode}</p>
                <p class="modal-text"><strong>Birthday:</strong> ${month}/${day}/${year}</p>
            </div>
        </div>
    </div>`;

/** will appeend gallery id to modalWindow **/
  $(gallery).append(modalWindow);
/** will close button on click it calls to remove the modal container **/
  $('#modal-close-btn').bind('click', function(){
    $(modalContainer).remove();
    $(gallery).show();
  });
  /**$('#modal-close-btn').bind('click'function(){
    $(modalContainer).remove();
  }); **/
}

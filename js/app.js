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
  /**  will add event listenr for modalUsers**/
  $('.card').bind('click', function(){
      modalUsers(data[$('.card').index(this)]);
    });
}

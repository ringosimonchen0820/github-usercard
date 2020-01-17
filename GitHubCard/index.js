/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cardParent = document.querySelector('.cards');

axios.get('https://api.github.com/users/max821023')
  .then(response => {
    console.log(response.data);
    cardParent.append(createCard(response.data));
  })
  .catch(error => {
    console.log("the data was not returned", error)
  })
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function createCard(data) {
  // setup elements
  const card = document.createElement('div');
  const profilePic = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // setup structure 
  card.append(profilePic);
  card.append(cardInfo);

  cardInfo.append(name);
  cardInfo.append(userName);
  cardInfo.append(location);
  cardInfo.append(profile);
  cardInfo.append(followers);
  cardInfo.append(following);
  cardInfo.append(bio);

  profile.append(profileLink);

  // assign class names 
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  // setup context of elements 
  profilePic.src = data.avatar_url;
  name.textContent = data.name;
  userName.textContent = data.login;
  location.textContent = data.location;
  profileLink.href = data.html_url;
  bio.textContent = data.bio;

  if(data.followers >= 2) {
      followers.textContent = `I have ${data.followers} followers.`;
    } else if (data.followers = 1) {
      followers.textContent = `I ONLY have ONE follower!!!`;
    } else {
      followers.textContent = `I AM A LOSER, NO ONE FOLLOWS ME!!!`
    }
  
  if(data.following >= 2) {
      following.textContent = `I am following ${data.following} users.`;
    } else if (data.following = 1) {
      following.textContent = `I am following one user.`;
    } else {
      following.textContent = `I AM A HATER, I FOLLOW NO ONE!!!`;
    }

  // return result
  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

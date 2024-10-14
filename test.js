const favCar = document.getElementById(`favcar`);
const favArtists = document.getElementById(`favartists`);
const name = document.getElementById(`name`);
const age = document.getElementById(`age`);
const favsong = document.getElementById(`favsong`);

function showAge() {
  const ageValue = age.value;
  if (ageValue && !isNaN(ageValue)) {
    document.getElementById(`display_question3`).innerHTML = `Age: ${ageValue}`;
  } else {
    alert(`please enter a number`);
  }
}

function showFavoriteCar() {
  const carValue = favCar.value.trim();
  if (carValue) {
    document.getElementById(`display_question2`).innerHTML =
      `Favorite Car: ${carValue}`;
  } else {
    alert(`please enter a car`);
    // Tells the user to enter a car using a window pop up
  }
}

function showFavoriteArtist() {
  const artistValue = favArtists.value;
  const artistName = favArtists.options[favArtists.selectedIndex].text;
  document.getElementById(`display_question4`).innerHTML =
    `Favorite Artist: ${artistName}`;

  // List all artist IDs
  const allArtists = [`chief_keef`, `megan`, `sexyy_redd`, `destroy_boys`];

  // Hide all artists first

  allArtists.forEach((artist) => {
    document.getElementById(artist).style.visibility = `hidden`;
  });

  // Show only the selected artist
  if (allArtists.includes(artistValue)) {
    document.getElementById(artistValue).style.visibility = `visible`;
  }
}

function showName() {
  const nameValue = name.value;
  if (nameValue) {
    document.getElementById(`display_question1`).innerHTML =
      `Name: ${nameValue}`;
  } else {
    alert(`please enter your name`);
    // Tells user to enter their name via window pop up
  }
}

function showFavoriteSong() {
  let songValue = favsong.value.trim();
  if (songValue) {
    // Extract video id from different URL formats
    let videoId = extractYoutubeVideoId(songValue);

    if (videoId) {
      let embedURL = `https://www.youtube.com/embed/${videoId}`;
      document.getElementById(`display_question5`).innerHTML =
        `<iframe width = "560" height = "315" src="${embedURL}" frameborder="0" allowfullscreen></iframe>`;
    } else {
      alert(`Please enter a valid embed youtube URL`);
    }
  } else {
    alert(`please enter a embed youtube URL`);
  }
}

// Takes a youtube URL and returns the video ID
function extractYoutubeVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

function clearInput() {
  document.getElementById(`name`).value = ``;
  document.getElementById(`favcar`).value = ``;
  document.getElementById(`age`).value = ``;
  document.getElementById(`favsong`).value = ``;
  document.getElementById(`display_question1`).innerHTML = ``;
  document.getElementById(`display_question2`).innerHTML = ``;
  document.getElementById(`display_question3`).innerHTML = ``;
  document.getElementById(`display_question4`).innerHTML = ``;
  document.getElementById(`display_question5`).innerHTML = ``;
  document.getElementById(`cat_photo`).src = "";
  document.getElementById(`catphoto`).value = ``;
  const allArtists = [`chief_keef`, `megan`, "sexyy_redd", "destroy_boys"];
  allArtists.forEach((artist) => {
    document.getElementById(artist).style.visibility = "hidden";
  });
}

// Handles the file upload
const fileInput = document.getElementById(`catphoto`);
fileInput.addEventListener(`change`, handleFileUpload);

// function to read the uploaded file
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageUrl = e.target.result;
      const img = document.getElementById("cat_photo");
      img.src = imageUrl;
    };
    reader.readAsDataURL(file);
  } else {
    alert(`Please upload a valid image file`);
  }
}

// displays the uploaded file, which should be an image
function displayImage(dataURL) {
  const img = document.createElement("img");
  img.src = dataURL;
  document.body.appendChild(img);
}

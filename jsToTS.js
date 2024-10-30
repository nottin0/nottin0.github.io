const age = document.getElementById("age");
const favCar = document.getElementById("favcar");
const favArtists = document.getElementById("favartists");
const userName = document.getElementById("name");
const favSong = document.getElementById("favsong");

function showAge() {
  const ageValue = age === null || age === void 0 ? void 0 : age.value;
  if (ageValue && !isNaN(Number(ageValue))) {
    const displayElement = document.getElementById("display_question3");
    if (displayElement) {
      displayElement.innerHTML = "Age: ".concat(ageValue);
    }
  } else {
    alert("please enter a number");
  }
}
function showFavoriteCar() {
  const carValue = favCar === null || favCar === void 0 ? void 0 : favCar.value;
  if (carValue) {
    const displayElement = document.getElementById("display_question2");
    if (displayElement) {
      displayElement.innerHTML = "Favorite Car: ".concat(carValue);
    }
  } else {
    alert("please enter a car");
  }
}
function showFavoriteArtist() {
  const favArtistsElement = favArtists;
  const artistValue =
    favArtistsElement === null || favArtistsElement === void 0
      ? void 0
      : favArtistsElement.value;
  const artistName =
    (_a =
      favArtistsElement === null || favArtistsElement === void 0
        ? void 0
        : favArtistsElement.options[favArtistsElement.selectedIndex]) ===
      null || _a === void 0
      ? void 0
      : _a.text;
  const displayElement = document.getElementById("display_question4");
  // pop up alert if the default option is selected
  if (artistValue === "none") {
    displayElement.innerHTML = "";
    alert("please select an artist");
  } else {
    if (displayElement) {
      displayElement.innerHTML = "Favorite Artist: ".concat(artistName);
    }
  }

  // List all artist IDs
  const allArtists = ["chief_keef", "megan", "sexyy_redd", "destroy_boys"];
  // Hide all artists first
  allArtists.forEach(function (artist) {
    const element = document.getElementById(artist);
    if (element) {
      element.style.visibility = "hidden";
    }
  });
  // Show only the selected artist
  if (artistValue && allArtists.indexOf(artistValue) !== -1) {
    const selectedArtistElement = document.getElementById(artistValue);
    if (selectedArtistElement) {
      selectedArtistElement.style.visibility = "visible";
    }
  }
}
function showName() {
  const nameValue =
    userName === null || userName === void 0 ? void 0 : userName.value;
  if (nameValue) {
    const displayElement = document.getElementById("display_question1");
    if (displayElement) {
      displayElement.innerHTML = "Name: ".concat(nameValue);
    }
  } else {
    alert("please enter your name");
  }
}
function showFavoriteSong() {
  const songValue =
    favSong === null || favSong === void 0 ? void 0 : favSong.value;
  if (songValue) {
    // Extract video id from different URL formats
    const videoId = extractYoutubeVideoId(songValue);
    if (videoId) {
      const embedURL = "https://www.youtube.com/embed/".concat(videoId);
      const displayElement = document.getElementById("display_question5");
      if (displayElement) {
        displayElement.innerHTML =
          '<iframe width = "560" height = "315" src="'.concat(
            embedURL,
            '" frameborder="0" allowfullscreen></iframe>',
          );
      }
    } else {
      alert("Please enter a valid embed youtube URL");
    }
  } else {
    alert("please enter a embed youtube URL");
  }
}
// Takes a youtube URL and returns the video ID
function extractYoutubeVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}
function clearInput() {
  const allQuestions = [
    "display_question1",
    "display_question2",
    "display_question3",
    "display_question4",
    "display_question5",
    "display_question6",
  ];
  allQuestions.forEach(function (question) {
    const element = document.getElementById(question);
    if (element) {
      element.innerHTML = "";
    }
  });
  const allInput = [
    "name",
    "favcar",
    "age",
    "favsong",
    "catphoto",
    "cat_photo",
  ];
  allInput.forEach(function (input) {
    const element = document.getElementById(input);
    if (element) {
      element.value = "";
    }
  });

  const allArtists = ["chief_keef", "megan", "sexyy_redd", "destroy_boys"];
  allArtists.forEach(function (artist) {
    const element = document.getElementById(artist);
    if (element) {
      element.style.visibility = "hidden";
    }
  });
}
// Handles the file upload
const fileInput = document.getElementById("catphoto");
fileInput.addEventListener("change", handleFileUpload);
// function to read the uploaded file
function handleFileUpload(event) {
  let _a, _b;
  const file =
    (_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.files) ===
      null || _b === void 0
      ? void 0
      : _b[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      let _a;
      const imageUrl = (_a = e.target) === null || t;
      const img = document.getElementById("cat_photo");
      if (img) {
        img.src = imageUrl;
      }
    };
    reader.readAsDataURL(file);
  } else {
    alert("Please upload a valid image file");
  }
}
// displays the uploaded file, which should be an image
function displayImage(dataURL) {
  const img = document.createElement("img");
  img.src = dataURL;
  document.body.appendChild(img);
}

function showResults() {
  // Get values from inputs
  const ageValue = document.getElementById("age").value;
  const carValue = document.getElementById("favcar").value;
  const artistSelect = document.getElementById("favartists");
  const artistValue = artistSelect.options[artistSelect.selectedIndex].text;
  const nameValue = document.getElementById("name").value;
  const songValue = document.getElementById("favsong").value;
  const catPhoto = document.getElementById("cat_photo")?.src || '';

  // Validate that all fields are filled
  if (!ageValue || !carValue || !artistValue || !nameValue || !songValue) {
    alert("Please fill in all fields before submitting");
    return;
  }

  // Store in localStorage
  localStorage.setItem('results', JSON.stringify({
    age: ageValue,
    favoriteCar: carValue,
    favoriteArtist: artistValue,
    name: nameValue,
    favoriteSong: songValue,
    catphoto: catPhoto
  }));

  // Redirect to results page
  window.location.href = 'results.html';
}

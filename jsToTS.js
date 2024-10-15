var age = document.getElementById("age");
var favCar = document.getElementById("favcar");
var favArtists = document.getElementById("favartists");
var userName = document.getElementById("name");
var favSong = document.getElementById("favsong");
function showAge() {
  var ageValue = age === null || age === void 0 ? void 0 : age.value;
  if (ageValue && !isNaN(Number(ageValue))) {
    var displayElement = document.getElementById("display_question3");
    if (displayElement) {
      displayElement.innerHTML = "Age: ".concat(ageValue);
    }
  } else {
    alert("please enter a number");
  }
}
function showFavoriteCar() {
  var carValue = favCar === null || favCar === void 0 ? void 0 : favCar.value;
  if (carValue) {
    var displayElement = document.getElementById("display_question2");
    if (displayElement) {
      displayElement.innerHTML = "Favorite Car: ".concat(carValue);
    }
  } else {
    alert("please enter a car");
  }
}
function showFavoriteArtist() {
  var favArtistsElement = favArtists;
  var artistValue =
    favArtistsElement === null || favArtistsElement === void 0
      ? void 0
      : favArtistsElement.value;
  var artistName =
    (_a =
      favArtistsElement === null || favArtistsElement === void 0
        ? void 0
        : favArtistsElement.options[favArtistsElement.selectedIndex]) ===
      null || _a === void 0
      ? void 0
      : _a.text;
  var displayElement = document.getElementById("display_question4");
  if (displayElement) {
    displayElement.innerHTML = "Favorite Artist: ".concat(artistName);
  }
  // List all artist IDs
  var allArtists = ["chief_keef", "megan", "sexyy_redd", "destroy_boys"];
  // Hide all artists first
  allArtists.forEach(function (artist) {
    var element = document.getElementById(artist);
    if (element) {
      element.style.visibility = "hidden";
    }
  });
  // Show only the selected artist
  if (artistValue && allArtists.indexOf(artistValue) !== -1) {
    var selectedArtistElement = document.getElementById(artistValue);
    if (selectedArtistElement) {
      selectedArtistElement.style.visibility = "visible";
    }
  }
}
function showName() {
  var nameValue =
    userName === null || userName === void 0 ? void 0 : userName.value;
  if (nameValue) {
    var displayElement = document.getElementById("display_question1");
    if (displayElement) {
      displayElement.innerHTML = "Name: ".concat(nameValue);
    }
  } else {
    alert("please enter your name");
  }
}
function showFavoriteSong() {
  var songValue =
    favSong === null || favSong === void 0 ? void 0 : favSong.value;
  if (songValue) {
    // Extract video id from different URL formats
    var videoId = extractYoutubeVideoId(songValue);
    if (videoId) {
      var embedURL = "https://www.youtube.com/embed/".concat(videoId);
      var displayElement = document.getElementById("display_question5");
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
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}
function clearInput() {
  var nameInput = document.getElementById("name");
  if (nameInput) {
    nameInput.value = "";
  }
  var favCarInput = document.getElementById("favcar");
  if (favCarInput) {
    favCarInput.value = "";
  }
  var ageInput = document.getElementById("age");
  if (ageInput) {
    ageInput.value = "";
  }
  var favSongInput = document.getElementById("favsong");
  if (favSongInput) {
    favSongInput.value = "";
  }
  var allArtists = ["chief_keef", "megan", "sexyy_redd", "destroy_boys"];
  allArtists.forEach(function (artist) {
    var element = document.getElementById(artist);
    if (element) {
      element.style.visibility = "hidden";
    }
  });
}
// Handles the file upload
var fileInput = document.getElementById("catphoto");
fileInput.addEventListener("change", handleFileUpload);
// function to read the uploaded file
function handleFileUpload(event) {
  var _a, _b;
  var file =
    (_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.files) ===
      null || _b === void 0
      ? void 0
      : _b[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var _a;
      var imageUrl =
        (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
      var img = document.getElementById("cat_photo");
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
  var img = document.createElement("img");
  img.src = dataURL;
  document.body.appendChild(img);
}

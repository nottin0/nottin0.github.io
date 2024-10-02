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
  const songValue = favsong.value.replace(`/watch?v=`, `/embed/` );
  if (songValue) {
    document.getElementById(`display_question5`).innerHTML =
      `<iframe width = "560" height = "315" src="${songValue}" frameborder="0" allowfullscreen></iframe>`;
  } else {
    alert(`please enter a embed youtube URL`);
  }
}

function clearInput() {
  document.getElementById(`name`).value = ``;
  document.getElementById(`favcar`).value = ``;
  document.getElementById(`age`).value = ``;
  document.getElementById(`display_question1`).innerHTML = ``;
  document.getElementById(`display_question2`).innerHTML = ``;
  document.getElementById(`display_question3`).innerHTML = ``;
  document.getElementById(`display_question4`).innerHTML = ``;

  const allArtists = [`chief_keef`, `megan`, "sexyy_red", "destroy_boys"];
  allArtists.forEach((artist) => {
    document.getElementById(artist).style.visibility = "hidden";
  });
  document.getElementById("display_question5").innerHTML = "";
}




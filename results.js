function showResults() {
  showAge();
  showName();
  showFavoriteCar();
  showFavoriteSong();
  showFavoriteArtist();
  extractYoutubeVideoId(url);
  displayImage(dataURL);
  handleFileUpload(event);

  localStorage.setItem(
    `results`,
    JSON.stringify({
      age,
      favoriteCar,
      favoriteArtist,
      name,
      favoriteSong,
      catphoto,
    }),
    value,
  );

  window.location.replace(`results.html`);
}

// Get the results data from local storage
const results = JSON.parse(localStorage.getItem("results"));

// Display the results data
document.getElementById("age").innerHTML = results.age;
document.getElementById("favoriteCar").innerHTML = results.favoriteCar;
document.getElementById("favoriteArtist").innerHTML = results.favoriteArtist;
document.getElementById("favoriteSong").innerHTML = results.favoriteSong;
document.getElementById("catphoto").innerHTML = results.catphoto;
document.getElementById("name").innerHTML = results.name;

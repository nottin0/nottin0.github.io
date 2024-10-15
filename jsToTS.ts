const age = document.getElementById(`age`);
const favCar = document.getElementById(`favcar`);
const favArtists = document.getElementById(`favartists`);
const userName = document.getElementById(`name`);
const favSong = document.getElementById(`favsong`);


function showAge() {
  const ageValue = (age as HTMLInputElement)?.value;
  if (ageValue && !isNaN(Number(ageValue))) {
    const displayElement = document.getElementById(`display_question3`);
    if (displayElement) {
      displayElement.innerHTML = `Age: ${ageValue}`;
    }
  } else {
    alert(`please enter a number`);
  }
}

function showFavoriteCar() {
  const carValue = (favCar as HTMLInputElement)?.value;
  if (carValue) {
    const displayElement = document.getElementById(`display_question2`);
    if (displayElement) {
      displayElement.innerHTML = `Favorite Car: ${carValue}`;
    }
  } else {
    alert(`please enter a car`);
  }
}

function showFavoriteArtist() {
  const favArtistsElement = favArtists as HTMLSelectElement;
  const artistValue = favArtistsElement?.value;
  const artistName = favArtistsElement?.options[favArtistsElement.selectedIndex]?.text;
  
  const displayElement = document.getElementById(`display_question4`);
  if (displayElement) {
    displayElement.innerHTML = `Favorite Artist: ${artistName}`;
  }

  // List all artist IDs
  const allArtists = [`chief_keef`, `megan`, `sexyy_redd`, `destroy_boys`];

  // Hide all artists first
  allArtists.forEach((artist) => {
    const element = document.getElementById(artist);
    if (element) {
      element.style.visibility = 'hidden';
    }
  });
  // Show only the selected artist
  if (artistValue && allArtists.indexOf(artistValue) !== -1) {
    const selectedArtistElement = document.getElementById(artistValue);
    if (selectedArtistElement) {
      selectedArtistElement.style.visibility = 'visible';
    }
  }
}

function showName() {
  const nameValue = (userName as HTMLInputElement)?.value;
  if (nameValue) {
    const displayElement = document.getElementById(`display_question1`);
    if (displayElement) {
      displayElement.innerHTML = `Name: ${nameValue}`;
    }
  } else {
    alert(`please enter your name`);
  }
}

function showFavoriteSong() {
    let songValue = (favSong as HTMLInputElement)?.value;
    if (songValue) {
        // Extract video id from different URL formats
        let videoId = extractYoutubeVideoId(songValue);

        if (videoId) {
            let embedURL = `https://www.youtube.com/embed/${videoId}`;
            const displayElement = document.getElementById(`display_question5`);
            if (displayElement) {
                displayElement.innerHTML = `<iframe width = "560" height = "315" src="${embedURL}" frameborder="0" allowfullscreen></iframe>`;
            }
        } else {
            alert(`Please enter a valid youtube URL`);
        }
    } else {
        alert(`please enter a youtube URL`);
    }
}

// Takes a youtube URL and returns the video ID
function extractYoutubeVideoId(url: string): string | null {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
}

function clearInput() {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    if (nameInput) {
        nameInput.value = '';
    }
    const favCarInput = document.getElementById('favcar') as HTMLInputElement;
    if (favCarInput) {
        favCarInput.value = '';
    }
    const ageInput = document.getElementById('age') as HTMLInputElement;
    if (ageInput) {
        ageInput.value = '';
    }
    const favSongInput = document.getElementById('favsong') as HTMLInputElement;
    if (favSongInput) {
        favSongInput.value = '';
    }
    const allArtists = [`chief_keef`, `megan`, `sexyy_redd`, `destroy_boys`];
    allArtists.forEach((artist) => {
        const element = document.getElementById(artist);
        if (element) {
            element.style.visibility = 'hidden';
        }
    });
}

// Handles the file upload
const fileInput = document.getElementById('catphoto') as HTMLInputElement;
fileInput.addEventListener(`change`, handleFileUpload);

// function to read the uploaded file
function handleFileUpload(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e: ProgressEvent<FileReader>) {
            const imageUrl = e.target?.result as string;
            const img = document.getElementById('cat_photo') as HTMLImageElement;
            if (img) {
                img.src = imageUrl;
            }
        };
        reader.readAsDataURL(file);
    } else {
        alert(`Please upload a valid image file`);
    }
}

// displays the uploaded file, which should be an image
function displayImage(dataURL: string) {
    const img = document.createElement('img');
    img.src = dataURL;
    document.body.appendChild(img);
}

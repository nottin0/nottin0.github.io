function resetTo() {
    window.location.href=`index.html`;
}


document.addEventListener('DOMContentLoaded', function() {
    // Get the results data from local storage
    const results = JSON.parse(localStorage.getItem("results"));
    console.log('Results from localStorage:', results);

    if (results) {
        // Display the results data
        document.getElementById("display_question1").innerHTML = "Name: " + results.name;
        document.getElementById("display_question2").innerHTML = "Favorite Car: " + results.favoriteCar;
        document.getElementById("display_question3").innerHTML = "Age: " + results.age;
        document.getElementById("display_question4").innerHTML = "Favorite Artist: " + results.favoriteArtist;
        
        console.log("Selected artist:", results.favoriteArtist.toLowerCase());

        // Hide all artist images first
        document.getElementById("chief_keef").style.display = "none";
        document.getElementById("megan").style.display = "none";
        document.getElementById("sexyy_redd").style.display = "none";
        document.getElementById("destroy_boys").style.display = "none";

        // Show the selected artist's image
        switch(results.favoriteArtist.toLowerCase()) {
            case "chief keef":
                document.getElementById("chief_keef").style.display = "block";
                break;
            case "megan thee stallion":
                document.getElementById("megan").style.display = "block";
                break;
            case "sexyy redd":
                document.getElementById("sexyy_redd").style.display = "block";
                break;
            case "destroy boys":
                document.getElementById("destroy_boys").style.display = "block";
                break;
        }

        // For the song, create YouTube embed if there's a video ID
        if (results.favoriteSong) {
            const videoId = extractYoutubeVideoId(results.favoriteSong);
            if (videoId) {
                document.getElementById("display_question5").innerHTML = 
                    `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
            }
        }

        // Display the cat photo
        if (results.catphoto) {
            const catPhotoElement = document.getElementById("cat_photo");
            if (catPhotoElement) {
                catPhotoElement.src = results.catphoto;
                // Add error handling for image loading
                catPhotoElement.onerror = function() {
                    console.error('Failed to load cat photo');
                    this.src = 'placeholder.jpg'; // Optional: provide a fallback image
                };
            } else {
                console.error('Cat photo element not found in DOM');
            }
        }
    }
}); 
const artistUrl = "https://genius.p.rapidapi.com/artists/16775";

const artistDetailContainer = document.querySelector(".artist-detail-container");

async function fetchArtist() {
    const response = await fetch(artistUrl, {"headers": {
        "x-rapidapi-key":"7b4130591amshd2015bdd299d172p150085jsn9aa4ea780d3a"
    }})
    const results = await response.json();
    const artistResponse = results.response;
    const artistDetails = artistResponse.artist;
    const artistAltName = artistDetails.alternate_names;

    artistDetailContainer.innerHTML = "";

    createHtml(artistDetails, artistAltName)


    console.log(artistDetails);

}

fetchArtist();

function createHtml(artistDetails, artistAltName) {
    artistDetailContainer.innerHTML += `<h1>${artistDetails.name}</h1>
                                        <div class="artist-grid-container">
                                            <div class="details-img" style="background-image: url('${artistDetails.image_url}')">
                                            </div>
                                            <div class="artist-info">
                                                <h3>Facebook Name:</h3><p>${artistDetails.facebook_name}</p>
                                                <h3>Instagram name:</h3><p> ${artistDetails.instagram_name}</p>
                                                <h3>Twitter name:</h3><p>${artistDetails.twitter_name}</p>
                                                <h3>Artist alternative name:</h3><p> ${artistAltName}</p>
                                            </div>
                                        </div>`;
    
}

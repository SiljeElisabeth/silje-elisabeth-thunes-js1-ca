const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const artistUrl = "https://genius.p.rapidapi.com/songs/" + id;
const artistDetailContainer = document.querySelector(".artist-detail-container");
const newTitle = document.querySelector("title");

console.log(id);
async function fetchArtist() {
    try{ const response = await fetch(artistUrl, {"headers": {
        "x-rapidapi-key":"7b4130591amshd2015bdd299d172p150085jsn9aa4ea780d3a"
    }})
    const results = await response.json();
    const songResponse = results.response;
    const songDetails = songResponse.song;

    
    artistDetailContainer.innerHTML = "";

    createHtml(songDetails);

    console.log(songDetails);
}catch(error) {
    console.log(error);
    artistDetailContainer.innerHTML = `Ops! something went wrong. ${error}`;
}
}

fetchArtist();

function createHtml(songDetails) {
    newTitle.innerHTML = `${songDetails.artist_names}`
    artistDetailContainer.innerHTML += `<h1>${songDetails.artist_names}</h1>
                                        <div class="artist-grid-container">
                                            <div class="details-img" style="background-image: url('${songDetails.song_art_image_url}')">
                                            </div>
                                            <div class="artist-info">
                                                <h3>Full song title: </h3>${songDetails.full_title}
                                                <h3>Release date: </h3>${songDetails.release_date}
                                                <p>${songDetails.embed_content}</p>
                                            </div>
                                        </div>`;
    //there is probably an easier way to do this but I couldnt figure out how 
   if(songDetails.release_date === null) {
    artistDetailContainer.innerHTML = `<h1>${songDetails.artist_names}</h1>
                                        <div class="artist-grid-container">
                                            <div class="details-img" style="background-image: url('${songDetails.song_art_image_url}')">
                                            </div>
                                            <div class="artist-info">
                                                <h3>Full song title: </h3>${songDetails.full_title}
                                                <h3>Release date: </h3><p>Unknown release date</p>
                                                <p>${songDetails.embed_content}</p>
                                            </div>
                                        </div>`;
   }

    
}

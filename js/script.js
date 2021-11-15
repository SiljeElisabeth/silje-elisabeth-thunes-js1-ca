const musicUrl = "https://genius.p.rapidapi.com/artists/16775/songs";
const artistContainer = document.querySelector(".artist-container");

async function fetchMusic() {
    try { const response = await fetch(musicUrl, {"headers": {
        "x-rapidapi-key":"7b4130591amshd2015bdd299d172p150085jsn9aa4ea780d3a"
    }})
    const results = await response.json();
    const artistList = results.response;
    const artistDetail = artistList.songs;

    artistContainer.innerHTML = "";

    makeHtml(html);

    }catch(error) {
        console.log(error);
        artistContainer.innerHTML += `<h1>An error occured ${error}</h1>`
    }
}

fetchMusic();

function makeHtml(html) {
    for(let i = 0; i < artistDetail.length; i++) {
        console.log(artistDetail[i]);
        artistContainer.innerHTML += `<div class="artist-card">
                                        <div class="thumbnail-img" style:"background-image: url('${artistDetail[i].song_art_image_thumbnail_url}')">
                                        </div>
                                        <h1>Artist: ${artistDetail[i].artist_names}</h1>
                                        <p>Song title: ${artistDetail[i].title}</p>
                                        <p>Lyric state: ${artistDetail[i].lyrics_state}</p>
                                        <a href="details.html">See more</a>
                                     </div>`
    } 
}
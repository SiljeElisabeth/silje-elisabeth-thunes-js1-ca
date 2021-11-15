const musicUrl = "https://genius.p.rapidapi.com/artists/16775/songs";
const artistContainer = document.querySelector(".artist-container");

async function fetchMusic() {
    const response = await fetch(musicUrl, {"headers": {
        "x-rapidapi-key":"7b4130591amshd2015bdd299d172p150085jsn9aa4ea780d3a"
    }})
    const results = await response.json();
    const artistList = results.response;
    const artistDetail = artistList.songs;
    
    for(let i = 0; i < artistDetail.length; i++) {
        console.log(artistDetail[i]);
        artistContainer.innerHTML += `<div class="artist-card">
                                        <h1>Artist: ${artistDetail[i].artist_names}</h1>
                                        <h2>Song title: ${artistDetail[i].title}</h2>
                                        <p>Lyric state: ${artistDetail[i].lyrics_state}</p>
                                        </div>`
    }
    
}

fetchMusic();
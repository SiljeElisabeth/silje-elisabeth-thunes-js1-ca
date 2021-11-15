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
                                        <div class="thumbnail-img" style:"background-image: url('${artistDetail[i].song_art_image_thumbnail_url}')">
                                        </div>
                                        <p>Artist:</p><h1>${artistDetail[i].artist_names}</h1>
                                        <p>Song title:</p><h2>${artistDetail[i].title}</h2>
                                        <p>Lyric state:</p><h3>${artistDetail[i].lyrics_state}</h3>
                                     </div>`
    }
    
}

fetchMusic();
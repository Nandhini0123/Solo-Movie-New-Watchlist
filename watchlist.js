let storedData = JSON.parse(localStorage.getItem("myWatchlist"))
// let storedData = JSON.parse(localStorage.getItem("movieList"))
console.log(storedData)

document.addEventListener("click", function(e){
   if(e.target.dataset.id){
      removeMovie(e.target.dataset.id)
   }
})

function displayWatchlist(){
    for(let i = 0; i < storedData.length; i++){
    fetch(`http://www.omdbapi.com/?i=${storedData[i]}&apikey=ed3e63ef`)
      .then ( response => response.json())
      .then ( data => {
          console.log("watchlist", data)
    document.getElementById("watchlist-movies").innerHTML += `
           <div class="movie-details">
              <img src=${data.Poster} class="poster"/>
              <div class="content">
                 <div class="first-line">
                    <p class="title">${data.Title}</p>
                    <p><i class="fa-regular fa-star"></i></p>
                    <p class="rating">${data.imdbRating}</p>
                 </div>
                 <div class="second-line">
                    <p class="runtime">${data.Runtime}</p>
                    <p class="genre">${data.Genre}</p>
                 </div>
                 <div class="watch">
                    <button data-Id="${data.imdbID}" class="watchlist"><i class="fa-solid fa-circle-minus"></i>  remove</button>
                 </div>
                 <div class="third-line">
                    <p class="plot">${data.Plot}</p>
                 </div>
              </div>
            </div>`
    })
    }
}



function removeMovie(imdbID){
  console.log(storedData)
  let moviesInLocal = []; 
  let indexToRemove = storedData.indexOf(imdbID);
  storedData.splice(indexToRemove, 1)
  moviesInLocal = storedData;
 
  console.log("OK", moviesInLocal)
  localStorage.clear();
  localStorage.setItem("myWatchlist", JSON.stringify(moviesInLocal))
  storedData = JSON.parse(localStorage.getItem("myWatchlist"))
  console.log("final",storedData)
  location.reload()
}
displayWatchlist()
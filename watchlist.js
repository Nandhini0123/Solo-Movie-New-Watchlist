let storedData = JSON.parse(localStorage.getItem("myWatchlist"))
<<<<<<< Updated upstream


document.addEventListener("click", function(e){
   if(e.target.dataset.id){
      removeMovie(e.target.dataset.id)
   }
})
=======
console.log(storedData)
>>>>>>> Stashed changes

function displayWatchlist(){
    for(let i = 0; i < storedData.length; i++){
    fetch(`http://www.omdbapi.com/?i=${storedData[i]}&apikey=ed3e63ef`)
      .then ( response => response.json())
      .then ( data => {
          //console.log("watchlist", data)
          document.getElementById("watchlist-movies").innerHTML += `
           <div class="movie-details">
               <img src=${data.Poster} class="poster"/>
               <div class="content">
<<<<<<< Updated upstream
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
=======
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
                     <button data-Id="${data.imdbID}" class="watchlist"><i class="fa-solid fa-circle-plus"></i>  watchlist</button>
                  </div>
                  <div class="third-line">
                     <p class="plot">${data.Plot}</p>
                  </div>
               </div>
             </div>`
>>>>>>> Stashed changes
    })
    }
}



function removeMovie(imdbID){
  console.log(storedData)
  let moviesInLocal = []; 
  let indexToRemove = storedData.indexOf(imdbID);
  storedData.splice(indexToRemove, 1)
  moviesInLocal = storedData;
  localStorage.clear();
  localStorage.setItem("myWatchlist", JSON.stringify(moviesInLocal))
  storedData = JSON.parse(localStorage.getItem("myWatchlist"))
  //console.log("final",storedData)
  location.reload()
}
displayWatchlist()
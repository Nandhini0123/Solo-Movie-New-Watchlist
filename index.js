const searchBtn = document.getElementById("search-btn");
const searchTab = document.getElementById("search-tab");
const formId = document.getElementById("form-id");
let movieId = [];
let myWatchlist = [];


searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    console.log(searchTab.value, "movie name")
    getMovieList()
})
document.addEventListener("click",function(e){
   if(e.target.dataset.id){
    getWatchlist(e.target.dataset.id);
   }
})



function getMovieList(){
    fetch(`https://www.omdbapi.com/?t=${searchTab.value}&apikey=ed3e63ef&s=${searchTab.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.Search)
      if(data.Search){ 
         document.getElementById("movie-list").innerHTML = " ";
         for(let x of data.Search){
              movieId.push(x.Title);
              //console.log("movieId",movieId)
             fetch(`https://www.omdbapi.com/?apikey=ed3e63ef&s&i=${x.imdbID}`)
             .then(response  => response.json())
             .then(data =>{
                 //console.log("movieiddata", data)
             document.getElementById("movie-list").innerHTML += `
             <div class="movie-details">
               <img src=${data.Poster} class="poster"/>
               <div class="content">
                  <div class="first-line">
                     <p class="title">${data.Title}</p>
                     <p><i class="fa-regular fa-star"></i></p>
                     <p class="rating">${data.imdbRatings}</p>
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
             </div>`} )  
 
         }
      }

      else {
         document.getElementById("movie-list").innerHTML = `<p class="alert-msg">Sorry! We couldn't find any movies </p>`
      }
   
    })
}

function getWatchlist(imdbID){
   if((JSON.parse(localStorage.getItem("myWatchlist").includes(imdbID)))){
        document.getElementById("movie-list").innerHTML = `<p class="alert-msg">Already exists in Watchlist!</p>` 
       }
       else {
         if(JSON.parse(localStorage.getItem("myWatchlist"))){
            myWatchlist = []
            myWatchlist.push(...JSON.parse(localStorage.getItem("myWatchlist"))) 
         }
         myWatchlist.push(imdbID);
         console.log("checking",myWatchlist);
         localStorage.setItem("myWatchlist",JSON.stringify(myWatchlist))
       }
}

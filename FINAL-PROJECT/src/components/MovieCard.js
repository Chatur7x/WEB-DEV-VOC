function MovieCard(props) {
  var movie = props.movie;
  return React.createElement("div", { className: "movie-card", onClick: function () { window.location.hash = "#/movie/" + movie.id; } },
    React.createElement("div", { className: "movie-card-poster" },
      React.createElement("img", { src: movie.poster, alt: movie.title })
    ),
    React.createElement("div", { className: "movie-card-info" },
      React.createElement("h3", null, movie.title),
      React.createElement("span", { className: "movie-genre" }, movie.genre),
      React.createElement("span", { className: "movie-rating" }, "\u2B50 " + movie.rating + "/10")
    )
  );
}

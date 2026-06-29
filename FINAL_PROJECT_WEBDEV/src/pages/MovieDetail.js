function MovieDetail(props) {
  var id = props.id;
  var ctx = useBooking();
  var movie = null;
  for (var i = 0; i < MOVIES.length; i++) {
    if (MOVIES[i].id === Number(id)) { movie = MOVIES[i]; break; }
  }

  if (!movie) {
    return React.createElement("div", { className: "not-found" },
      React.createElement("h2", null, "Movie not found"),
      React.createElement("button", { className: "btn-primary", onClick: function () { window.location.hash = "#/"; } }, "Back to Home")
    );
  }

  function handleBook() {
    ctx.setSelectedMovie(movie);
    window.location.hash = "#/booking";
  }

  return React.createElement("div", { className: "movie-detail" },
    React.createElement("div", { className: "movie-detail-poster" },
      React.createElement("img", { src: movie.poster, alt: movie.title })
    ),
    React.createElement("div", { className: "movie-detail-info" },
      React.createElement("h1", null, movie.title),
      React.createElement("span", { className: "movie-genre" }, movie.genre),
      React.createElement("span", { className: "movie-rating" }, "\u2B50 ", movie.rating, "/10"),
      React.createElement("p", { className: "movie-description" }, movie.description),
      React.createElement(ShowtimeSelector, { showtimes: movie.showtimes }),
      React.createElement("button", {
        className: "btn-primary",
        disabled: !ctx.selectedShowtime,
        onClick: handleBook
      }, "Book Now")
    )
  );
}

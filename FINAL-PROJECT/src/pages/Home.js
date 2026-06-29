function Home() {
  var searchState = React.useState("");
  var search = searchState[0], setSearch = searchState[1];
  var genreState = React.useState("All");
  var genre = genreState[0], setGenre = genreState[1];

  var genres = ["All"];
  MOVIES.forEach(function (m) {
    if (genres.indexOf(m.genre) === -1) genres.push(m.genre);
  });

  var filtered = MOVIES.filter(function (m) {
    var ms = m.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    var mg = genre === "All" || m.genre === genre;
    return ms && mg;
  });

  return React.createElement("div", { className: "home-page" },
    React.createElement("div", { className: "hero" },
      React.createElement("h1", null, "Book Your Movie Tickets"),
      React.createElement("p", null, "Browse the latest movies and book your seats in minutes")
    ),
    React.createElement("div", { className: "filters" },
      React.createElement("input", {
        className: "search-input",
        placeholder: "Search movies...",
        value: search,
        onChange: function (e) { setSearch(e.target.value); }
      }),
      React.createElement("select", {
        className: "genre-select",
        value: genre,
        onChange: function (e) { setGenre(e.target.value); }
      }, genres.map(function (g) {
        return React.createElement("option", { key: g, value: g }, g);
      }))
    ),
    filtered.length === 0
      ? React.createElement("p", { className: "no-results" }, "No movies found. Try a different search.")
      : React.createElement("div", { className: "movies-grid" },
          filtered.map(function (m) { return React.createElement(MovieCard, { key: m.id, movie: m }); })
        )
  );
}

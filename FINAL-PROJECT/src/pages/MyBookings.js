function MyBookings() {
  var ctx = useBooking();

  if (ctx.bookings.length === 0) {
    return React.createElement("div", { className: "my-bookings-page" },
      React.createElement("h1", null, "My Bookings"),
      React.createElement("div", { className: "empty-state" },
        React.createElement("p", null, "No bookings yet."),
        React.createElement("button", { className: "btn-primary", onClick: function () { window.location.hash = "#/"; } }, "Browse Movies")
      )
    );
  }

  var reversed = ctx.bookings.slice().reverse();

  return React.createElement("div", { className: "my-bookings-page" },
    React.createElement("h1", null, "My Bookings"),
    React.createElement("div", { className: "bookings-list" },
      reversed.map(function (b) {
        return React.createElement("div", { key: b.id, className: "booking-card" },
          React.createElement("div", { className: "booking-card-header" },
            React.createElement("h3", null, b.movie.title),
            React.createElement("span", { className: "booking-date" }, b.date)
          ),
          React.createElement("p", null, React.createElement("strong", null, "Showtime:"), " ", b.showtime),
          React.createElement("p", null, React.createElement("strong", null, "Seats:"), " ", b.seats.join(", ")),
          React.createElement("p", { className: "booking-total" }, React.createElement("strong", null, "Total:"), " \u20B9", b.total.toFixed(2))
        );
      })
    )
  );
}

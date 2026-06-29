function BookingPage() {
  var ctx = useBooking();

  if (!ctx.selectedMovie || !ctx.selectedShowtime) {
    return React.createElement("div", { className: "not-found" },
      React.createElement("h2", null, "No movie or showtime selected"),
      React.createElement("button", { className: "btn-primary", onClick: function () { window.location.hash = "#/"; } }, "Browse Movies")
    );
  }

  return React.createElement("div", { className: "booking-page" },
    React.createElement("h1", null, "Select Your Seats"),
    React.createElement("div", { className: "booking-info" },
      React.createElement("p", null, React.createElement("strong", null, "Movie:"), " ", ctx.selectedMovie.title),
      React.createElement("p", null, React.createElement("strong", null, "Showtime:"), " ", ctx.selectedShowtime)
    ),
    React.createElement("div", { className: "booking-layout" },
      React.createElement(SeatMap, null),
      React.createElement("div", { className: "booking-sidebar" },
        React.createElement(BookingSummary, null),
        React.createElement("button", {
          className: "btn-primary",
          disabled: ctx.selectedSeats.length === 0,
          onClick: function () { window.location.hash = "#/confirm"; }
        }, "Proceed to Confirm")
      )
    )
  );
}

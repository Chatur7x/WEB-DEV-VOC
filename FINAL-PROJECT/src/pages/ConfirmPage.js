function ConfirmPage() {
  var ctx = useBooking();

  if (!ctx.selectedMovie || ctx.selectedSeats.length === 0) {
    return React.createElement("div", { className: "not-found" },
      React.createElement("h2", null, "Nothing to confirm"),
      React.createElement("button", { className: "btn-primary", onClick: function () { window.location.hash = "#/"; } }, "Browse Movies")
    );
  }

  var count = ctx.selectedSeats.length;
  var subtotal = count * PRICE_PER_SEAT;
  var tax = count * TAX_PER_SEAT;
  var total = subtotal + tax;

  function handleConfirm() {
    ctx.confirmBooking();
    window.location.hash = "#/my-bookings";
  }

  return React.createElement("div", { className: "confirm-page" },
    React.createElement("h1", null, "Confirm Booking"),
    React.createElement("div", { className: "confirm-card" },
      React.createElement("h2", null, ctx.selectedMovie.title),
      React.createElement("p", null, React.createElement("strong", null, "Showtime:"), " ", ctx.selectedShowtime),
      React.createElement("p", null, React.createElement("strong", null, "Seats:"), " ", ctx.selectedSeats.join(", ")),
      React.createElement("p", null, React.createElement("strong", null, "Count:"), " ", count),
      React.createElement("p", null, React.createElement("strong", null, "Price/seat:"), " \u20B9", PRICE_PER_SEAT),
      React.createElement("p", null, React.createElement("strong", null, "Tax/seat:"), " \u20B9", TAX_PER_SEAT.toFixed(2)),
      React.createElement("hr"),
      React.createElement("p", null, React.createElement("strong", null, "Subtotal:"), " \u20B9", subtotal),
      React.createElement("p", null, React.createElement("strong", null, "Tax:"), " \u20B9", tax.toFixed(2)),
      React.createElement("p", { className: "total-price" }, React.createElement("strong", null, "Total:"), " \u20B9", total.toFixed(2)),
      React.createElement("div", { className: "confirm-actions" },
        React.createElement("button", { className: "btn-secondary", onClick: function () { window.location.hash = "#/booking"; } }, "Back"),
        React.createElement("button", { className: "btn-primary", onClick: handleConfirm }, "Confirm Booking")
      )
    )
  );
}

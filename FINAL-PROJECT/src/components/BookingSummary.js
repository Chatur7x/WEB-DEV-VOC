function BookingSummary() {
  var ctx = useBooking();
  if (ctx.selectedSeats.length === 0) {
    return React.createElement("div", { className: "booking-summary" },
      React.createElement("h3", null, "Booking Summary"),
      React.createElement("p", { className: "empty-summary" }, "No seats selected yet")
    );
  }
  var count = ctx.selectedSeats.length;
  var subtotal = count * PRICE_PER_SEAT;
  var tax = count * TAX_PER_SEAT;
  var total = subtotal + tax;
  return React.createElement("div", { className: "booking-summary" },
    React.createElement("h3", null, "Booking Summary"),
    React.createElement("p", null, React.createElement("strong", null, "Seats:"), " ", ctx.selectedSeats.join(", ")),
    React.createElement("p", null, React.createElement("strong", null, "Count:"), " ", count),
    React.createElement("p", null, React.createElement("strong", null, "Price/seat:"), " \u20B9", PRICE_PER_SEAT),
    React.createElement("p", null, React.createElement("strong", null, "Tax/seat:"), " \u20B9", TAX_PER_SEAT.toFixed(2)),
    React.createElement("p", null, React.createElement("strong", null, "Subtotal:"), " \u20B9", subtotal),
    React.createElement("p", null, React.createElement("strong", null, "Tax:"), " \u20B9", tax.toFixed(2)),
    React.createElement("p", { className: "total-price" }, React.createElement("strong", null, "Total:"), " \u20B9", total.toFixed(2))
  );
}

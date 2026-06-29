function SeatMap() {
  var ctx = useBooking();
  var seats = ctx.seats;
  var selectedSeats = ctx.selectedSeats;
  var setSelectedSeats = ctx.setSelectedSeats;
  var rows = ["A", "B", "C", "D", "E", "F", "G"];

  function handleClick(id) {
    if (selectedSeats.indexOf(id) !== -1) {
      setSelectedSeats(selectedSeats.filter(function (s) { return s !== id; }));
    } else {
      setSelectedSeats(selectedSeats.concat([id]));
    }
  }

  var children = [
    React.createElement("div", { className: "screen", key: "screen" }, "Screen")
  ];

  rows.forEach(function (row) {
    var rowSeats = seats.filter(function (s) { return s.row === row; });
    children.push(
      React.createElement("div", { key: row, className: "seat-row" },
        React.createElement("span", { className: "row-label" }, row),
        React.createElement("div", { className: "seats" },
          rowSeats.map(function (seat) {
            return React.createElement(Seat, {
              key: seat.id,
              seat: seat,
              isSelected: selectedSeats.indexOf(seat.id) !== -1,
              onSelect: handleClick
            });
          })
        )
      )
    );
  });

  children.push(
    React.createElement("div", { className: "seat-legend", key: "legend" },
      React.createElement("span", null,
        React.createElement("span", { className: "legend-box available" }), " Available"
      ),
      React.createElement("span", null,
        React.createElement("span", { className: "legend-box selected" }), " Selected"
      ),
      React.createElement("span", null,
        React.createElement("span", { className: "legend-box booked" }), " Booked"
      )
    )
  );

  return React.createElement("div", { className: "seat-map-container" }, children);
}

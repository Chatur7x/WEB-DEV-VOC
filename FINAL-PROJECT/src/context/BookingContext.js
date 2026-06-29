var BookingCtx = React.createContext();

function BookingProvider(props) {
  var state = React.useState(null);
  var selectedMovie = state[0], setSelectedMovie = state[1];
  var timeState = React.useState("");
  var selectedShowtime = timeState[0], setSelectedShowtime = timeState[1];
  var seatsState = React.useState([]);
  var selectedSeats = seatsState[0], setSelectedSeats = seatsState[1];
  var bookingsState = React.useState([]);
  var bookings = bookingsState[0], setBookings = bookingsState[1];
  var genState = React.useState(function () { return generateSeats(); });
  var seats = genState[0], setSeats = genState[1];

  function confirmBooking() {
    var subtotal = selectedSeats.length * PRICE_PER_SEAT;
    var tax = selectedSeats.length * TAX_PER_SEAT;
    var booking = {
      id: Date.now(),
      movie: selectedMovie,
      showtime: selectedShowtime,
      seats: selectedSeats.slice(),
      subtotal: subtotal,
      tax: tax,
      total: subtotal + tax,
      date: new Date().toLocaleDateString(),
    };
    setBookings(function (prev) { return prev.concat([booking]); });
    setSeats(function (prev) {
      return prev.map(function (s) {
        return selectedSeats.indexOf(s.id) !== -1 ? { id: s.id, row: s.row, number: s.number, status: "booked" } : s;
      });
    });
    setSelectedSeats([]);
    setSelectedShowtime("");
  }

  var value = {
    selectedMovie: selectedMovie, setSelectedMovie: setSelectedMovie,
    selectedShowtime: selectedShowtime, setSelectedShowtime: setSelectedShowtime,
    selectedSeats: selectedSeats, setSelectedSeats: setSelectedSeats,
    bookings: bookings, setBookings: setBookings,
    seats: seats, setSeats: setSeats,
    confirmBooking: confirmBooking,
    PRICE_PER_SEAT: PRICE_PER_SEAT,
    TAX_PER_SEAT: TAX_PER_SEAT,
  };

  return React.createElement(BookingCtx.Provider, { value: value }, props.children);
}

function useBooking() {
  return React.useContext(BookingCtx);
}

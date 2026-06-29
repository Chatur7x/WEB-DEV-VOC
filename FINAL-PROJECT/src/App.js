function App() {
  var routeState = React.useState(window.location.hash || "#/");
  var route = routeState[0], setRoute = routeState[1];

  React.useEffect(function () {
    function handler() { setRoute(window.location.hash || "#/"); }
    window.addEventListener("hashchange", handler);
    return function () { window.removeEventListener("hashchange", handler); };
  }, []);

  var match = route.match(/^#\/movie\/(\d+)$/);
  var page;

  if (route === "#/" || route === "") {
    page = React.createElement(Home, null);
  } else if (match) {
    page = React.createElement(MovieDetail, { id: match[1] });
  } else if (route === "#/booking") {
    page = React.createElement(BookingPage, null);
  } else if (route === "#/confirm") {
    page = React.createElement(ConfirmPage, null);
  } else if (route === "#/my-bookings") {
    page = React.createElement(MyBookings, null);
  } else {
    page = React.createElement(Home, null);
  }

  return React.createElement(React.Fragment, null,
    React.createElement(Navbar, null),
    page
  );
}

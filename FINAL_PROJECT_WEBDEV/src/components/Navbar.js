function Navbar() {
  return React.createElement("nav", { className: "navbar" },
    React.createElement("span", { className: "navbar-brand", onClick: function () { window.location.hash = "#/"; } }, "\uD83C\uDFAC CineBook"),
    React.createElement("div", { className: "navbar-links" },
      React.createElement("a", { onClick: function () { window.location.hash = "#/"; } }, "Movies"),
      React.createElement("a", { onClick: function () { window.location.hash = "#/my-bookings"; } }, "My Bookings")
    )
  );
}

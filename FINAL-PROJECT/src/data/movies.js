var MOVIES = [
  { id: 1, title: "Spirit", genre: "Action", rating: 8.2, poster: "posters/SPIRIT1.jpg", description: "A former IPS officer lands in jail where a ruthless jailer tests his limits. A Sandeep Reddy Vanga film starring Prabhas.", showtimes: ["10:00 AM","1:00 PM","4:00 PM","7:00 PM","10:00 PM"] },
  { id: 2, title: "Varanasi", genre: "Sci-Fi", rating: 8.6, poster: "posters/VARNASHI2.jpeg", description: "A Shiva devotee is sent on a mysterious mission to find an ancient cosmic artifact across continents. SS Rajamouli film starring Mahesh Babu.", showtimes: ["11:00 AM","2:00 PM","5:00 PM","8:00 PM"] },
  { id: 3, title: "Peddi", genre: "Sports", rating: 8.4, poster: "https://upload.wikimedia.org/wikipedia/en/2/26/Peddi_Poster.jpg", description: "In 1980s rural Andhra Pradesh, a spirited villager unites his community through sports to defend their pride against a powerful rival.", showtimes: ["9:00 AM","12:00 PM","3:00 PM","6:00 PM","9:00 PM"] },
  { id: 4, title: "Kantara", genre: "Thriller", rating: 8.8, poster: "https://upload.wikimedia.org/wikipedia/en/8/84/Kantara_poster.jpeg", description: "A clash between a tribal man and a landlord escalates into a battle of faith, nature, and ancient traditions in coastal Karnataka.", showtimes: ["10:30 AM","1:30 PM","4:30 PM","7:30 PM"] },
  { id: 5, title: "RRR", genre: "Action", rating: 8.9, poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg", description: "A fearless revolutionary and a reckless Indian policeman form an unlikely friendship in pre-independent India.", showtimes: ["10:00 AM","12:30 PM","3:00 PM","5:30 PM","8:00 PM"] },
  { id: 6, title: "Pushpa 2", genre: "Action", rating: 8.1, poster: "https://upload.wikimedia.org/wikipedia/en/1/11/Pushpa_2-_The_Rule.jpg", description: "Pushpa faces new challenges as he rises in the red sandalwood smuggling syndicate while battling enemies and personal demons.", showtimes: ["11:30 AM","2:30 PM","5:30 PM","8:30 PM"] },
  { id: 7, title: "Animal", genre: "Crime", rating: 7.8, poster: "https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg", description: "A wealthy businessman's son returns to take revenge on those who threatened his family, exploring the dark side of toxic masculinity.", showtimes: ["10:00 AM","1:00 PM","4:00 PM","7:00 PM"] },
  { id: 8, title: "Jailer", genre: "Comedy", rating: 8.0, poster: "https://upload.wikimedia.org/wikipedia/en/c/cb/Jailer_2023_Tamil_film_poster.jpg", description: "A retired jailer sets out to rescue his cop son from a ruthless gangster, uncovering a web of crime and corruption.", showtimes: ["9:30 AM","12:30 PM","3:30 PM","6:30 PM","9:30 PM"] },
  { id: 9, title: "Salaar", genre: "Action", rating: 7.9, poster: "https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg", description: "A gang leader makes a promise to a dying friend and faces off against tyrants to protect the powerless in a violent land.", showtimes: ["10:00 AM","1:00 PM","4:00 PM","7:00 PM","10:00 PM"] },
  { id: 10, title: "Leo", genre: "Thriller", rating: 8.3, poster: "https://upload.wikimedia.org/wikipedia/en/7/75/Leo_%282023_Indian_film%29.jpg", description: "A mild-mannered cafe owner's past catches up when his family is threatened, forcing him to confront his violent former life.", showtimes: ["11:00 AM","2:00 PM","5:00 PM","8:00 PM"] },
];

var PRICE_PER_SEAT = 400;
var TAX_PER_SEAT = 46.81;

function generateSeats() {
  var rows = ["A", "B", "C", "D", "E", "F", "G"];
  var seats = [];
  var booked = new Set(Array.from({ length: 15 }, function () { return Math.floor(Math.random() * 84); }));
  rows.forEach(function (row, ri) {
    for (var n = 1; n <= 12; n++) {
      seats.push({ id: row + n, row: row, number: n, status: booked.has(ri * 12 + n - 1) ? "booked" : "available" });
    }
  });
  return seats;
}

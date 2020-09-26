const http = require("http");

http
  .createServer((req, res) => {
    var url = req.url;

    if (url === "/Delhi") {
      res.write(
        JSON.stringify([
          {
            id: "6360",
            name: "Gulab",
            city: "Delhi",
            locality: "Pitampura, New Delhi",
            thumb:
              "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
            aggregate_rating: 4.5,
            rating_text: "Very Good",
            min_price: 230,
          },
          {
            id: "307406",
            name: "Pandit Ji Parantha Hut",
            locality: "Ashok Vihar Phase 2",
            city: "Delhi",
            thumb:
              "https://b.zmtcdn.com/data/pictures/5/19295175/231f0337cd9140f230d8208ddde923c9.jpg",
            aggregate_rating: 2.5,
            rating_text: "Very Good",
            min_price: 530,
          },
        ])
      );
      res.end();
    }
  })
  .listen(3000, function () {
    console.log("server start at port 3000"); //the server object listens on port 3000
  });

const http = require("http");
const port = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const url = req.url;
  if (url === "/about") {
    res.write("Welcome to about us page");
    res.end();
  } else if (url === "/contact") {
    res.write("Welcome to contact us page");
    res.end();
  } else {
    res.write("Hello World!");
    res.end();
  }
});

server.listen(port, () => {
  console.log("Server is listening on port ${port}");
});

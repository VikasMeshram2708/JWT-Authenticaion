const app = require("./app");

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
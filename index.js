const app = require("./app");

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
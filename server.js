const express = require('express');

const app = express();

app.use(express.static('./dist'));

// Serve the files on port 3000.
app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n');
});

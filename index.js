const express = require('express')
const app = express()

const PORT = process.env.PORT || 4200;

app.get('/', (req, res) => {
      res.json({
        status: 200,
        message: 'Get data - OK',
        result: result
      });
      console.error(error);
      res.send('fine')
    }
  )

  console.log('check!!');

app.listen(PORT, () => console.log(`Server is fine! ${PORT}`));
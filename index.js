const express = require('express')
const app = express()

app.use(express.json({extended: false}));
const PORT = process.env.PORT || 4200;

app.get('/', (req, res) => {
      res.json({
        status: 200,
        message: 'Get data - OK',
        result: result.rows[0]
      });
      console.error(error);
    }
  )

  console.log('check');

app.listen(PORT, () => console.log(`Server is fine! ${PORT}`));
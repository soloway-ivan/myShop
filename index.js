const express = require('express')
const app = express()

app.use(express.json({extended: false}));
const PORT = process.env.PORT || 4200;

app.get('/', (req, res) => {
    conn.query(query, (err, result, field) =>{
    try {
      res.json({
        status: 200,
        message: 'Get data - OK',
        result: result.rows[0]
      });
      console.log('wow');
    } catch (error) {
      console.error(error);
      return res.status(500).send('Server')
    }
  })
  })

app.listen(PORT, () => console.log(`Server is fine! ${PORT}`));
const express = require('express');
const register = require('@react-ssr/express/register');

const app = express();
const port = process.env.PORT || 3000;

(async () => {
  // register `.jsx` or `.tsx` as a view template engine
  await register(app);

  app.get('/', (req, res) => {
    res.render('index', {
      message: 'Today is a good day to have fun',
    });
  });

  app.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
})();

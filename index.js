const express = require('express');
const app = express();
const digitalocean = require('./digitalocean');

app.set('port', (process.env.PORT || 5000));

app.get('/', function (request, response) {
  response.render('pages/index');
});

app.get('/up/:dropletName', function (req, res, next) {
  switch (req.params.dropletName) {
    case 'fathm-gitlab':
      digitalocean
        .bootDroplet(process.env.DO_GITLAB_DROPLET_ID)
        .then(res.status(200).send(`Started ${req.params.dropletName}`));
      break;
    default:
      res.status(500).send('Unsure what you want?');
      break;
  }
});

app.get('/down/:dropletName', function (req, res, next) {
  switch (req.params.dropletName) {
    case 'fathm-gitlab':
      digitalocean
        .shutdownDroplet(process.env.DO_GITLAB_DROPLET_ID)
        .then(res.status(200).send(`Stopped ${req.params.dropletName}`));
      break;
    default:
      res.status(500).send('Unsure what you want?');
      break;
  }
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});

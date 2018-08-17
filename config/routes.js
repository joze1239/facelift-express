var post = require('../app/controllers/post');
var lang = require('../app/controllers/lang');

module.exports = function(app) {
  app.get('/post/:id', post.get);
  app.get('/', post.list);
  app.get('/LT/:lang', lang.lang);

};

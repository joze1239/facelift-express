const faceliftsdk = require('../../utils/faceliftsdk');

const api = require('../../api');

exports.list = async (req, res) => {
  const posts = await api.list(0);
  const locales = await api.getLocales();

  console.log(posts);
  res.render('pages/posts', {
    posts: posts,
    langList: locales.locales,
    defaultLocale: req.session.lang ? req.session.lang : locales.defaultLocale,
    session: req.session
  });
};

exports.get = async (req, res) => {
  const identifier = req.params.id;
  const post = await api.get(identifier);
  const locales = await api.getLocales();




  console.log(post);
  res.render('pages/post', {
    post: post,
    langList: locales.locales,
    defaultLocale: req.session.lang ? req.session.lang : locales.defaultLocale,
    error: req.flash('error'),
    success: req.flash('success'),
    session: req.session
  });
};

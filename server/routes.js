/**
 * Main application routes
 */

'use strict';
import errors from './components/errors';
import path from 'path';

export default function(app) {
  // Insert routes below
  app.use('/api/commentss', require('./api/comments'));
  app.use('/api/Recherches', require('./api/Recherche'));
  app.use('/api/announces', require('./api/announce'));
  app.use('/api/offres', require('./api/offre'));
  app.use('/api/announces', require('./api/announce'));
  app.use('/api/Recherches', require('./api/Recherche'));
  app.use('/api/Favoriss', require('./api/Favoris'));
  app.use('/api/wishlists', require('./api/wishlist'));
  app.use('/api/scrappes', require('./api/scrappe'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));
  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}

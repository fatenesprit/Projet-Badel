'use strict';

import mongoose from 'mongoose';

var RechercheSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Recherche', RechercheSchema);

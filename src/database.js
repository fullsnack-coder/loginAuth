"use strict";

const mongoose = require("mongoose");
const { mongoDb } = require("./keys");

mongoose.connect(mongoDb.uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) console.log(`Error: ${err}`);
  else console.log(`Connected to db: ${db.name}`);
});

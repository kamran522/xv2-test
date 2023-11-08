const mongoose = require("mongoose");
const config = require('./config')

const db2 = mongoose.createConnection(config.DB_URL, options);

const PluginSchema = new mongoose.Schema({
  plugin: { type: String },
  url: { type: String },
});

const pluginData = db2.model("PluginData", PluginSchema);

module.exports = {
  pluginData
};
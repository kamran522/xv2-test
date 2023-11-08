const {
  pluginData,
} = require('./mongo.js');
const mongoose = require("mongoose");

async function pushPlugin(newPlugin, url) {
  const plugin = new pluginData({
    plugin: newPlugin,
    url: url,
  });
  await plugin.save();
}


// Check if plugin is installed
async function isPluginPresent(pluginName) {
  const plugin = await pluginData.findOne({ plugin: pluginName });
  return !!plugin;
}

// DELETE A PLUGIN FROM THE DATABASE
async function delPlugin(pluginName) {
  const plugin = await pluginData.findOne({ plugin: pluginName });
  if (!plugin) {
    throw new Error("The plugin is not present in the database.");
  }
  await pluginData.deleteOne({ plugin: pluginName });
}

// Get all installed plugin URLs as an array
async function getPluginURLs() {
  const plugins = await pluginData.find({}, 'url');
  const urls = plugins.map(plugin => plugin.url);
  return urls;
}

// Getting all plugins as an array
async function getAllPlugins() {
  const plugins = await pluginData.find({}, { plugin: 1, url: 1 });
  return plugins;
}

module.exports = {
  pushPlugin,
  isPluginPresent,
  delPlugin,
  getPluginURLs,
  getAllPlugins,
};
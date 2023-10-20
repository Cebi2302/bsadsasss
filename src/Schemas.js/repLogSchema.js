const mongoose = require('mongoose');

const repLogSchema = new mongoose.Schema({
    serverId: String, // ID of the Discord server
    logChannelId: String, // ID of the selected log channel
});

module.exports = mongoose.model('RepLog', repLogSchema);


// blacklistSchema.js
const mongoose = require('mongoose');

const blacklistSchema = new mongoose.Schema({
    guildId: String, // Guild ID
    userId: String, // User ID
    reason: String, // Reason for blacklisting
});

module.exports = mongoose.model('Blacklist', blacklistSchema);


const mongoose = require('mongoose');

const repSchemaCostume = new mongoose.Schema({
        userId: String,
    UserNameColor: { type: String, default: '#FFFFFF' },
    reputationstats: {type: String, default:'#FF0000' },
    superRepTextColor: { type: String, default: '#FF0000' },
    superRepPointsColor: { type: String, default: '#FFFFFF' },
    backgroundImage: { type: String, default: 'https://i.ibb.co/Lv6wDnG/sports-car-background.jpg' },
    reputationTextColor: { type: String, default: '#FF0000' },
    reputationSPointsColor: { type: String, default: '#FFFFFF' },
    latestReasonTextColor: { type: String, default: '#FFFFFF' },
    reasonColor: { type: String, default: '#FF0000' },
});

module.exports = mongoose.model('RepSchemaCostume', repSchemaCostume);


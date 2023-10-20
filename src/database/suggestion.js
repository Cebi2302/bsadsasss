const { model, Schema } = require('mongoose')

module.exports = model("SuggestionSchema", new Schema({
    GuildID: String,
    ChannelID: String
}))
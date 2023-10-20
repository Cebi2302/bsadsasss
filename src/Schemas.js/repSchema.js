const { model, Schema } = require("mongoose");

let reputationSchema = new Schema({
    guildId: { type: String, required: true },
    userId: String,
    reputationPoints: { type: Number, default: 0 },
    lastRepTime: Date,
    superRepReceived: { type: Number, default: 0 }, 
    interactions: [
        {
            targetId: { type: String, required: true },
            cooldownEnd: { type: Number, required: true },
            reason: String,
        },
    ],
});


module.exports = model("reputationSchema", reputationSchema);


const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");
const suggestion = require("../../database/suggestion");
const config = require("../../config");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suggestion')
        .setDescription('Send suggestion messages to this server.')
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages)
        .addStringOption((option) => option
            .setName('message').setDescription('Fill in the message you want to send.').setRequired(true)),

    async execute(interaction, client) {
        await suggestion.findOne({ GuildID: interaction.guild.id }).then(async (data) => {
            if (!data) return interaction.reply({
                embeds: [new EmbedBuilder()
                    .setColor(config.embed.color)
                    .setDescription(`Cannot execute command because there is no data on this server!`)
                    .setFooter({ text: `Contact the staff to support this problem!` })], ephemeral: true
            })

            await client.channels.cache.get(data.ChannelID).send({
                embeds: [new EmbedBuilder()
                    .setTitle(`${guild.name}'s Suggestion`)
                    .setDescription(`We have a new suggestion from ${interaction.user}`)
                    .addFields([
                        { name: 'Suggestion Message', value: `${interaction.options.getString('message').replace(/\\n/g, '\n')}`, inline: false },
                    ])
                    .setColor(config.embed.color)
                    .setFooter({ text: `ID Sender : ${interaction.user.id}` })]
            }).then(async (msg) => {
                msg.react('👍')
                msg.react('👎')

                return interaction.reply({
                    embeds: [new EmbedBuilder()
                        .setColor(config.embed.color)
                        .setDescription(`Successfully sent a suggestion message to this server!`)], ephemeral: true
                })
            })
        })
    }
}
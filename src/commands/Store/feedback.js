const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, ChannelType } = require("discord.js");
const feedback = require('../../database/feedback');
const config = require("../../config");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('feedback')
        .setDescription('Make feedback on our service!')
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages)
        .addChannelOption((option) => option
            .setName('product').setDescription('Products that have been purchased.').setRequired(true).addChannelTypes(ChannelType.GuildText))
        .addStringOption((option) => option
            .setName('rating').setDescription('Rating for our service.').setRequired(true)
            .addChoices(
                { name: '1 Star', value: '1s' },
                { name: '2 Star', value: '2s' },
                { name: '3 Star', value: '3s' },
                { name: '4 Star', value: '4s' },
                { name: '5 Star', value: '5s' },
            ))
        .addStringOption((option) => option
            .setName('review').setDescription('A brief review of our products and services.').setRequired(true)),

    async execute(interaction, client) {
        const { guild, options } = interaction;

        await feedback.findOne({ GuildID: guild.id }).then(async (data) => {
            if (!data) return interaction.reply({
                embeds: [new EmbedBuilder()
                    .setColor(config.embed.color)
                    .setDescription(`Cannot execute command because there is no data on this server!`)
                    .setFooter({ text: `STORE FEEDBACK` })], ephemeral: true
            })

            const FeedbackEmbed = new EmbedBuilder()
                .setTitle(`${guild.name}'s Feedback`)
                .setDescription(`Thank you for giving your feedback!`)
                .setColor(config.embed.color)
                .setFooter({ text: `ID Author : ${interaction.user.id}` })

            switch (options.getString('rating')) {
                case '1s': {
                    FeedbackEmbed.addFields([
                        { name: 'Buyer', value: `${interaction.user}`, inline: true },
                        { name: 'Product', value: `${options.getChannel('product')}`, inline: true },
                        { name: 'Rating', value: `<:star:1147042025343025202>`, inline: true },
                        { name: 'Preview', value: `\`\`\`${options.getString('review')}\`\`\``, inline: false },
                    ])
                }
                    break;
                case '2s': {
                    FeedbackEmbed.addFields([
                        { name: 'Buyer', value: `${interaction.user}`, inline: true },
                        { name: 'Product', value: `${options.getChannel('product')}`, inline: true },
                        { name: 'Rating', value: `<:star:1147042025343025202><:star:1147042025343025202>`, inline: true },
                        { name: 'Preview', value: `\`\`\`${options.getString('review')}\`\`\``, inline: false },
                    ])
                }
                    break;
                case '3s': {
                    FeedbackEmbed.addFields([
                        { name: 'Buyer', value: `${interaction.user}`, inline: true },
                        { name: 'Product', value: `${options.getChannel('product')}`, inline: true },
                        { name: 'Rating', value: `<:star:1147042025343025202><:star:1147042025343025202><:star:1147042025343025202>`, inline: true },
                        { name: 'Preview', value: `\`\`\`${options.getString('review')}\`\`\``, inline: false },
                    ])
                }
                    break;
                case '4s': {
                    FeedbackEmbed.addFields([
                        { name: 'Buyer', value: `${interaction.user}`, inline: true },
                        { name: 'Product', value: `${options.getChannel('product')}`, inline: true },
                        { name: 'Rating', value: `<:star:1147042025343025202><:star:1147042025343025202><:star:1147042025343025202><:star:1147042025343025202>`, inline: true },
                        { name: 'Preview', value: `\`\`\`${options.getString('review')}\`\`\``, inline: false },
                    ])
                }
                    break;
                case '5s': {
                    FeedbackEmbed.addFields([
                        { name: 'Buyer', value: `${interaction.user}`, inline: true },
                        { name: 'Product', value: `${options.getChannel('product')}`, inline: true },
                        { name: 'Rating', value: `<:star:1147042025343025202><:star:1147042025343025202><:star:1147042025343025202><:star:1147042025343025202><:star:1147042025343025202>`, inline: true },
                        { name: 'Preview', value: `\`\`\`${options.getString('review')}\`\`\``, inline: false },
                    ])
                }
                    break;
            }

            await client.channels.cache.get(data.ChannelID).send({ embeds: [FeedbackEmbed], ephemeral: false }).then(async () => {
                return interaction.reply({
                    embeds: [new EmbedBuilder()
                        .setDescription(`Successfully made feedback and sent to <#${data.ChannelID}>`)
                        .setColor(config.embed.color)], ephemeral: true
                })
            })
        })
    }
}
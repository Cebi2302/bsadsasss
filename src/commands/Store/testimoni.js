const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');
const testimoni = require('../../database/testimoni');
const config = require('../../config');
const moment = require('moment');
const ms = require('ms');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('testimoni')
        .setDescription('Make testimonials for purchasing products on this server!')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels)
        .addUserOption((option) => option
            .setName('buyer').setDescription('Buyer of the product purchased.').setRequired(true))
        .addStringOption((option) => option
            .setName('number').setDescription('Order of testimonials to be made.').setRequired(true))
        .addStringOption((channel) => channel
            .setName('product').setDescription('Product purchased by buyer.').setRequired(true))
        .addStringOption((option) => option
            .setName('expired').setDescription('Expired from the product purchased by the buyer.').setRequired(true)
            .addChoices(
                { name: 'None', value: 'none' },
                { name: '1 Month', value: '1mon' },
                { name: '2 Month', value: '2mon' },
                { name: '3 Month', value: '3mon' },
                { name: '4 Month', value: '4mon' },
                { name: '5 Month', value: '5mon' },
                { name: '6 Month', value: '6mon' },
                { name: '7 Month', value: '7mon' },
                { name: '8 Month', value: '8mon' },
                { name: '9 Month', value: '9mon' },
                { name: '10 Month', value: '10mon' },
                { name: '11 Month', value: '11mon' },
                { name: '12 Month', value: '12mon' },
            ))
        .addStringOption((option) => option
            .setName('price').setDescription('The price of the product purchased by the buyer.').setRequired(true))
        .addStringOption((option) => option
            .setName('image').setDescription('Image proof of successful payment.').setRequired(true)),

    async execute(interaction, client) {
        const { guild, options } = interaction;

        const testimonidata = await testimoni.findOne({ GuildID: guild.id })

        if (!testimonidata) return interaction.reply({
            embeds: [new EmbedBuilder()
                .setColor(config.embed.color)
                .setDescription(`Cannot execute command because there is no data on this server!`)
                .setFooter({ text: `STORE TESTIMONIAL!` })], ephemeral: true
        })

        const TestimoniEmbed = new EmbedBuilder()
            .setTitle(`${guild.name}'s Testimonial #${options.getString('number')}`)
            .setImage(options.getString('image'))
            .setColor(config.embed.color)

        switch (options.getString('expired')) {
            case 'none': {
                TestimoniEmbed.setDescription(`Thank you ${options.getMember('buyer')} for trusting and buying our product.\n\n**Testimonial Information**\n- **Product :** ${options.getString('product')}\n- **Expired :** None\n- **Price :** ${options.getString('price')}`)
            }
                break;
            case '1mon': {
                TestimoniEmbed.setDescription(`Thank you ${options.getMember('buyer')} for trusting and buying our product.\n\n**Testimonial Information**\n- **Product :** ${options.getString('product')}\n- **Expired :** ${moment(Date.now() + ms('20d') + ms('10d')).format('LL')}\n- **Price :** ${options.getString('price')}`)
            }
                break;
            case '2mon': {
                TestimoniEmbed.setDescription(`Thank you ${options.getMember('buyer')} for trusting and buying our product.\n\n**Testimonial Information**\n- **Product :** ${options.getString('product')}\n- **Expired :** ${moment(Date.now() + ms('20d') + ms('20d') + ms('20d')).format('LL')}\n- **Price :** ${options.getString('price')}`)
            }
                break;
            case '3mon': {
                TestimoniEmbed.setDescription(`Thank you ${options.getMember('buyer')} for trusting and buying our product.\n\n**Testimonial Information**\n- **Product :** ${options.getString('product')}\n- **Expired :** ${moment(Date.now() + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('10d')).format('LL')}\n- **Price :** ${options.getString('price')}`)
            }
                break;
            case '4mon': {
                TestimoniEmbed.setDescription(`Thank you ${options.getMember('buyer')} for trusting and buying our product.\n\n**Testimonial Information**'\n- **Product :** ${options.getString('product')}\n- **Expired :** ${moment(Date.now() + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d')).format('LL')}\n- **Price :** ${options.getString('price')}`)
            }
                break;
            case '5mon': {
                TestimoniEmbed.setDescription(`Thank you ${options.getMember('buyer')} for trusting and buying our product.\n\n**Testimonial Information**\n- **Product :** ${options.getString('product')}\n- **Expired :** ${moment(Date.now() + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('10d')).format('LL')}\n- **Price :** ${options.getString('price')}`)
            }
                break;
            case '6mon': {
                TestimoniEmbed.setDescription(`Thank you ${options.getMember('buyer')} for trusting and buying our product.\n\n**Testimonial Information**\n- **Product :** ${options.getString('product')}\n- **Expired :** ${moment(Date.now() + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d')).format('LL')}\n- **Price :** ${options.getString('price')}`)
            }
                break;
            case '7mon': {
                TestimoniEmbed.setDescription(`Thank you ${options.getMember('buyer')} for trusting and buying our product.\n\n**Testimonial Information**\n- **Product :** ${options.getString('product')}\n- **Expired :** ${moment(Date.now() + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('10d')).format('LL')}\n- **Price :** ${options.getString('price')}`)
            }
                break;
            case '8mon': {
                TestimoniEmbed.setDescription(`Thank you ${options.getMember('buyer')} for trusting and buying our product.\n\n**Testimonial Information**\n- **Product :** ${options.getString('product')}\n- **Expired :** ${moment(Date.now() + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d')).format('LL')}\n- **Price :** ${options.getString('price')}`)
            }
                break;
            case '9mon': {
                TestimoniEmbed.setDescription(`Thank you ${options.getMember('buyer')} for trusting and buying our product.\n\n**Testimonial Information**\n- **Product :** ${options.getString('product')}\n- **Expired :** ${moment(Date.now() + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('10d')).format('LL')}\n- **Price :** ${options.getString('price')}`)
            }
                break;
            case '10mon': {
                TestimoniEmbed.setDescription(`Thank you ${options.getMember('buyer')} for trusting and buying our product.\n\n**Testimonial Information**\n- **Product :** ${options.getString('product')}\n- **Expired :** ${moment(Date.now() + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d')).format('LL')}\n- **Price :** ${options.getString('price')}`)
            }
                break;
            case '11mon': {
                TestimoniEmbed.setDescription(`Thank you ${options.getMember('buyer')} for trusting and buying our product.\n\n**Testimonial Information**\n- **Product :** ${options.getString('product')}\n- **Expired :** ${moment(Date.now() + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('10d')).format('LL')}\n- **Price :** ${options.getString('price')}`)
            }
                break;
            case '12mon': {
                TestimoniEmbed.setDescription(`Thank you ${options.getMember('buyer')} for trusting and buying our product.\n\n**Testimonial Information**\n- <:ncdot:1149006230359122061> **Product :** ${options.getString('product')}\n- <:ncdot:1149006230359122061> **Expired :** ${moment(Date.now() + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d') + ms('20d')).format('LL')}\n- <:ncdot:1149006230359122061> **Price :** ${options.getString('price')}`)
            }
                break;
        }

        await options.getMember('buyer').roles.add(testimonidata.RoleID).then(async () => {
            await client.channels.cache.get(testimonidata.ChannelID).send({ embeds: [TestimoniEmbed], ephemeral: false }).then(async () => {
                return interaction.reply({
                    embeds: [new EmbedBuilder()
                        .setColor(config.embed.color)
                        .setDescription(`Successfully created testimonial #${options.getString('number')} in <#${testimonidata.ChannelID}> and added ${options.getMember('buyer')} to <@&${testimonidata.RoleID}>`)], ephemeral: true
                })
            })
        })
    }
}
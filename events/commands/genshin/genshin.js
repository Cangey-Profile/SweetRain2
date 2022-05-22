const fetch = require('node-fetch');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help-genshin',
    aliases: ["genshin"],
    permissions: ["SEND_MESSAGES"],
    description: "Embeds!",
    async execute(client, message, args, Discord){

        let description = "Genshin Impact is an open-world action RPG with “gacha” (we wll go over that later on) mechanics. It is developed and published by Chinese studio miHoYo. In it, players control a number of party members, each with different abilities, weapons, gear, and personalities. The combat plays out in real time, allowing players to utilize ranged, melee, and elemental attacks against a wide array of enemies across the game(s) open world and dungeons."
        let image = "https://thumbs.gfycat.com/AltruisticAggressiveAddax-size_restricted.gif"
        let thumb = "https://media.discordapp.net/attachments/928257362106654720/929376683956510790/artworks-w6XYmsnp5PGKGQtL-tDQZAQ-t500x500.png?width=495&height=495"
        let elements = "`\ anemo \` `\ cryo \` `\ dendro \` `\ electro \` `\ geo \` `\ hydro \` `\ pyro \`"
        let nations = "`\ mondstadt \` `\ liyue \` `\ inazuma \`"

        let artiimage = "https://cdn.gamerstopia.com/wp-content/uploads/Genshin-Impact-Artifact-Guide-Featured-Image.jpg"
        let charimage = "https://cdn.discordapp.com/attachments/936853603434520577/938660196459372574/wallpaperflare.com_wallpaper.jpg"
        let wpimage = "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/10/Genshin-Impact-Weapons.jpg"
        let natimage = "https://cdn.discordapp.com/attachments/936853603434520577/938662204000043058/7fb6b6d032fdea09fc1b5dfab3e42863_2343336213336885966.jpg"
        let elimage = "https://cdn.discordapp.com/attachments/936853603434520577/938660196115447818/genshin-impact-elements.jpg"

        const genEmbed = new MessageEmbed()
        .setTitle(`Genshin Impact`) 
        .setDescription(`${description}`)
        .setImage(`${image}`)
        .setThumbnail(`${thumb}`)
        .setTimestamp()

        const cmdEmbed = new MessageEmbed()
        .setTitle(`Genshin Impact - Commands`) 
        .setDescription("Genshin impact commands")
        .addFields(
          { name: `Artifacts`, value: "`\ =gen-arti {artifact_name} \` || `\ =genshin-artifact \`"},
          { name: `Characters`, value: "`\ =gen-char {character_name} \` || `\ =genshin-character \`"},
          { name: `Elements`, value: "`\ =gen-el {element_name} \` || `\ =genshin-elements \`"}, 
          { name: `Nations`, value: "`\ =gen-nat {nation_name} \` || `\ =genshin-nations \`"},
          { name: `Weapons`, value: "`\ =gen-wp {weapon_name} \` || `\ =genshin-weapons \`"},
        )
        .setThumbnail(`${thumb}`)
        .setTimestamp()

        const arti = new MessageEmbed()
        .setTitle(`Artifact names`) 
        .setDescription("For artifacts names , please visit the link: [Artifacts](https://github.com/genshindev/api/tree/mistress/assets/data/artifacts)")
        .setImage(`${artiimage}`)
        .setTimestamp()

        const char = new MessageEmbed()
        .setTitle(`Character names`) 
        .setDescription("For character names , please visit the link: [Characters](https://github.com/genshindev/api/tree/mistress/assets/data/characters)")
        .setImage(`${charimage}`)
        .setTimestamp()

        const elem = new MessageEmbed()
        .setTitle(`Element names`) 
        .setDescription(`${elements}`)
        .setImage(`${elimage}`)
        .setTimestamp()

        const nat = new MessageEmbed()
        .setTitle(`Nation names`) 
        .setDescription(`${nations}`)
        .setImage(`${natimage}`)
        .setTimestamp()

        const wp = new MessageEmbed()
        .setTitle(`Weapon names`)
        .setDescription("For weapon names , please visit the link: [Weapons](https://github.com/genshindev/api/tree/mistress/assets/data/weapons)")
        .setImage(`${wpimage}`)
        .setTimestamp()

        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId('main')
                .setLabel('Genshin')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId('cmd')
                .setLabel('Commands')
                .setStyle('SECONDARY')
            );

        const row2 = new MessageActionRow().addComponents(
            new MessageButton()
              .setCustomId('arti')
              .setLabel('Artifacts')
              .setStyle('SECONDARY'),
            new MessageButton()
              .setCustomId('char')
              .setLabel('Characters')
              .setStyle('SECONDARY'),
            new MessageButton()
              .setCustomId('elem')
              .setLabel('Elements')
              .setStyle('SECONDARY'),
            new MessageButton()
              .setCustomId('nat')
              .setLabel('Nations')
              .setStyle('SECONDARY'), 
            new MessageButton()
              .setCustomId('wp')
              .setLabel('Weapons')
              .setStyle('SECONDARY'),
        );

        const sentMessage = await message.channel.send({ embeds: [genEmbed], components: [row, row2] })

        const filter1 = i => i.customId === 'main' && i.user.id === message.member.user.id;

        const collectorGen = message.channel.createMessageComponentCollector({ filter1, time: 50000 });
        
        collectorGen.on('collect', async i => {
          if (i.customId === 'main') {
            await i.deferUpdate();
            await sentMessage.edit({ embeds: [genEmbed], components: [row, row2] });
          }
        });

        const filter2 = i => i.customId === 'cmd' && i.user.id === message.member.user.id;

        const collectorCmd = message.channel.createMessageComponentCollector({ filter2, time: 50000 });
        
        collectorCmd.on('collect', async i => {
          if (i.customId === 'cmd') {
            await i.deferUpdate();
            await sentMessage.edit({ embeds: [cmdEmbed], components: [row, row2] });
          }
        });

        const filter3 = i => i.customId === 'arti' && i.user.id === message.member.user.id;

        const collectorarti = message.channel.createMessageComponentCollector({ filter3, time: 50000 });
        
        collectorarti.on('collect', async i => {
          if (i.customId === 'arti') {
            await i.deferUpdate();
            await sentMessage.edit({ embeds: [arti], components: [row, row2] });
          }
        });

        const filter4 = i => i.customId === 'char' && i.user.id === message.member.user.id;

        const collectorchar = message.channel.createMessageComponentCollector({ filter4, time: 50000 });
        
        collectorchar.on('collect', async i => {
          if (i.customId === 'char') {
            await i.deferUpdate();
            await sentMessage.edit({ embeds: [char], components: [row, row2] });
          }
        });

        const filter5 = i => i.customId === 'elem' && i.user.id === message.member.user.id;

        const collectorel = message.channel.createMessageComponentCollector({ filter5, time: 50000 });
        
        collectorel.on('collect', async i => {
          if (i.customId === 'elem') {
            await i.deferUpdate();
            await sentMessage.edit({ embeds: [elem], components: [row, row2] });
          }
        });

        const filter6 = i => i.customId === 'nat' && i.user.id === message.member.user.id;

        const collectornat = message.channel.createMessageComponentCollector({ filter6, time: 50000 });
        
        collectornat.on('collect', async i => {
          if (i.customId === 'nat') {
            await i.deferUpdate();
            await sentMessage.edit({ embeds: [nat], components: [row, row2] });
          }
        });

        const filter7 = i => i.customId === 'wp' && i.user.id === message.member.user.id;

        const collectorwp = message.channel.createMessageComponentCollector({ filter7, time: 50000 });
        
        collectorwp.on('collect', async i => {
          if (i.customId === 'wp') {
            await i.deferUpdate();
            await sentMessage.edit({ embeds: [wp], components: [row, row2] });
          }
        });

        setTimeout(function () {
          row.components[0].setDisabled(true);
          row.components[1].setDisabled(true);

          row2.components[0].setDisabled(true);
          row2.components[1].setDisabled(true);
          row2.components[2].setDisabled(true);
          row2.components[3].setDisabled(true);
          row2.components[4].setDisabled(true);

          sentMessage.edit({ embeds: [genEmbed], components: [row] })
        }, 50000);
    }
}
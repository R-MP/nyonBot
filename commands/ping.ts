import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { i18n } from "../utils/i18n";

const pingCommand = {
  data: new SlashCommandBuilder().setName("ping").setDescription(i18n.__("ping.description")),
  cooldown: 10,
  async execute(interaction: CommandInteraction) {
    try {
      await interaction.reply({
        content: i18n.__mf("ping.result", { ping: Math.round(interaction.client.ws.ping) }),
        ephemeral: false,
      });
    } catch (error) {
      console.error(error);
    }
  },
};

export default pingCommand;


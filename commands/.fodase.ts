import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { i18n } from "../utils/i18n";

const fodase = {
  data: new SlashCommandBuilder().setName("fodase"),
  cooldown: 0,
  async execute(interaction: CommandInteraction) {
    try {
      await interaction.reply({
        content: "",
        files: ["https://media.tenor.com/cx4vo39RyQIAAAAM/fodase.gif"],
      });

    } catch (error) {
      console.error(error);
    }
  },
};

export default fodase;
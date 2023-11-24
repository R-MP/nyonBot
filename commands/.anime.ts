
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

const anime = {
  data: new SlashCommandBuilder()
    .setName("anime")
    .setDescription("Check if the message contains 'anime'")
    .addStringOption(option =>
      option
        .setName("text")
        .setDescription("The text to check for 'anime'")
        .setRequired(true)
    ),
  async execute(interaction: ChatInputCommandInteraction) {
    try {
      const textOption = interaction.options?.getString("text", false);

      if (textOption) {
        const content = textOption.toLowerCase();

        if (content.includes("anime")) {
          await interaction.reply("yay");
        } else {
          await interaction.reply("nay");
        }
      } else {
        await interaction.reply("No text provided");
      }
    } catch (error) {
      console.error(error);
    }
  },
};

export default anime;


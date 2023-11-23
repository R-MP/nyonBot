import { Client, Message } from "discord.js";

const client = new Client({
    intents: [0, 512],
});

client.on("messageCreate", async (message) => {
  try {
    if (message.author.bot) return;

    const content = message.content.toLowerCase();

    if (content.includes(":o")) {
      await message.channel.send("yuu");
    }
  } catch (error) {
    console.error(error);
  }
});

client.login("ODU3MDIwNTExNjI4Njg5NDA4.G0A8pH.vrxwK_1dSzZAyUI56YaHyi81v4_5Z6oe2O6DjQ");

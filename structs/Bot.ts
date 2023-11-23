import {
  ChatInputApplicationCommandData,
  ChatInputCommandInteraction,
  Client,
  Collection,
  CommandInteraction,
  Message
} from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import { config } from "../utils/config";
import { i18n } from "../utils/i18n";
import { MusicQueue } from "./MusicQueue";

export class Bot {
  public readonly prefix = "";
  public commands = new Collection<string, any>();
  public slashCommands = new Array<ChatInputApplicationCommandData>();
  public slashCommandsMap = new Collection<string, any>();
  public cooldowns = new Collection<string, Collection<string, number>>();
  public queues = new Collection<string, MusicQueue>();

  public constructor(public readonly client: Client) {
    this.client.login(config.TOKEN);

    this.client.on("messageCreate", async (message: Message) => {
      if (message.content.startsWith(this.prefix) && !message.author.bot) {
        const args = message.content.slice(this.prefix.length).trim().split(/ +/);
        const commandName = args.shift()?.toLowerCase();

        if (!commandName) return;

        const command = this.commands.get(commandName);

        if (!command) return;

        try {
          command.execute(message);
        } catch (error: any) {
          console.error(error);
          message.reply({ content: i18n.__("common.errorCommand") }).catch(console.error);
        }
      }
    });

    this.client.on("interactionCreate", async (interaction) => {
      if (interaction.isCommand()) {
        const command = this.slashCommandsMap.get(interaction.commandName);

        if (!command) return;

        try {
          command.execute(interaction);
        } catch (error: any) {
          console.error(error);

          interaction.reply({ content: i18n.__("common.errorCommand"), ephemeral: true }).catch(console.error);
        }
      }
    });

    this.registerSlashCommands();
  }

  private async registerSlashCommands() {
    const commandFiles = readdirSync(join(__dirname, "..", "commands")).filter((file) => !file.endsWith(".map"));

    for (const file of commandFiles) {
      const command = await import(join(__dirname, "..", "commands", `${file}`));

      if (command.default?.data) {
        this.slashCommands.push(command.default.data as ChatInputApplicationCommandData);
        this.slashCommandsMap.set(command.default.data.name, command.default);
        this.commands.set(command.default.data.name, command.default); // Adding to regular commands
      }
    }

    await this.client.application?.commands.set(this.slashCommands);
  }
}

console.log("Bot is starting...");

const client = new Client({
  intents: []
});

const bot = new Bot(client);

client.login(config.TOKEN);

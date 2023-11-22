import { CommandInteraction, SlashCommandBuilder } from "discord.js";

const vaporeon = {
  data: new SlashCommandBuilder().setName("vaporeon"),
  cooldown: 0,
  async execute(interaction: CommandInteraction) {
    try {
      // Array de links de GIFs
      const gifLinks = [
        
        "https://media.tenor.com/6v5o3jLXUOYAAAAC/pokemon-vaporeon.gif",
        "https://i.gifer.com/LyNv.gif",
        "https://gifdb.com/images/high/pokemon-vaporeon-inside-hourglass-02tyi5m5v6knl0fl.gif",
        "https://i.chzbgr.com/full/8493289472/hF06FC346/pokemon-memes-vaporeon-flush.gif",
        "https://i.kym-cdn.com/photos/images/original/002/650/066/761.gif",
        "https://media.tenor.com/G48eKPHYf70AAAAC/vaporeon.gif",
        "https://www.icegif.com/wp-content/uploads/2022/10/icegif-278.gif",
        "https://i.kym-cdn.com/photos/images/original/002/530/494/fa6.gif",
        "https://steamuserimages-a.akamaihd.net/ugc/2009219644015637630/258F11A7AD252C75AE08CF4A0DDA64367B8FDA08/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        "https://i.makeagif.com/media/5-31-2023/gmyVi4.gif",
        // Adicione outros links de GIFs aqui
      ];

      // Seleciona um link aleatório do array
      const randomIndex = Math.floor(Math.random() * gifLinks.length);
      const randomGif = gifLinks[randomIndex];

      await interaction.reply({
        content: "Vocês sabiam que em termos de sexo entre um humano e uma pokemon fêmea, a melhor escolha compatível é uma Vaporeon? Não só estão no field egg group, que é composto principalmente por mamiferos, como também possuem o tamanho médio de 0,90m e pesam 30 quilos, isso significa que são grandes o suficlente pra aguentar um pau humano, e com seu Base Stat de HP e ter acesso a Acid Armor, você pode ser bruto com uma. Devido a sua composição ser basicamente água, não tem dúvida na minha mente de que uma Vaporeon com tesão seja extremamente molhada, tão molhada que você pode ter sexo com uma por horas facilmente sem ela ficar seca. Elas podem aprender também ataques como Attract, Baby-Doll Eyes, Captivate, Charm e Tail Whip, além de terem pelos pra cobrir os mamilos, então seria incrivelmente fácil ela fazer você ficar com vontade de fuder. Com suas habilidades Water Absorb e Hydration, elas podem facilmente recuperar da fadiga delas com água suficiente. Nenhum outro Pokémon se encaixa nessa compatibilidade tão bem. Também, se você gozar muito nela, a vaporeon vai ficar branca. Em resumo: Vaporeons são feitas pra aguentar o pênis humano. Defesa incrível + HP alto + Acid Armor + move pool significa que elas podem tomar rola o dia todo e ainda voltar pra mais",
        files: [randomGif],
      });
    } catch (error) {
      console.error(error);
    }
  },
};

export default vaporeon;
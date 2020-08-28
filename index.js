const client = require('discord-rich-presence')('735924093068771409');
 
client.updatePresence({
  state: 'Un serveur communautaire chill ! (Giveaway nitro aux 150 users !)',
  details: '🔗 discord.destiny-world.cf (discord.gg/ACuUEkQ)',
  startTimestamp: Date.now(),
  largeImageKey: 'destiny_logo',
  smallImageKey: 'destiny_tada',
  largeImageText: "Rejoignez dès maintenant ! Bientot un serveur minecraft, gmod, et autres !",
  smallImageText: "En plus, il y aura un giveaway aux 150 membres ! C'est le moment d'inviter !",
  instance: true,
});
console.log(` _____  ______  _____ _______ _____ _   ___     __
|  __ \\|  ____|/ ____|__   __|_   _| \\ | \\ \\   / /
| |  | | |__  | (___    | |    | | |  \\| |\\ \\_/ / 
| |  | |  __|  \\___ \\   | |    | | | . \` | \\   /  
| |__| | |____ ____) |  | |   _| |_| |\\  |  | |   
|_____/|______|_____/   |_|  |_____|_| \\_|  |_|   `)
console.log(`   __          ______  _____  _      _____  
   \\ \\        / / __ \\|  __ \\| |    |  __ \\ 
    \\ \\  /\\  / / |  | | |__) | |    | |  | |
     \\ \\/  \\/ /| |  | |  _  /| |    | |  | |
      \\  /\\  / | |__| | | \\ \\| |____| |__| |
       \\/  \\/   \\____/|_|  \\_\\______|_____/ `)
console.log("\n--------------------------------------------------\n")
console.log("Merci d'utiliser notre système Rich Presence !\nPour verifier que tout fonctionne bien, regardez votre profil, vous devriez voir un menu !\n\nSi se menu n'apparait pas, activez votre activité de jeu sur discord\nSi jamais une erreur avec comme nom \"RPC_CONNECTION_TIMEOUT\" apparait, redemarrez votre Discord !")
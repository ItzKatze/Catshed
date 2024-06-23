import request from "../../requestV2";
import Settings from "../settings";
import webhookdata from "../webhook";
import { pictures } from "../data/pictures";
import { formateItem, formateSendItem } from "../utils/utils";

register("chat", (rarity, drop, magicFind, event) => {

   if (Settings[formateItem(drop)]) {

       let image = pictures.slayerDrops[formateItem(drop)];
       let playerName = Player.getName();
       let description = playerName + ' just dropped **' + formateSendItem(drop) + '** while having ' + magicFind + "% Magic Find!";
       let title = rarity + " DROP"
       let color = "";
       let sendWebhook = false;
  
       if (rarity == "INSANE") {
            color = 16733525;
            sendWebhook = true;
       } else if (rarity == "CRAZY RARE") {
            color = 16733695;
            sendWebhook = true;
       } else if (rarity == "VERY RARE") {
            color = 5592575;
            sendWebhook = true;
       } else if (rarity == "RARE") {
            color = 5592575;
            sendWebhook = true;
       };
  
       if (image === undefined) return;
       if (sendWebhook && image.includes("hypixel")) {
            request({
                url: Settings.webhook,
                method: 'POST',
                headers: {
                   'Content-type': 'application/json',
                   "User-Agent": "Mozilla/5.0"
                },
                body: {
                   "username": webhookdata.username,
                   "avatar_url": webhookdata.avatar_url,
                   "embeds": [
                         {
                            "title": title,
                            "color": color,
                            "description": description,
                            "footer": {"text": webhookdata.footer},
                            "thumbnail": {"url": image},
                            "fields": []
                         }
                      ]
                }
            });
  
            ChatLib.chat("&b[Catshed]&r &7Detected Rare Drop! Sending Notification...");
       };
   }
}).setCriteria(/([a-zA-Z ]+) DROP! \(([a-zA-Z -]+)\) \(\+([0-9]+)% ✯ Magic Find\)/g);
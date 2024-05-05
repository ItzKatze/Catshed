import request from "../../requestV2";
import Settings from "../settings";
import webhookdata from "../webhook";
import { pictures } from "../data/pictures";

register("chat", (rarity, drop, magicFind, event) => {

     let magicFindFormatted = magicFind.replace("✯", "");

     let dropFormatted = drop.replaceAll(/[\[\]◆\']/g, "").trim().toLowerCase().replaceAll(/[ \-]/g, "_");
     let image = pictures.slayerDrops[dropFormatted];
     
     let playerName = Player.getName();
     let description = playerName + ' just dropped **' + drop + '** while having ' + magicFindFormatted + "!";
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
     if (sendWebhook && image.includes("hypixel") && Settings[dropFormatted]) {
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
}).setCriteria('${rarity} DROP! (${drop}) (${magicFind})');
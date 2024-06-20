import request from "../../requestV2";
import Settings from "../settings";
import webhookdata from "../webhook";
import { pictures } from "../data/pictures";
import { formateItem } from "../utils/utils";

register("chat", (gifter, item, reciever, event) => {

   if (Settings.santaGifts) {

      let playerName = Player.getName();
      let title = "Santa Gift!";
      let image = pictures.gifts[formateItem(item)];
      let sendWebhook = false;
      let description = "";

      if (gifter.includes(playerName)) {
         description = gifter + " just gifted **" + item + "** to " + reciever + "!";
         sendWebhook = true;
      } else if (reciever.includes(playerName)) {
         description = reciever + " optained **" + item + "** from opening a gift from " + gifter + "!";
         sendWebhook = true;
      }
   
      if (image === undefined) return;
      if (image.includes("hypixel") && sendWebhook) {
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
                          "color": 11141120,
                          "description": description,
                          "footer": {"text": webhookdata.footer},
                          "thumbnail": {"url": image},
                          "fields": []
                       }
                    ]
              }
           });
   
           ChatLib.chat("&b[Catshed]&r &7Detected Santa Gift! Sending Notification...");
 
    };
   }
}).setCriteria("SANTA GIFT! ${gifter} gifted ${item} to ${reciever}!");
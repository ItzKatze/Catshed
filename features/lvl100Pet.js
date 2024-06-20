import request from "../../requestV2";
import Settings from "../settings";
import webhookdata from "../webhook";
import { pictures } from "../data/pictures";
import { formateItem } from "../utils/utils";

register("chat", (pet, level, event) => {

   if (Settings.lvl100Pet && level == 100 || level == 200) {

      let playerName = Player.getName();
      let description = playerName + " just leveled up their **" + pet + "** Pet to **Level " + level + "**!";
      let title = "Maxed Pet!";
      let image = pictures.pets[formateItem(pet)];
 
      if (image === undefined) return;
      if (image.includes("hypixel")) {
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
                           "color": 1633567,
                           "description": description,
                           "footer": {"text": webhookdata.footer},
                           "thumbnail": {"url": image},
                           "fields": []
                        }
                     ]
               }
            });

            ChatLib.chat("&b[Catshed]&r &7Detected Maxed Pet! Sending Notification...");

         }
   }
}).setCriteria('Your ${pet} leveled up to level ${level}!');
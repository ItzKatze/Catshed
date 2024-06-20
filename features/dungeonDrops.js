import request from "../../requestV2";
import Settings from "../settings";
import webhookdata from "../webhook";
import { pictures } from "../data/pictures";
import { formateItem } from "../utils/utils";

register("chat", (drop, event) => {

   if (Settings[formateItem(drop)]) {

      let image = pictures.dungeonDrops[formateItem(drop)];
      let playerName = Player.getName();
      let description = playerName + ' just unlocked **' + drop + '**!';
   
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
                          "title": "Dungeon Drop!",
                          "color": 16755200,
                          "description": description,
                          "footer": {"text": webhookdata.footer},
                          "thumbnail": {"url": image},
                          "fields": []
                       }
                    ]
              }
           });
   
           ChatLib.chat("&b[Catshed]&r &7Detected Rare Dungeon Drop! Sending Notification...");
   
      };
   }
}).setCriteria('${dropRaw}');
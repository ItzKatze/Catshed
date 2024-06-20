import request from "../../requestV2";
import Settings from "../settings";
import webhookdata from "../webhook";
import { pictures } from "../data/pictures";
import { formateItem } from "../utils/utils";

register("chat", (fish, event) => {

   if (Settings.diamondTrophyFish) {

        let image = pictures.trophyFish[formateItem(fish)];
        let playerName = Player.getName();
        let description = playerName + " just fished up their first **Diamond " + fish + "**!";
        let title = "Diamond Trophy Fish!";

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
                            "color": 5636095,
                            "description": description,
                            "footer": {"text": webhookdata.footer},
                            "thumbnail": {"url": image},
                            "fields": []
                         }
                      ]
                }
             });

             ChatLib.chat("&b[Catshed]&r &7Detected new Diamond Trophy Fish! Sending Notification...");

        };
   }
}).setCriteria(/NEW DISCOVERY: ([a-zA-Z ]+) Diamond/g);
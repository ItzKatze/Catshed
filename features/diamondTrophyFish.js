import request from "../../requestV2";
import Settings from "../settings";
import webhookdata from "../webhook";
import { pictures } from "../data/pictures";

register("chat", (fish, event) => {

    let playerName = Player.getName();
    let description = playerName + " just fished up a **Diamond " + fish + "**!";
    let title = "Diamond Trophy Fish!";


   if (Settings.diamondTrophyFish = true) {

        let fishFormatted = fish.replaceAll(/[\[\]◆\']/g, "").trim().toLowerCase().replaceAll(/[ \-]/g, "_");
        let image = pictures.trophyFish[fishFormatted];

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
import request from "../../requestV2";
import Settings from "../settings";
import webhookdata from "../webhook";
import { pictures } from "../data/pictures";

register("chat", (pet, magicFind, event) => {

    let playerName = Player.getName();
    let description = playerName + " just dropped **" + pet + "** while having " + magicFind + ":star: Magic Find!";
    let title = "Pet Drop!";


   if (Settings.petDrops = true) {

        let petFormatted = pet.replaceAll(/[\[\]◆\']/g, "").trim().toLowerCase().replaceAll(/[ \-]/g, "_");
        let image = pictures.pets[petFormatted];

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

             ChatLib.chat("&b[Catshed]&r &7Detected new Pet Drop! Sending Notification...");

        };
   }
}).setCriteria(/PET DROP! ([a-zA-Z)]+) \(\+([0-9]+)% ✯ Magic Find\)/g);
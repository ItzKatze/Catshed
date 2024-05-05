import request from "../../requestV2";
import Settings from "../settings";
import webhookdata from "../webhook";
import { pictures } from "../data/pictures";

register("chat", (dropRaw, event) => {

    let drop = dropRaw.trim().replace('RARE REWARD! ', '').replace('Enchanted Book (', '').replace(')', '');
    let dropFormatted = drop.replaceAll(/[\[\]◆\']/g, "").trim().toLowerCase().replaceAll(/[ \-]/g, "_");
    let image = pictures.dungeonDrops[dropFormatted];

    let playerName = Player.getName();
    let description = playerName + ' just unlocked **' + drop + '**!';

    if (image === undefined) return;
    if (image.includes("hypixel") && Settings[dropFormatted]) {
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


}).setCriteria('${dropRaw}');
import request from "../../requestV2";
import Settings from "../settings";
import webhookdata from "../webhook";
import { pictures } from "../data/pictures";

register("chat", (visitorRNG, event) => {

    let playerName = Player.getName();
    let description = playerName + " just found a Visitor RNG: **" + visitorRNG + "**!";
    let title = "Visitor RNG!";

    let visitorRNGFormatted = visitorRNG.trim().toLowerCase().replaceAll(/[ \-]/g, "_");
    let image = pictures.visitorRNGs[visitorRNGFormatted];
 
    if (image === undefined) return;
    if (image.includes("hypixel") && Settings.visitorRNGS) {
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
                        "color": 43520,
                        "description": description,
                        "footer": {"text": webhookdata.footer},
                        "thumbnail": {"url": image},
                        "fields": []
                     }
                  ]
            }
         });
 
         ChatLib.chat("&b[Catshed]&r &7Detected Visitor RNG! Sending Notification...");
 
    };

}).setCriteria("${visitorRNG}");
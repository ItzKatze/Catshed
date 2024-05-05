import request from "../../requestV2";
import Settings from "../settings";
import webhookdata from "../webhook";
import { pictures } from "../data/pictures";

register("chat", (gifter, item, reciever, event) => {

    let playerName = Player.getName();
    let description = gifter + " just gifted **" + item + "** to " + reciever + "!";
    let title = "Santa Gift!";

    let itemFormatted = item.trim().toLowerCase().replaceAll(/[ \-]/g, "_");
    let image = pictures.gifts[itemFormatted];
 
    if (image === undefined) return;
    if (image.includes("hypixel") && Settings.santaGifts && gifter.includes(playerName) || reciever.includes(playerName)) {
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

}).setCriteria("SANTA GIFT! ${gifter} gifted ${item} to ${reciever}!");
import request from "../../requestV2";
import Settings from "../settings";
import webhookdata from "../webhook";
import { pictures } from "../data/pictures";
import { formateItem } from "../utils/utils";

register("chat", (type, pestRNG, farmingFortune, event) => {

   if (Settings.pestRNGs) {

      let farmingFortuneFormatted = farmingFortune.replace(",", "");
      let playerName = Player.getName();
      let description = playerName + " just dropped **" + pestRNG + "** while having " + farmingFortuneFormatted + ":shamrock: Farming Fortune!";
      let title = "Pest RNG!";
  
      let image = pictures.pests[formateItem(pestRNG)];
   
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
                          "color": 10900794,
                          "description": description,
                          "footer": {"text": webhookdata.footer},
                          "thumbnail": {"url": image},
                          "fields": []
                       }
                    ]
              }
           });
   
           ChatLib.chat("&b[Catshed]&r &7Detected Pest RNG! Sending Notification...");
 
    };
   }
}).setCriteria(/(RARE|PET) DROP! ([a-zA-Z ']+) \(\+([0-9,]+)\☘\)/g);
import request from "../../requestV2";
import Settings from "../settings";

let d = new Date();
let timestamp = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}  ${d.getDate().toString().padStart(2, '0')}.${(d.getMonth() + 1).toString().padStart(2, '0')}.${d.getFullYear()}`;
let username = "Catshed";
let avatar_url = "https://i.imgur.com/01BTomx.jpg";
let footer = "Catshed v1.1.3    >>    " + timestamp;
let playerName = Player.getName();

register("chat", (crop, playerName, image, event) => {
        if (!Settings.crazyRareFarmingDrop) return
        function cropPicture1() {

             let playerName = Player.getName();
             let description = playerName + ' just dropped **' + crop + '**!';
             let image = "";

             if (crop.indexOf('10x Enchanted Pumpkin') >= 0) {
                  image = "https://wiki.hypixel.net/images/c/c2/SkyBlock_items_enchanted_pumpkin.gif"
             };
             if (crop.indexOf('50x Enchanted Melon') >= 0) {
                  image = "https://wiki.hypixel.net/images/2/21/SkyBlock_items_enchanted_melon_slice.gif"
             };


            request({
                url: Settings.webhook,
                method: 'POST',
                headers: {
                  'Content-type': 'application/json',
                  "User-Agent": "Mozilla/5.0"
                },
                body: {
                  "username": username,
                  "avatar_url": avatar_url,
                //  "content": "content here",
                  "embeds": [
                    {
                      "title": "Crazy Rare Drop!",
                      "color": 16733695,
                      "description": description,
                      "footer": {"text": footer},
                      "image": {"url": image},
                      "fields": []
                    }
                  ]
                }

            });
        }
        cropPicture1();
}).setCriteria('CRAZY RARE DROP! Dicer dropped ${crop}!');


register("chat", (crop, playerName, image, event) => {
        if (!Settings.prayToRngesusFarming) return
        function cropPicture2() {

             let playerName = Player.getName();
             let description = playerName + ' just dropped **' + crop + '**!';
             let image = "";

             if (crop.indexOf('64x Enchanted Pumpkin') >= 0) {
                  image = "https://wiki.hypixel.net/images/c/c2/SkyBlock_items_enchanted_pumpkin.gif"
             };
             if (crop.indexOf('2x Enchanted Melon Block') >= 0) {
                  image = "https://wiki.hypixel.net/images/9/96/SkyBlock_items_enchanted_melon_block.gif"
             };


            request({
                url: Settings.webhook,
                method: 'POST',
                headers: {
                  'Content-type': 'application/json',
                  "User-Agent": "Mozilla/5.0"
                },
                body: {
                  "username": username,
                  "avatar_url": avatar_url,
                //  "content": "content here",
                  "embeds": [
                    {
                      "title": "Pray to Rngesus Drop!",
                      "color": 11141290,
                      "description": description,
                      "footer": {"text": footer},
                      "image": {"url": image},
                      "fields": []
                    }
                  ]
                }

            });
        }
        cropPicture2();
}).setCriteria('PRAY TO RNGESUS DROP! Dicer dropped ${crop}!');

export default "";
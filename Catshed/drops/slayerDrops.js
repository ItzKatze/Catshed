import request from "../../requestV2";
import Settings from "../settings";

let d = new Date();
let timestamp = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}  ${d.getDate().toString().padStart(2, '0')}.${(d.getMonth() + 1).toString().padStart(2, '0')}.${d.getFullYear()}`;
let username = "Catshed";
let avatar_url = "https://i.imgur.com/01BTomx.jpg";
let footer = "Catshed v1.1.3    >>    " + timestamp;

register("chat", (dropName, magicFind, playerName, image, event) => {
        if (!Settings.insaneDrop) return
        function dropPicture1() {

             let playerName = Player.getName();
             let description = playerName + ' just dropped **' + dropName + '** while having ' + magicFind;
             let image = "";

             if (dropName.indexOf('Ender Slayer VII') >= 0) {
                  image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
             };
             if (dropName.indexOf('Judgement Core') >= 0) {
                  image = "https://wiki.hypixel.net/images/0/07/SkyBlock_items_judgement_core.png"
             };
             if (dropName.indexOf('Enchant Rune I') >= 0) {
                  image = "https://wiki.hypixel.net/images/e/e6/SkyBlock_items_rune_enchant.png"
             };
             if (dropName.indexOf('Void Conqueror Enderman Skin') >= 0) {
                  image = "https://wiki.hypixel.net/images/2/21/SkyBlock_items_pet_skin_enderman_slayer.png"
             };
             if (dropName.indexOf('Exceedingly Rare Ender Artifact Upgrader') >= 0) {
                  image = "https://wiki.hypixel.net/images/f/f3/SkyBlock_items_exceedingly_rare_ender_artifact_upgrader.png"
             };
             if (dropName.indexOf('Handy Blood Chalice') >= 0) {
                  image = "https://wiki.hypixel.net/images/6/6b/SkyBlock_items_handy_blood_chalice.png"
             };
             if (dropName.indexOf('Pocket Espresso Machine') >= 0) {
                  image = "https://wiki.hypixel.net/images/f/fe/SkyBlock_items_pocket_espresso_machine.png"
             };
             if (dropName.indexOf('Etherwarp Merger') >= 0) {
                  image = "https://wiki.hypixel.net/images/8/8b/SkyBlock_items_etherwarp_merger.png"
             };
             if (dropName.indexOf('Sinful Dice') >= 0) {
                  image = "https://wiki.hypixel.net/images/b/b6/SkyBlock_items_sinful_dice.png"
             };
             if (dropName.indexOf('End Rune I') >= 0) {
                  image = "https://wiki.hypixel.net/images/d/dd/SkyBlock_items_rune_end.png"
             };
             if (dropName.indexOf('Smarty Pants I') >= 0) {
                  image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
             };
             if (dropName.indexOf('Hazmat Enderman') >= 0) {
                  image = "https://wiki.hypixel.net/images/e/ef/SkyBlock_items_hazmat_enderman.png"
             };
             if (dropName.indexOf('Summoning Eye') >= 0) {
                  image = "https://wiki.hypixel.net/images/1/1c/SkyBlock_items_summoning_eye.png"
             };
             if (dropName.indexOf('Warden Heart') >= 0) {
                  image = "https://wiki.hypixel.net/images/3/35/SkyBlock_items_warden_heart.png"
             };
             if (dropName.indexOf('Smite VII') >= 0) {
                  image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
             };
             if (dropName.indexOf('Shard of the Shredded') >= 0) {
                  image = "https://wiki.hypixel.net/images/a/ab/SkyBlock_items_shard_of_the_shredded.png"
             };
             if (dropName.indexOf('Scythe Blade') >= 0) {
                  image = "https://wiki.hypixel.net/images/2/20/SkyBlock_items_enchanted_diamond.gif"
             };
             if (dropName.indexOf('Snake Rune I') >= 0) {
                  image = "https://wiki.hypixel.net/images/4/44/SkyBlock_items_rune_snake.png"
             };
             if (dropName.indexOf('Beheaded Horror') >= 0) {
                  image = "https://wiki.hypixel.net/images/5/57/SkyBlock_items_beheaded_horror.png"
             };
             if (dropName.indexOf('Revenant Catalyst') >= 0) {
                  image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_revenant_catalyst.png"
             };
             if (dropName.indexOf('Smite VI') >= 0) {
                  image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
             };
             if (dropName.indexOf('Undead Catalyst') >= 0) {
                  image = "https://wiki.hypixel.net/images/6/61/SkyBlock_items_undead_catalyst.png"
             };
             if (dropName.indexOf('Overflux Capacitor') >= 0) {
                  image = "https://wiki.hypixel.net/images/9/97/SkyBlock_items_enchanted_quartz.gif"
             };
             if (dropName.indexOf('Grizzly Bait') >= 0) {
                  image = "https://wiki.hypixel.net/images/8/8e/Minecraft_items_raw_salmon.png"
             };
             if (dropName.indexOf('Couture Rune I') >= 0) {
                  image = "https://wiki.hypixel.net/images/6/61/SkyBlock_items_rune_couture.png"
             };
             if (dropName.indexOf('Red Claw Egg') >= 0) {
                  image = "https://wiki.hypixel.net/images/0/06/Minecraft_items_mooshroom_spawn_egg.png"
             };
             if (dropName.indexOf('Furball') >= 0) {
                  image = "https://wiki.hypixel.net/images/a/a1/SkyBlock_items_furball.png"
             };
             if (dropName.indexOf('Critical VI') >= 0) {
                  image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
             };
             if (dropName.indexOf('Digested Mosquite') >= 0) {
                  image = "https://wiki.hypixel.net/images/d/db/Minecraft_items_rotten_flesh.png"
             };
             if (dropName.indexOf('Tarantula Talisman') >= 0) {
                  image = "https://wiki.hypixel.net/images/8/86/SkyBlock_items_tarantula_talisman.png"
             };
             if (dropName.indexOf('Fly Swatter') >= 0) {
                  image = "https://wiki.hypixel.net/images/9/9b/Minecraft_items_golden_shovel.png"
             };
             if (dropName.indexOf('Bane of Arthropods VI') >= 0) {
                  image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
             };
             if (dropName.indexOf('Spider Catalyst') >= 0) {
                  image = "https://wiki.hypixel.net/images/e/e4/SkyBlock_items_spider_catalyst.png"
             };
             if (dropName.indexOf('Subzero Inverter') >= 0) {
                  image = "https://wiki.hypixel.net/images/0/0f/SkyBlock_items_subzero_inverter.png"
             };
             if (dropName.indexOf("Wilson's Engineering Plans") >= 0) {
                  image = "https://wiki.hypixel.net/images/3/3a/SkyBlock_items_enchanted_paper.gif"
             };
             if (dropName.indexOf('High Class Archfiend Dice') >= 0) {
                  image = "https://wiki.hypixel.net/images/a/a3/SkyBlock_items_high_class_archfiend_dice.png"
             };
             if (dropName.indexOf('Fiery Burst Rune I') >= 0) {
                  image = "https://wiki.hypixel.net/images/d/da/SkyBlock_items_rune_fiery_burst.png"
             };
             if (dropName.indexOf('Duplex I') >= 0) {
                  image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
             };
             if (dropName.indexOf('Fire Aspect III') >= 0) {
                  image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
             };
            if (dropName.indexOf('Archfiend Dice') >= 0) {
                  image = "https://wiki.hypixel.net/images/1/15/SkyBlock_items_archfiend_dice.png"
             };
             if (dropName.indexOf('Lavatears Rune I') >= 0) {
                  image = "https://wiki.hypixel.net/images/6/6c/SkyBlock_items_rune_lavatears.png"
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
                      "title": "Insane Drop!",
                      "color": 16733525,
                      "description": description,
                      "footer": {"text": footer},
                      "image": {"url": image},
                      "fields": []
                    }
                  ]
                }

            });
        }
        dropPicture1();
}).setCriteria('INSANE DROP! (${dropName}) (${magicFind})');




register("chat", (dropName, magicFind, playerName, image, event) => {
    if (!Settings.crazyRareDrop) return
    function dropPicture2() {

         let playerName = Player.getName();
         let description = playerName + ' just dropped **' + dropName + '** while having ' + magicFind;
         let image = "";

         if (dropName.indexOf('Ender Slayer VII') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
         };
         if (dropName.indexOf('Judgement Core') >= 0) {
              image = "https://wiki.hypixel.net/images/0/07/SkyBlock_items_judgement_core.png"
         };
         if (dropName.indexOf('Enchant Rune I') >= 0) {
              image = "https://wiki.hypixel.net/images/e/e6/SkyBlock_items_rune_enchant.png"
         };
         if (dropName.indexOf('Void Conqueror Enderman Skin') >= 0) {
              image = "https://wiki.hypixel.net/images/2/21/SkyBlock_items_pet_skin_enderman_slayer.png"
         };
         if (dropName.indexOf('Exceedingly Rare Ender Artifact Upgrader') >= 0) {
              image = "https://wiki.hypixel.net/images/f/f3/SkyBlock_items_exceedingly_rare_ender_artifact_upgrader.png"
         };
         if (dropName.indexOf('Handy Blood Chalice') >= 0) {
              image = "https://wiki.hypixel.net/images/6/6b/SkyBlock_items_handy_blood_chalice.png"
         };
         if (dropName.indexOf('Pocket Espresso Machine') >= 0) {
              image = "https://wiki.hypixel.net/images/f/fe/SkyBlock_items_pocket_espresso_machine.png"
         };
         if (dropName.indexOf('Etherwarp Merger') >= 0) {
              image = "https://wiki.hypixel.net/images/8/8b/SkyBlock_items_etherwarp_merger.png"
         };
         if (dropName.indexOf('Sinful Dice') >= 0) {
              image = "https://wiki.hypixel.net/images/b/b6/SkyBlock_items_sinful_dice.png"
         };
         if (dropName.indexOf('End Rune I') >= 0) {
              image = "https://wiki.hypixel.net/images/d/dd/SkyBlock_items_rune_end.png"
         };
         if (dropName.indexOf('Smarty Pants I') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
         };
         if (dropName.indexOf('Hazmat Enderman') >= 0) {
              image = "https://wiki.hypixel.net/images/e/ef/SkyBlock_items_hazmat_enderman.png"
         };
         if (dropName.indexOf('Summoning Eye') >= 0) {
              image = "https://wiki.hypixel.net/images/1/1c/SkyBlock_items_summoning_eye.png"
         };
         if (dropName.indexOf('Warden Heart') >= 0) {
              image = "https://wiki.hypixel.net/images/3/35/SkyBlock_items_warden_heart.png"
         };
         if (dropName.indexOf('Smite VII') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
         };
         if (dropName.indexOf('Shard of the Shredded') >= 0) {
              image = "https://wiki.hypixel.net/images/a/ab/SkyBlock_items_shard_of_the_shredded.png"
         };
         if (dropName.indexOf('Scythe Blade') >= 0) {
              image = "https://wiki.hypixel.net/images/2/20/SkyBlock_items_enchanted_diamond.gif"
         };
         if (dropName.indexOf('Snake Rune I') >= 0) {
              image = "https://wiki.hypixel.net/images/4/44/SkyBlock_items_rune_snake.png"
         };
         if (dropName.indexOf('Beheaded Horror') >= 0) {
              image = "https://wiki.hypixel.net/images/5/57/SkyBlock_items_beheaded_horror.png"
         };
         if (dropName.indexOf('Revenant Catalyst') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_revenant_catalyst.png"
         };
         if (dropName.indexOf('Smite VI') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
         };
         if (dropName.indexOf('Undead Catalyst') >= 0) {
              image = "https://wiki.hypixel.net/images/6/61/SkyBlock_items_undead_catalyst.png"
         };
         if (dropName.indexOf('Overflux Capacitor') >= 0) {
              image = "https://wiki.hypixel.net/images/9/97/SkyBlock_items_enchanted_quartz.gif"
         };
         if (dropName.indexOf('Grizzly Bait') >= 0) {
              image = "https://wiki.hypixel.net/images/8/8e/Minecraft_items_raw_salmon.png"
         };
         if (dropName.indexOf('Couture Rune I') >= 0) {
              image = "https://wiki.hypixel.net/images/6/61/SkyBlock_items_rune_couture.png"
         };
         if (dropName.indexOf('Red Claw Egg') >= 0) {
              image = "https://wiki.hypixel.net/images/0/06/Minecraft_items_mooshroom_spawn_egg.png"
         };
         if (dropName.indexOf('Furball') >= 0) {
              image = "https://wiki.hypixel.net/images/a/a1/SkyBlock_items_furball.png"
         };
         if (dropName.indexOf('Critical VI') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
         };
         if (dropName.indexOf('Digested Mosquite') >= 0) {
              image = "https://wiki.hypixel.net/images/d/db/Minecraft_items_rotten_flesh.png"
         };
         if (dropName.indexOf('Tarantula Talisman') >= 0) {
              image = "https://wiki.hypixel.net/images/8/86/SkyBlock_items_tarantula_talisman.png"
         };
         if (dropName.indexOf('Fly Swatter') >= 0) {
              image = "https://wiki.hypixel.net/images/9/9b/Minecraft_items_golden_shovel.png"
         };
         if (dropName.indexOf('Bane of Arthropods VI') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
         };
         if (dropName.indexOf('Spider Catalyst') >= 0) {
              image = "https://wiki.hypixel.net/images/e/e4/SkyBlock_items_spider_catalyst.png"
         };
         if (dropName.indexOf('Subzero Inverter') >= 0) {
              image = "https://wiki.hypixel.net/images/0/0f/SkyBlock_items_subzero_inverter.png"
         };
         if (dropName.indexOf("Wilson's Engineering Plans") >= 0) {
              image = "https://wiki.hypixel.net/images/3/3a/SkyBlock_items_enchanted_paper.gif"
         };
         if (dropName.indexOf('High Class Archfiend Dice') >= 0) {
              image = "https://wiki.hypixel.net/images/a/a3/SkyBlock_items_high_class_archfiend_dice.png"
         };
         if (dropName.indexOf('Fiery Burst Rune I') >= 0) {
              image = "https://wiki.hypixel.net/images/d/da/SkyBlock_items_rune_fiery_burst.png"
         };
         if (dropName.indexOf('Duplex I') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
         };
         if (dropName.indexOf('Fire Aspect III') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
         };
        if (dropName.indexOf('Archfiend Dice') >= 0) {
              image = "https://wiki.hypixel.net/images/1/15/SkyBlock_items_archfiend_dice.png"
         };
         if (dropName.indexOf('Lavatears Rune I') >= 0) {
              image = "https://wiki.hypixel.net/images/6/6c/SkyBlock_items_rune_lavatears.png"
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
    dropPicture2();
}).setCriteria('CRAZY RARE DROP! (${dropName}) (${magicFind})');


register("chat", (dropName, magicFind, playerName, image, event) => {
    if (!Settings.veryRareDrop) return
    function dropPicture3() {

         let playerName = Player.getName();
         let description = playerName + ' just dropped **' + dropName + '** while having ' + magicFind;
         let image = "";

         if (dropName.indexOf('Ender Slayer VII') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
         };
         if (dropName.indexOf('Judgement Core') >= 0) {
              image = "https://wiki.hypixel.net/images/0/07/SkyBlock_items_judgement_core.png"
         };
         if (dropName.indexOf('Enchant Rune I') >= 0) {
              image = "https://wiki.hypixel.net/images/e/e6/SkyBlock_items_rune_enchant.png"
         };
         if (dropName.indexOf('Void Conqueror Enderman Skin') >= 0) {
              image = "https://wiki.hypixel.net/images/2/21/SkyBlock_items_pet_skin_enderman_slayer.png"
         };
         if (dropName.indexOf('Exceedingly Rare Ender Artifact Upgrader') >= 0) {
              image = "https://wiki.hypixel.net/images/f/f3/SkyBlock_items_exceedingly_rare_ender_artifact_upgrader.png"
         };
         if (dropName.indexOf('Handy Blood Chalice') >= 0) {
              image = "https://wiki.hypixel.net/images/6/6b/SkyBlock_items_handy_blood_chalice.png"
         };
         if (dropName.indexOf('Pocket Espresso Machine') >= 0) {
              image = "https://wiki.hypixel.net/images/f/fe/SkyBlock_items_pocket_espresso_machine.png"
         };
         if (dropName.indexOf('Etherwarp Merger') >= 0) {
              image = "https://wiki.hypixel.net/images/8/8b/SkyBlock_items_etherwarp_merger.png"
         };
         if (dropName.indexOf('Sinful Dice') >= 0) {
              image = "https://wiki.hypixel.net/images/b/b6/SkyBlock_items_sinful_dice.png"
         };
         if (dropName.indexOf('End Rune I') >= 0) {
              image = "https://wiki.hypixel.net/images/d/dd/SkyBlock_items_rune_end.png"
         };
         if (dropName.indexOf('Smarty Pants I') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
         };
         if (dropName.indexOf('Hazmat Enderman') >= 0) {
              image = "https://wiki.hypixel.net/images/e/ef/SkyBlock_items_hazmat_enderman.png"
         };
         if (dropName.indexOf('Summoning Eye') >= 0) {
              image = "https://wiki.hypixel.net/images/1/1c/SkyBlock_items_summoning_eye.png"
         };
         if (dropName.indexOf('Warden Heart') >= 0) {
              image = "https://wiki.hypixel.net/images/3/35/SkyBlock_items_warden_heart.png"
         };
         if (dropName.indexOf('Smite VII') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
         };
         if (dropName.indexOf('Shard of the Shredded') >= 0) {
              image = "https://wiki.hypixel.net/images/a/ab/SkyBlock_items_shard_of_the_shredded.png"
         };
         if (dropName.indexOf('Scythe Blade') >= 0) {
              image = "https://wiki.hypixel.net/images/2/20/SkyBlock_items_enchanted_diamond.gif"
         };
         if (dropName.indexOf('Snake Rune I') >= 0) {
              image = "https://wiki.hypixel.net/images/4/44/SkyBlock_items_rune_snake.png"
         };
         if (dropName.indexOf('Beheaded Horror') >= 0) {
              image = "https://wiki.hypixel.net/images/5/57/SkyBlock_items_beheaded_horror.png"
         };
         if (dropName.indexOf('Revenant Catalyst') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_revenant_catalyst.png"
         };
         if (dropName.indexOf('Smite VI') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
         };
         if (dropName.indexOf('Undead Catalyst') >= 0) {
              image = "https://wiki.hypixel.net/images/6/61/SkyBlock_items_undead_catalyst.png"
         };
         if (dropName.indexOf('Overflux Capacitor') >= 0) {
              image = "https://wiki.hypixel.net/images/9/97/SkyBlock_items_enchanted_quartz.gif"
         };
         if (dropName.indexOf('Grizzly Bait') >= 0) {
              image = "https://wiki.hypixel.net/images/8/8e/Minecraft_items_raw_salmon.png"
         };
         if (dropName.indexOf('Couture Rune I') >= 0) {
              image = "https://wiki.hypixel.net/images/6/61/SkyBlock_items_rune_couture.png"
         };
         if (dropName.indexOf('Red Claw Egg') >= 0) {
              image = "https://wiki.hypixel.net/images/0/06/Minecraft_items_mooshroom_spawn_egg.png"
         };
         if (dropName.indexOf('Furball') >= 0) {
              image = "https://wiki.hypixel.net/images/a/a1/SkyBlock_items_furball.png"
         };
         if (dropName.indexOf('Critical VI') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
         };
         if (dropName.indexOf('Digested Mosquite') >= 0) {
              image = "https://wiki.hypixel.net/images/d/db/Minecraft_items_rotten_flesh.png"
         };
         if (dropName.indexOf('Tarantula Talisman') >= 0) {
              image = "https://wiki.hypixel.net/images/8/86/SkyBlock_items_tarantula_talisman.png"
         };
         if (dropName.indexOf('Fly Swatter') >= 0) {
              image = "https://wiki.hypixel.net/images/9/9b/Minecraft_items_golden_shovel.png"
         };
         if (dropName.indexOf('Bane of Arthropods VI') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
         };
         if (dropName.indexOf('Spider Catalyst') >= 0) {
              image = "https://wiki.hypixel.net/images/e/e4/SkyBlock_items_spider_catalyst.png"
         };
         if (dropName.indexOf('Subzero Inverter') >= 0) {
              image = "https://wiki.hypixel.net/images/0/0f/SkyBlock_items_subzero_inverter.png"
         };
         if (dropName.indexOf("Wilson's Engineering Plans") >= 0) {
              image = "https://wiki.hypixel.net/images/3/3a/SkyBlock_items_enchanted_paper.gif"
         };
         if (dropName.indexOf('High Class Archfiend Dice') >= 0) {
              image = "https://wiki.hypixel.net/images/a/a3/SkyBlock_items_high_class_archfiend_dice.png"
         };
         if (dropName.indexOf('Fiery Burst Rune I') >= 0) {
              image = "https://wiki.hypixel.net/images/d/da/SkyBlock_items_rune_fiery_burst.png"
         };
         if (dropName.indexOf('Duplex I') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
         };
         if (dropName.indexOf('Fire Aspect III') >= 0) {
              image = "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"
         };
        if (dropName.indexOf('Archfiend Dice') >= 0) {
              image = "https://wiki.hypixel.net/images/1/15/SkyBlock_items_archfiend_dice.png"
         };
         if (dropName.indexOf('Lavatears Rune I') >= 0) {
              image = "https://wiki.hypixel.net/images/6/6c/SkyBlock_items_rune_lavatears.png"
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
                          "title": "Very Rare Drop!",
                          "color": 5592575,
                          "description": description,
                          "footer": {"text": footer},
                          "image": {"url": image},
                          "fields": []
                        }
                      ]
                    }

        });
    }
    dropPicture3();
}).setCriteria('VERY RARE DROP! (${dropName}) (${magicFind})');

export default "";
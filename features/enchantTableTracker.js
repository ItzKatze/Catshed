import request from "../../requestV2";
import Settings from "../settings";
import { makeDisplayDraggable } from "../../Draggable";
import { data } from "../utils/utils";
import webhookdata from "../webhook";


const t7Books = [
    "Scavanger V",
    "Smite VII",
    "Sharpness VII",
    "Bane Of Arthropods VII",
    "Cubism VI",
    "Protection VII",
    "Power VII",
    "Looting V",
    "Critical VII",
    "Chance V",
    "Cleave VI",
    "Execute VI",
    "Venomous VI",
    "Ender Slayer VII",
    "Prosecute VI",
    "Protectile Protection VII",
    "Blast Protection VII",
    "Fire Protection VII",
    "Giant Killer VII",
    "Luck VII",
    "Titan Killer VII",
    "Thunderbolt VI",
    "First Strike V",
    "Life Steal V",
    "Snipe IV",
    "Growth VII",
    "Triple Strike V",
    "Syphon V",
];

const t6Books = [
    "Sharpness VI",
    "Protection VI",
    "Giant Killer VI",
    "Growth VI",
    "Syphon IV",
    "Power VI",
];

let playerName = Player.getName();

const display = new Display({
  renderX: 550,
  renderY: 50,
});

const gui = new Gui();
makeDisplayDraggable("experiment tracker", display, () => gui.isOpen());

display.setLine(0, "&bExperiment Tracker");
display.setLine(1, "");
display.hide();

function updateDisplay() {
  const filteredEnchantBooksT7 = Object.entries(data.enchantBooksT7)
    .filter(([, counter]) => counter > 0);

  const sortedEnchantBooksT7 = filteredEnchantBooksT7
    .sort(([, counterA], [, counterB]) => counterB - counterA);

  for (let i = 0; i < display.getLines(); i++) {
    display.setLine(i, "");
  }

  sortedEnchantBooksT7.forEach(([book, counter], index) => {
    const line = index + 2;
    const enchantedBook = book.replace(/([a-z])([A-Z])/g, "$1 $2");
    display.setLine(line, `&c${enchantedBook}&r x${counter}`);
  });

  display.setLine(sortedEnchantBooksT7.length + 2, "");

  const filteredEnchantBooksT6 = Object.entries(data.enchantBooksT6)
    .filter(([, counter]) => counter > 0);

  const sortedEnchantBooksT6 = filteredEnchantBooksT6
    .sort(([, counterA], [, counterB]) => counterB - counterA);

  for (let i = 0; i < display.getLines(); i++) {
    display.setLine(i, "");
  }

  sortedEnchantBooksT6.forEach(([book, counter], index) => {
    const line = sortedEnchantBooksT7.length + 3 + index;
    const enchantedBook = book.replace(/([a-z])([A-Z])/g, "$1 $2");
    display.setLine(line, `&6${enchantedBook}&r x${counter}`);
  });

};
  
updateDisplay();

if (Settings.expTracker) {

  register("chat", (book, bookNew, event) => {

    if (!t7Books.includes(book)) return
    
      let bookNew = book.replaceAll(" ", "");
      data.enchantBooksT7[bookNew] += 1;
      data.save();
      updateDisplay();
  
      if (Settings.expTrackerT7) {
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
                      "title": "T7 Book found!",
                      "color": 16733525,
                      "description": playerName + ' just found **' + book + '** in their experiment!',
                      "footer": {"text": webhookdata.footer},
                      "thumbnail": {"url": "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"},
                      "fields": []
                   }
                ]
          }
        });

        ChatLib.chat("&b[Catshed]&r &7Detected T7 Book! Sending Notification...");

      };
  
  }).setCriteria(" +${book}")
  
  register("chat", (book, bookNew, event) => {
  
    if (!t6Books.includes(book)) return
    
      let bookNew = book.replaceAll(" ", "");
      data.enchantBooksT6[bookNew] += 1;
      data.save();
      updateDisplay();
  
      if (Settings.expTrackerT6) {
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
                      "title": "T6 Book found!",
                      "color": 16755200,
                      "description": playerName + ' just found **' + book + '** in their experiment!',
                      "footer": {"text": webhookdata.footer},
                      "thumbnail": {"url": "https://wiki.hypixel.net/images/4/4e/SkyBlock_items_enchanted_book.gif"},
                      "fields": []
                   }
                ]
          }
        });

        ChatLib.chat("&b[Catshed]&r &7Detected T6 Book! Sending Notification...");

      };
      
  }).setCriteria(" +${book}")

};

let checkGui;

register("guiOpened", () => {
    checkGui = true;
});

register("guiClosed", () => {
  display.hide();
});

register("postGuiRender", () => {
    if(!checkGui) return;
    checkGui = !checkGui;

    let x = Player.getOpenedInventory()?.getName();
    if (x == undefined) return;
    if (x.includes("Experimentation Table") && Settings.expTracker) {
      display.show();
    } else if (x.includes("Chronomatron") && Settings.expTracker) {
      display.show();
    } else if (x.includes("Ultrasequencer") && Settings.expTracker) {
      display.show();
    } else if (x.includes("Superpairs") && Settings.expTracker) {
      display.show();
    } else if (x.includes("Experiment Over") && Settings.expTracker) {
      display.show();
    } else if (gui.isOpen() && Settings.expTracker) {
      display.show();
    };
});

register("command", () => {
gui.open();
}).setName("exptracker");




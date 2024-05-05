import Settings from "./settings";
import "./features/slayerDrops";
import "./features/visitorRNGS";
import "./features/dungeonDrops";
import "./features/enchantTableTracker";
import "./features/lvl100Pet";
import "./features/diamondTrophyFish";
import "./features/santaGifts";
import "./features/pests";

register("command", () => Settings.openGUI()).setName("catshed");
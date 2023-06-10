import request from "../requestV2";
import Settings from "./settings";
import slayerDrops from "./drops/slayerDrops";
import farmingDrops from "./drops/farmingDrops";

register("command", () => Settings.openGUI()).setName("catshed");
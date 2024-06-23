import PogObject from "../../PogData";

export const data = new PogObject(
    "Catshed",
	{
        enchantBooksT7: {
            ScavangerV: 0,
            SmiteVII: 0,
            SharpnessVII: 0,
            BaneOfArthropodsVII: 0,
            CubismVI: 0,
            ProtectionVII: 0,
            PowerVII: 0,
            LootingV: 0,
            CriticalVII: 0,
            ChanceV: 0,
            CleaveVI: 0,
            ExecuteVI: 0,
            VenomousVI: 0,
            EnderSlayerVII: 0,
            ProsecuteVI: 0,
            ProtectileProtectionVII: 0,
            BlastProtectionVII: 0,
            FireProtectionVII: 0,
            GiantKillerVII: 0,
            LuckVII: 0,
            TitanKillerVII: 0,
            ThunderboltVI: 0,
            FirstStrikeV: 0,
            LifeStealV: 0,
            SnipeIV: 0,
            GrowthVII: 0,
            TripleStrikeV: 0,
            SyphonV: 0
        },

        enchantBooksT6: {
            SharpnessVI: 0,
            ProtectionVI: 0,
            GiantKillerVI: 0,
            GrowthVI: 0,
            SyphonIV: 0,
            PowerVI: 0
        },

	},
	"data/catshed.json"
);

export function formateItem(item) {
    formatedItem = item.replace('RARE REWARD! ', '').replace('Enchanted Book (', '').replaceAll(/[\[\]◆✦\'\(\)]/g, "").trim().replaceAll(/[- ]/g, "_").toLowerCase();
    return formatedItem;
}

export function formateSendItem(item) {
    formatedItem = item.replaceAll(/◆✦/g, "").trim();
    return formatedItem;
}

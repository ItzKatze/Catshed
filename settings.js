import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
} from '../Vigilance/index';

@Vigilant('Catshed', 'Catshed', {
    getCategoryComparator: () => (a, b) => {
        const categories = ['General', 'Dungeons', 'Farming', 'Slayer', "Miscellaneous"];

        return categories.indexOf(a.name) - categories.indexOf(b.name);
    },
    getSubcategoryComparator: () => (a, b) => {
        const subcategories = ["Settings", "Slayer Drop Notifications", "Farming Drop Notifications", "Dungeon Notifications", "Floor 1", "Floor 2", "Floor 3", "Floor 4", "Floor 5", "Floor 6", "Floor 7", "Miscellaneous Settings"];

        return subcategories.indexOf(a.getValue()[0].attributesExt.subcategory) -
            subcategories.indexOf(b.getValue()[0].attributesExt.subcategory);
    },
    getPropertyComparator: () => (a, b) => {
        const names = [];

        return names.indexOf(a.attributesExt.name) - names.indexOf(b.attributesExt.name);
    }
})

    ///////////
    //General//
    ///////////

class Settings {
    @TextProperty({
        name: 'Webhook',
        description: 'Put in a webhook to which your drop notifications should be send!',
        category: 'General',
        subcategory: 'Settings',
        protected: true,
    })
    webhook = '';

    ///////////////////
    //Revenant Horror//
    ///////////////////

    @SwitchProperty({
        name: 'Revenant Horror',
        description: 'Enable to see all Options for Zombie Slayer',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    revenantHorror = true;

    @SwitchProperty({
        name: 'Warden Heart',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    warden_heart = true;

    @SwitchProperty({
        name: 'Smite VII',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    smite_vii = true;

    @SwitchProperty({
        name: 'Shard of the Shredded',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    shard_of_the_shredded = true;

    @SwitchProperty({
        name: 'Scythe Blade',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    scythe_blade = true;

    @SwitchProperty({
        name: 'Snake Rune I',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    snake_rune_i = true;

    @SwitchProperty({
        name: 'Beheaded Horror',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    beheaded_horror = true;

    @SwitchProperty({
        name: 'Revenant Catalyst',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    revenant_catalyst = false;

    @SwitchProperty({
        name: 'Smite VI',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    smite_vi = false;

    @SwitchProperty({
        name: 'Undead Catalyst',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    undead_catalyst = false;

    ///////////////////
    //Sven Packmaster//
    ///////////////////

    @SwitchProperty({
        name: 'Sven Packmaster',
        description: 'Enable to see all Options for Wolf Slayer',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    svenPackmaster = true;

    @SwitchProperty({
        name: 'Overflux Capacitor',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    overflux_capacitor = true;

    @SwitchProperty({
        name: 'Grizzly Salmon',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    grizzly_salmon = true;

    @SwitchProperty({
        name: 'Couture Rune I',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    couture_rune_i = true;

    @SwitchProperty({
        name: 'Red Claw Egg',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    red_claw_egg = true;

    @SwitchProperty({
        name: 'Furball',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    furball = false;

    @SwitchProperty({
        name: 'Critical VI',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    critical_vi = false;

    /////////////////////////
    //Tarantula Broodfather//
    /////////////////////////

    @SwitchProperty({
        name: 'Tarantula Broodfather',
        description: 'Enable to see all Options for Spider Slayer',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    tarantulaBroodfather = true;

    @SwitchProperty({
        name: 'Digested Mosquite',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    digested_mosquite = true;

    @SwitchProperty({
        name: 'Tarantula Talisman',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    tarantula_talisman = true;

    @SwitchProperty({
        name: 'Fly Swatter',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    fly_swatter = true;

    @SwitchProperty({
        name: 'Bane of Arthropods VI',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    bane_of_arthropods_vi = false;

    @SwitchProperty({
        name: 'Spider Catalyst',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    spider_catalyst = false;

    ////////////////////
    //Voidgloom Seraph//
    ////////////////////

    @SwitchProperty({
        name: 'Voidgloom Seraph',
        description: 'Enable to see all Options for Enderman Slayer',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    voidgloomSeraph = true;

    @SwitchProperty({
        name: 'Ender Slayer VII',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    ender_slayer_vii = true;

    @SwitchProperty({
        name: 'Judgement Core',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    judgement_core = true;

    @SwitchProperty({
        name: 'Enchant Rune I',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    enchant_rune_i = true;

    @SwitchProperty({
        name: 'Void Conqueror Enderman Skin',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    void_conqueror_enderman_skin = true;

    @SwitchProperty({
        name: 'Exceedingly Rare Ender Artifact Upgrader',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    exceedingly_rare_ender_artifact_upgrader = true;

    @SwitchProperty({
        name: 'Handy Blood Chalice',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    handy_blood_chalice = true;

    @SwitchProperty({
        name: 'Pocket Espresso Machine',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    pocket_espresso_machine = true;

    @SwitchProperty({
        name: 'Etherwarp Merger',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    etherwarp_merger = false;

    @SwitchProperty({
        name: 'Sinful Dice',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    sinful_dice = false;

    @SwitchProperty({
        name: 'End Rune I',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    end_rune_i = false;

    @SwitchProperty({
        name: 'Smarty Pants I',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    smarty_pants_i = false;

    @SwitchProperty({
        name: 'Hazmat Enderman',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    hazmat_enderman = false;

    @SwitchProperty({
        name: 'Summoning Eye',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    summoning_eye = false;

    @SwitchProperty({
        name: 'Mana Steal I',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    mana_steal_i = false;

    @SwitchProperty({
        name: 'Null Atom',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    null_atom = false;

    @SwitchProperty({
        name: 'Endersnake Rune I',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    endersnake_rune_i = false;

    @SwitchProperty({
        name: 'Transmission Tuner',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    transmission_tuner = false;

    /////////////////////
    //Inferno Demonlord//
    /////////////////////

    @SwitchProperty({
        name: 'Inferno Demonlord',
        description: 'Enable to see all Options for Blaze Slayer',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    infernoDemonlord = true;

    @SwitchProperty({
        name: 'Subzero Inverter',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    subzero_inverter = true;

    @SwitchProperty({
        name: "Wilson's Engineering Plans",
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    wilsons_engineering_plans = true;

    @SwitchProperty({
        name: 'High Class Archfiend Dice',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    high_class_archfiend_dice = true;

    @SwitchProperty({
        name: 'Fiery Burst Rune I',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    fiery_burst_rune_i = true;

    @SwitchProperty({
        name: 'Duplex I',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    duplex_i = false;

    @SwitchProperty({
        name: 'Fire Aspect III',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    fire_aspect_iii = false;

    @SwitchProperty({
        name: 'Archfiend Dice',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    archfiend_dice = false;

    @SwitchProperty({
        name: 'Lavatears Rune I',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    lavatears_rune_i = false;

    //////////////////////////
    //Riftstalker Bloodfiend//
    //////////////////////////

    @SwitchProperty({
        name: 'Riftstalker Bloodfiend',
        description: 'Enable to see all Options for Vampire Slayer',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    riftstalkerBloodfiend = true;

    @SwitchProperty({
        name: 'Guardian Lucky Block',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    guardian_lucky_block = true;

    @SwitchProperty({
        name: "McGrubber's Burger",
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    mcgrubbers_burger = true;

    @SwitchProperty({
        name: 'Unfanged Vampire Part',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    unfanged_vampire_part = true;

    @SwitchProperty({
        name: 'Enchanted Book Bundle',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    enchanted_book_bundle = true;

    @SwitchProperty({
        name: 'Quantum Book Bundle',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    quantum_book_bundle = false;

    @SwitchProperty({
        name: 'Soultwist Rune I',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    soultwist_rune_i = false;

    @SwitchProperty({
        name: 'Bubba Blister',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    bubba_blister = false;

    @SwitchProperty({
        name: 'Fang-tastic Chocolate Chip',
        description: '',
        category: 'Slayer',
        subcategory: 'Slayer Drop Notifications',
    })
    fang_tastic_chocolate_chip = false;

    /////////
    //Other//
    /////////

    @SwitchProperty({
            name: 'Other',
            description: 'Enable to see Options for all other drops',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        other = true;

        @SwitchProperty({
            name: 'Recombobulator 3000',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        recombobulator_3000 = false;

        @SwitchProperty({
            name: 'Fuming Potato Book',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        fuming_potato_book = false;

        @SwitchProperty({
            name: 'Discs',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        discs = false;

        dungeon_disc = this.discs;
        clown_disc = this.discs;
        watcher_dic = this.discs;
        necron_disc = this.discs;

        @SwitchProperty({
            name: 'Master Star',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        masterStar = true;

        first_master_star = this.masterStar;
        second_master_star = this.masterStar;
        third_master_star = this.masterStar;
        fourth_master_star = this.masterStar;
        fifth_master_star = this.masterStar;

        @SwitchProperty({
            name: 'Master Skull',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        masterSkull = true;

        master_skull___tier_1 = this.masterSkull;
        master_skull___tier_2 = this.masterSkull;
        master_skull___tier_3 = this.masterSkull;
        master_skull___tier_4 = this.masterSkull;
        master_skull___tier_5 = this.masterSkull;

    ///////////
    //Floor 1//
    ///////////

    @SwitchProperty({
            name: 'Floor 1',
            description: 'Enable to see Options for all Floor 1 drops',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        floor1 = false;

    @SwitchProperty({
            name: "Bonzo's Staff",
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        bonzos_staff = false;

    @SwitchProperty({
            name: "Bonzo's Mask",
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        bonzos_mask = false;

    @SwitchProperty({
            name: "Balloon Snake",
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        ballon_snake = false;
    
    ///////////
    //Floor 2//
    ///////////

    @SwitchProperty({
            name: 'Floor 2',
            description: 'Enable to see Options for all Floor 2 drops',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        floor2 = false;

    @SwitchProperty({
            name: "Scarf's Studies",
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        scarfs_studies = false;

    @SwitchProperty({
            name: 'Adaptive Blade',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        adaptive_blade = false;

    @SwitchProperty({
            name: 'Adaptive Belt',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        adaptive_belt = false;

    ///////////
    //Floor 3//
    ///////////

    @SwitchProperty({
            name: 'Floor 3',
            description: 'Enable to see Options for all Floor 3 drops',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        floor3 = false;

    @SwitchProperty({
            name: 'Adaptive Helmet',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        adaptive_helmet = false;

    @SwitchProperty({
            name: 'Adaptive Chestplate',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        adaptive_chestplate = false;

    @SwitchProperty({
            name: 'Adaptive Leggings',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        adaptive_leggings = false;

    @SwitchProperty({
            name: 'Adaptive Boots',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        adaptive_boots = false;

    ///////////
    //Floor 4//
    ///////////

    @SwitchProperty({
            name: 'Floor 4',
            description: 'Enable to see Options for all Floor 4 drops',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        floor4 = false;

    @SwitchProperty({
            name: 'Spirit Bone',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        spirit_bone = false;

    @SwitchProperty({
            name: 'Spirit Wing',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        spirit_wing = false;

    @SwitchProperty({
            name: 'Spirit Bow',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        spirit_bow = false;

    @SwitchProperty({
            name: 'Spirit Sword',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        spirit_sword = false;

    @SwitchProperty({
            name: 'Spirit Boots',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        spirit_boots = false;

    @SwitchProperty({
            name: 'Spirit Pet',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        lvl_1_spirit = false;

    ///////////
    //Floor 5//
    ///////////

    @SwitchProperty({
            name: 'Floor 5',
            description: 'Enable to see Options for all Floor 5 drops',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        floor5 = false;

    @SwitchProperty({
            name: 'Shadow Fury',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        shadow_fury = true;

    @SwitchProperty({
            name: 'Last Breath',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        last_breath = false;

    @SwitchProperty({
            name: 'Livid Dagger',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        livid_dagger = false;

    @SwitchProperty({
            name: 'Shadow Assassin Helmet',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        shadow_assassin_helmet = false;

    @SwitchProperty({
            name: 'Shadow Assassin Chestplate',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        shadow_assassin_chestplate = true;

    @SwitchProperty({
            name: 'Shadow Assassin Leggings',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        shadow_assassin_leggings = false;

    @SwitchProperty({
            name: 'Shadow Assassin Boots',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        shadow_assassin_boots = false;

    @SwitchProperty({
            name: 'Shadow Assassin Cloak',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        shadow_assassin_cloak = false;

    ///////////
    //Floor 6//
    ///////////

    @SwitchProperty({
            name: 'Floor 6',
            description: 'Enable to see Options for all Floor 6 drops',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        floor6 = false;

    @SwitchProperty({
            name: 'Precursor Eye',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        precursor_eye = true;

    @SwitchProperty({
            name: "Giant's Sword",
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        giants_sword = true;

    @SwitchProperty({
            name: 'Summoning Ring',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        summoning_ring = true;

    @SwitchProperty({
            name: 'Necromancer Sword',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        necromancer_sword = false;

    @SwitchProperty({
            name: 'Necromancer Lord Helmet',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        necromancer_lord_helmet = false;

    @SwitchProperty({
            name: 'Necromancer Lord Chestplate',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        necromancer_lord_chestplate = true;

    @SwitchProperty({
            name: 'Necromancer Lord Leggings',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        necromancer_lord_leggings = false;

    @SwitchProperty({
            name: 'Necromancer Lord Boots',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        necromancer_lord_boots = false;

    @SwitchProperty({
            name: 'Soulweaver Gloves',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        soulweaver_gloves = false;

    @SwitchProperty({
            name: 'Fel Skull',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        fel_skull = false;

    ///////////
    //Floor 7//
    ///////////

    @SwitchProperty({
            name: 'Floor 7',
            description: 'Enable to see Options for all Floor 7 drops',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        floor7 = false;

    @SwitchProperty({
            name: "Necron's Handle",
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        necrons_handle = true;

    @SwitchProperty({
            name: 'Scrolls',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        scrolls = true;

    implosion = this.scrolls;
    shadow_warp = this.scrolls;
    wither_shield = this.scrolls;

    @SwitchProperty({
            name: 'Auto Recombobulator',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        auto_recombobulator = false;

    @SwitchProperty({
            name: 'Fishs',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        fishs = false;

    maxor_the_fish = this.fishs;
    goldor_the_fish = this.fishs;
    storm_the_fish = this.fishs;

    @SwitchProperty({
            name: 'Dark Claymore',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        dark_claymore = true;

    @SwitchProperty({
            name: 'Necron Dye',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        necron_dye = true;

    @SwitchProperty({
            name: 'Thunderlord VII',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        thunderlord_vii = false;

    @SwitchProperty({
            name: 'Wither Helmet',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        wither_helmet = false;

    @SwitchProperty({
            name: 'Wither Chestplate',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        wither_chestplate = true;

    @SwitchProperty({
            name: 'Wither Leggings',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        wither_leggings = false;

    @SwitchProperty({
            name: 'Wither Boots',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        wither_boots = false;

    @SwitchProperty({
            name: 'Wither Cloak',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        wither_cloak = false;

    @SwitchProperty({
            name: 'Wither Catalyst',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        wither_catalyst = false;

    @SwitchProperty({
            name: 'One For All',
            description: '',
            category: 'Dungeons',
            subcategory: 'Dungeon General',
        })
        one_for_all_i = false;

    /////////////////
    //Miscellaneous//
    /////////////////

    @SwitchProperty({
        name: 'Level 100/200 Pet',
        description: 'Enable to toggle Level 100/200 Pet Notifications!',
        category: 'Miscellaneous',
        subcategory: 'Miscellaneous Settings',
    })
    lvl100Pet = true;

    @SwitchProperty({
        name: 'Experiment Tracker',
        description: 'Enable to toggle the Experiment Tracker!',
        category: 'Miscellaneous',
        subcategory: 'Miscellaneous Settings',
    })
    expTracker = true;

    @SwitchProperty({
        name: 'T6 Books',
        description: 'Enable to toggle T6 Book Notifications!',
        category: 'Miscellaneous',
        subcategory: 'Miscellaneous Settings',
    })
    expTrackerT6 = false;

    @SwitchProperty({
        name: 'T7 Books',
        description: 'Enable to toggle T7 Book Notifications!',
        category: 'Miscellaneous',
        subcategory: 'Miscellaneous Settings',
    })
    expTrackerT7 = true;

    @SwitchProperty({
        name: 'Visitor RNGs',
        description: 'Enable to toggle Visitor RNG Notifications!',
        category: 'Miscellaneous',
        subcategory: 'Miscellaneous Settings',
    })
    visitorRNGS = true;

    @SwitchProperty({
        name: 'Diamond Trophy Fish',
        description: 'Enable to toggle Diamond Trophy Fish Notifications!',
        category: 'Miscellaneous',
        subcategory: 'Miscellaneous Settings',
    })
    diamondTrophyFish = true;

    @SwitchProperty({
        name: 'Santa Gifts',
        description: 'Enable to toggle Santa Gift Notifications!',
        category: 'Miscellaneous',
        subcategory: 'Miscellaneous Settings',
    })
    santaGifts = true;

    @SwitchProperty({
        name: 'Pest RNGs',
        description: 'Enable to toggle Pest RNG Notifications!',
        category: 'Miscellaneous',
        subcategory: 'Miscellaneous Settings',
    })
    pestRNGs = true;

    constructor() {
            this.initialize(this);

            this.addDependency("Warden Heart", "Revenant Horror")
            this.addDependency("Smite VII", "Revenant Horror")
            this.addDependency("Shard of the Shredded", "Revenant Horror")
            this.addDependency("Scythe Blade", "Revenant Horror")
            this.addDependency("Snake Rune I", "Revenant Horror")
            this.addDependency("Beheaded Horror", "Revenant Horror")
            this.addDependency("Revenant Catalyst", "Revenant Horror")
            this.addDependency("Smite VI", "Revenant Horror")
            this.addDependency("Undead Catalyst", "Revenant Horror")

            this.addDependency("Overflux Capacitor", "Sven Packmaster")
            this.addDependency("Grizzly Salmon", "Sven Packmaster")
            this.addDependency("Couture Rune I", "Sven Packmaster")
            this.addDependency("Red Claw Egg", "Sven Packmaster")
            this.addDependency("Furball", "Sven Packmaster")
            this.addDependency("Critical VI", "Sven Packmaster")

            this.addDependency("Digested Mosquite", "Tarantula Broodfather")
            this.addDependency("Tarantula Talisman", "Tarantula Broodfather")
            this.addDependency("Fly Swatter", "Tarantula Broodfather")
            this.addDependency("Bane of Arthropods VI", "Tarantula Broodfather")
            this.addDependency("Spider Catalyst", "Tarantula Broodfather")

            this.addDependency("Ender Slayer VII", "Voidgloom Seraph")
            this.addDependency("Judgement Core", "Voidgloom Seraph")
            this.addDependency("Enchant Rune I", "Voidgloom Seraph")
            this.addDependency("Void Conqueror Enderman Skin", "Voidgloom Seraph")
            this.addDependency("Exceedingly Rare Ender Artifact Upgrader", "Voidgloom Seraph")
            this.addDependency("Handy Blood Chalice", "Voidgloom Seraph")
            this.addDependency("Pocket Espresso Machine", "Voidgloom Seraph")
            this.addDependency("Etherwarp Merger", "Voidgloom Seraph")
            this.addDependency("Sinful Dice", "Voidgloom Seraph")
            this.addDependency("End Rune I", "Voidgloom Seraph")
            this.addDependency("Smarty Pants I", "Voidgloom Seraph")
            this.addDependency("Hazmat Enderman", "Voidgloom Seraph")
            this.addDependency("Summoning Eye", "Voidgloom Seraph")
            this.addDependency("Mana Steal I", "Voidgloom Seraph")
            this.addDependency("Null Atom", "Voidgloom Seraph")
            this.addDependency("Endersnake Rune I", "Voidgloom Seraph")
            this.addDependency("Transmission Tuner", "Voidgloom Seraph")

            this.addDependency("Subzero Inverter", "Inferno Demonlord")
            this.addDependency("Wilson's Engineering Plans", "Inferno Demonlord")
            this.addDependency("High Class Archfiend Dice", "Inferno Demonlord")
            this.addDependency("Fiery Burst Rune I", "Inferno Demonlord")
            this.addDependency("Duplex I", "Inferno Demonlord")
            this.addDependency("Fire Aspect III", "Inferno Demonlord")
            this.addDependency("Archfiend Dice", "Inferno Demonlord")
            this.addDependency("Lavatears Rune I", "Inferno Demonlord")

            this.addDependency("Guardian Lucky Block", "Riftstalker Bloodfiend")
            this.addDependency("McGrubber's Burger", "Riftstalker Bloodfiend")
            this.addDependency("Unfanged Vampire Part", "Riftstalker Bloodfiend")
            this.addDependency("Enchanted Book Bundle", "Riftstalker Bloodfiend")
            this.addDependency("Quantum Book Bundle", "Riftstalker Bloodfiend")
            this.addDependency("Soultwist Rune I", "Riftstalker Bloodfiend")
            this.addDependency("Bubba Blister", "Riftstalker Bloodfiend")
            this.addDependency("Fang-tastic Chocolate Chip", "Riftstalker Bloodfiend")

            this.addDependency("Recombobulator 3000", "Other")
            this.addDependency("Fuming Potato Book", "Other")
            this.addDependency("Discs", "Other")
            this.addDependency("Master Star", "Other")
            this.addDependency("Master Skull", "Other")

            this.addDependency("Bonzo's Staff", "Floor 1")
            this.addDependency("Bonzo's Mask", "Floor 1")
            this.addDependency("Balloon Snake", "Floor 1")

            this.addDependency("Scarf's Studies", "Floor 2")
            this.addDependency("Adaptive Blade", "Floor 2")
            this.addDependency("Adaptive Belt", "Floor 2")
            
            this.addDependency("Adaptive Helmet", "Floor 3")
            this.addDependency("Adaptive Chestplate", "Floor 3")
            this.addDependency("Adaptive Leggings", "Floor 3")
            this.addDependency("Adaptive Boots", "Floor 3")

            this.addDependency("Spirit Bone", "Floor 4")
            this.addDependency("Spirit Wing", "Floor 4")
            this.addDependency("Spirit Bow", "Floor 4")
            this.addDependency("Spirit Sword", "Floor 4")
            this.addDependency("Spirit Boots", "Floor 4")
            this.addDependency("Spirit Pet", "Floor 4")

            this.addDependency("Shadow Fury", "Floor 5")
            this.addDependency("Last Breath", "Floor 5")
            this.addDependency("Livid Dagger", "Floor 5")
            this.addDependency("Shadow Assassin Helmet", "Floor 5")
            this.addDependency("Shadow Assassin Chestplate", "Floor 5")
            this.addDependency("Shadow Assassin Leggings", "Floor 5")
            this.addDependency("Shadow Assassin Boots", "Floor 5")
            this.addDependency("Shadow Assassin Cloak", "Floor 5")

            this.addDependency("Precursor Eye", "Floor 6")
            this.addDependency("Giant's Sword", "Floor 6")
            this.addDependency("Summoning Ring", "Floor 6")
            this.addDependency("Necromancer Sword", "Floor 6")
            this.addDependency("Necromancer Lord Helmet", "Floor 6")
            this.addDependency("Necromancer Lord Chestplate", "Floor 6")
            this.addDependency("Necromancer Lord Leggings", "Floor 6")
            this.addDependency("Necromancer Lord Boots", "Floor 6")
            this.addDependency("Soulweaver Gloves", "Floor 6")
            this.addDependency("Fel Skull", "Floor 6")


            this.addDependency("Necron's Handle", "Floor 7")
            this.addDependency("Scrolls", "Floor 7")
            this.addDependency("Auto Recombobulator", "Floor 7")
            this.addDependency("Fishs", "Floor 7")
            this.addDependency("Dark Claymore", "Floor 7")
            this.addDependency("Necron Dye", "Floor 7")
            this.addDependency("Thunderlord VII", "Floor 7")
            this.addDependency("Wither Helmet", "Floor 7")
            this.addDependency("Wither Chestplate", "Floor 7")
            this.addDependency("Wither Leggings", "Floor 7")
            this.addDependency("Wither Boots", "Floor 7")
            this.addDependency("Wither Cloak", "Floor 7")
            this.addDependency("Wither Catalyst", "Floor 7")
            this.addDependency("One For All", "Floor 7")

            this.addDependency("T6 Books", "Experiment Tracker")
            this.addDependency("T7 Books", "Experiment Tracker")
        }
}

export default new Settings();
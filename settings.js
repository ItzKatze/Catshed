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

// The only parameter that is required is the first, which should be the Module name.
// The other 2 parameters are optional.
// The 2nd parameter is the title of the settings window, seen in the top left above the
// category list.
// The 3rd parameter is an object that determines the sorting order of the categories.

@Vigilant('Catshed', 'Catshed', {
    getCategoryComparator: () => (a, b) => {
        // By default, categories, subcategories, and properties are sorted alphabetically.
        // You can override this behavior by returning a negative number if a should be sorted before b,
        // or a positive number if b should be sorted before a.

        // In this case, we can put Not general! to be above general.
        const categories = ['General'];

        return categories.indexOf(a.name) - categories.indexOf(b.name);
    },
    getSubcategoryComparator: () => (a, b) => {
        // These function examples will sort the subcategories by the order in the array, so eeeeeee
        // will be above Category.
        const subcategories = ["Settings", "Drop Notifications", "Farming Drop Notifications"];

        return subcategories.indexOf(a.getValue()[0].attributesExt.subcategory) -
            subcategories.indexOf(b.getValue()[0].attributesExt.subcategory);
    },
    getPropertyComparator: () => (a, b) => {
        // And this will put the properties in the order we want them to appear.
        const names = ["Webhook", "Insane Drop", "Crazy Rare Drop", "Very Rare Drop", "PRAY TO RNGESUS Farming Drop", "Crazy Rare Farming Drop"];

        return names.indexOf(a.attributesExt.name) - names.indexOf(b.attributesExt.name);
    }
})
class Settings {
    @TextProperty({
        name: 'Webhook',
        description: 'Put in a webhook to which your drop notifications should be send!',
        category: 'General',
        subcategory: 'Settings',
        protected: true,
    })
    webhook = '';

    @SwitchProperty({
        name: 'Insane Drop',
        description: 'Toggles Insane Drop Notifications!',
        category: 'General',
        subcategory: 'Drop Notifications',
    })
    insaneDrop = true;

    @SwitchProperty({
        name: 'Crazy Rare Drop',
        description: 'Toggles Crazy Rare Drop Notifications!',
        category: 'General',
        subcategory: 'Drop Notifications',
    })
    crazyRareDrop = true;

    @SwitchProperty({
        name: 'Very Rare Drop',
        description: 'Toggles Very Rare Drop Notifications!',
        category: 'General',
        subcategory: 'Drop Notifications',
    })
    veryRareDrop = true;

    @SwitchProperty({
            name: 'PRAY TO RNGESUS Farming Drop',
            description: 'Toggles PRAY TO RNGESUS Farming Drop Notifications!',
            category: 'General',
            subcategory: 'Farming Drop Notifications',
        })
        prayToRngesusFarming = true;

    @SwitchProperty({
            name: 'Crazy Rare Farming Drop',
            description: 'Toggles Crazy Rare Farming Drop Notifications!',
            category: 'General',
            subcategory: 'Farming Drop Notifications',
        })
        crazyRareFarmingDrop = true;


    constructor() {
        this.initialize(this);


    }
}

export default new Settings();

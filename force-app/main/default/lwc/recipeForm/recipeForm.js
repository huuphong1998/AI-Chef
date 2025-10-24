import { LightningElement } from "lwc";

export default class RecipeForm extends LightningElement {
    formData = {};
    dietaryOptions = [
        { label: "None", value: "none" },
        { label: "Vegetarian", value: "vegetarian" },
        { label: "Vegan", value: "vegan" },
        { label: "Gluten-Free", value: "gluten-free" }
    ];

    mealTypeOptions = [
        { label: "Breakfast", value: "breakfast" },
        { label: "Lunch", value: "lunch" },
        { label: "Dinner", value: "dinner" },
        { label: "Appettizer", value: "appettizer" }
    ];

    handleChange(event) {
        const { name, value } = event.target;
        this.formData[name] = value;
    }

    generateRecipes() {
        this.dispatchEvent(
            new CustomEvent("generate", {
                detail: {
                    formData: this.formData
                }
            })
        );
    }
}

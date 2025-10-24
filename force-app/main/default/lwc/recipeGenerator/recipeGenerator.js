import { LightningElement } from "lwc";

export default class RecipeGenerator extends LightningElement {
    formData = {};

    generateRecipes(event) {
        this.formData = event.detail.formData;
        console.log("this.formData", JSON.stringify(this.formData));
    }
}

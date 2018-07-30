import { Injectable } from "../../node_modules/@angular/core";
import { CanActivate } from "../../node_modules/@angular/router";

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent> {

    canDeactivate(component: ProductDetailComponent) {
        if (component.name.dirty) {
            return window.confirm("You have unsaved changes. Are you sure you want to leave?");
        } else {
            return true;
        }
    }
}
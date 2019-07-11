import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { SaleDetailComponent } from "./sale-detail/sale-detail.component";

const routes: Routes = [
    { path: "default", component: HomeComponent },
    { path: "sale/:id", component: SaleDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }

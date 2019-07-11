import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    sales: Array<IDataItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.sales = this._itemService.getItems();
    }
}

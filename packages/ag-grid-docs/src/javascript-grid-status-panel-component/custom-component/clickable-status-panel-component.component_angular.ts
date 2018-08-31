import {Component, ViewChild, ViewContainerRef} from "@angular/core";

import {IAfterGuiAttachedParams, IDoesFilterPassParams, RowNode, IStatusPanelItem, IStatusPanelItemParams} from "ag-grid-community";
import {IFilterAngularComp} from "ag-grid-angular";

@Component({
    selector: 'status-component',
    template: `
        <div class="container">
            <div>
                <span class="component">Status Panel Component <input type="button" (click)="onClick()" value="Click Me"/></span>
            </div>
        </div>
    `, styles: [
        `
            .container {
                display: flex; 
                justify-content: center; 
                flex-direction: column;
                margin: 5px;
                background-color: lightgrey; 
                padding: 3px 5px 3px 5px; 
                border-radius: 5px
            }
            
            .component {
                margin-left: 5px; 
                padding-top: 0; 
                padding-bottom: 0
            }
        `
    ]
})
export class ClickableStatusPanelComponent {
    private params: IStatusPanelItemParams;

    agInit(params: IStatusPanelItemParams): void {
        this.params = params;
    }

    onClick() : void {
        alert('Selected Row Count: ' + this.params.api.getSelectedRows().length)
    }
}

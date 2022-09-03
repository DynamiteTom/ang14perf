import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'default',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './defaults.component.html',
})
export class DefaultComponent{
    title = "Default Component";
}
import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "events";
@Component({
    selector: "employee-list",
    templateUrl: "./employee-component.html"

})

export class EmployeeApp {
    firstName: string = "AAAA";
    lastName: string = "BBBB";
    age: number = 34;
    address: string = "Bangalore";

    @Input()
    fullName: string;
    @Output()
    myFunct: EventEmitter = new EventEmitter();

    click(): void {
        console.log("Clicked---" + this.fullName);
    }
}
import { Component } from "@angular/core";

@Component({
    selector: "employees-lists",
    templateUrl: "./employee-list-component.html",
    styleUrls:["./employee-list-component.css"]

})

export class EmployeeList {
    employees: any[] = [{
        firstName: "AAAA",
        lastName: "BBBB",
        age: 24,
        address: "Bangalore"




    }, {
        firstName: "BBBB",
        lastName: "CCCC",
        age: 45,
        address: "Bangalore"
    },
    {
        firstName: "CCCC",
        lastName: "DDDD",
        age: 66,
        address: "Bangalore"
    },
    {
        firstName: "DDDD",
        lastName: "EEEE",
        age: 20,
        address: "Bangalore"
    }
    ]
}
import { Component, OnInit } from "@angular/core";
import { BlogService } from "../my-blog-components.service/my-blog-component.service";
import { IResponseDTO } from "../my-blog-components.service/my-blog-response";
import { IData } from "../my-blog-components.service/my-blog-data-component";

@Component({
    selector: "my-blog",
    templateUrl: "./my-blog-component.html",
    styleUrls: ["./my-blog-component.css"]


})

export class StudyJavaComponent implements OnInit {

    private respnseDTO: IResponseDTO;

    topics: any[] = [{
        "topic": "Core Java"
    }, {
        "topic": "Variables in Java"
    },
    {
        "topic": "Kumar Detail"
    },
    {
        "topic": "Vikas Detail"
    },
    {
        "topic": "topic5"
    }

    ]

    private dataResponse: IData;
    constructor(private service: BlogService) {

    }

    ngOnInit() {
        //  console.log(" from ------------------log-----------");
        this.service.getData().subscribe(data => {
            this.dataResponse = data;
            console.log("response---" + this.dataResponse.dataNode[0].header);


        });
    }
    previousPage(previousPage: string): void {
        this.service.nextData(previousPage).subscribe(data => {
            this.dataResponse = data;
            console.log("response---" + this.dataResponse.dataNode[0].header);


        });
    }
    nextPage(nextPage: string): void {
        this.service.nextData(nextPage).subscribe(data => {
            this.dataResponse = data;
            console.log("response---" + this.dataResponse.dataNode[0].header);


        });
    }
}
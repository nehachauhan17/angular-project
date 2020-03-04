import { CourseService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `<h2>{{ title }}</h2>
                <ul>
                <li *ngFor="let x of courses">
                {{ x }}
                </li>
                </ul>
    `
})
export class CourseComponent{
    title= 'List of courses';
    courses;

    constructor(service: CourseService){
        this.courses = service.getCoursesList();
    }
}
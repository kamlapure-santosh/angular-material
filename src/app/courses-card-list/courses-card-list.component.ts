import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { openEditCourseDialog } from '../course-dialog/course-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'courses-card-list',
    templateUrl: './courses-card-list.component.html',
    styleUrls: ['./courses-card-list.component.css'],
    standalone: false
})
export class CoursesCardListComponent implements OnInit {

    @Input()
    courses: Course[];

    constructor(private dialog: MatDialog) {

    }

    ngOnInit() {

    }

    editCourse(course: Course) {
        openEditCourseDialog(this.dialog, course)
        .pipe(
            filter(result => !!result)
        )
        .subscribe(
            val => console.log("new course value", val)
        );
    }
}





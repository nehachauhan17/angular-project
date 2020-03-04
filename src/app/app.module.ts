import { PaginationService } from './pagination.service';
import { FormatTitlePipe } from './format-title.pipe';
import { AuthorService } from './author.service';
import { CourseService } from './courses.service';
import { CourseComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorComponent } from './author/author.component';
import { RatingComponent } from './rating/rating.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorComponent,
    RatingComponent,
    FormatTitlePipe,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseService,
    AuthorService,
    PaginationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

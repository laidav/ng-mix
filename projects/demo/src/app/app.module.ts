import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { BeerCountComponent } from './beer-count/beer-count.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDividerModule } from '@angular/material/divider';
import { TypeaheadMultiSelectComponent } from './typeahead-multi-select/typeahead-multi-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const matModule = [
  BrowserAnimationsModule,
  MatSidenavModule,
  MatInputModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatCardModule,
  MatDialogModule,
  MatButtonModule,
  MatSelectModule,
  MatSnackBarModule,
  MatCardModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatMenuModule,
  MatExpansionModule,
  MatIconModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatButtonToggleModule,
  DragDropModule,
  MatDividerModule,
];


@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    BeerCountComponent,
    EmployeeListComponent,
    TypeaheadComponent,
    TypeaheadMultiSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ...matModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

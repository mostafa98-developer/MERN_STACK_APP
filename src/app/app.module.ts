import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgGanttEditorModule } from 'ng-gantt'
//import { MatFormioModule } from 'angular-material-formio';
import { FormBuilderModule } from 'angular-form-builder';
import { BehaviorSubject } from "rxjs";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ModalModule } from 'ngx-bootstrap';
import { CourseDialogComponentComponent } from './course-dialog-component/course-dialog-component.component';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { HierarchicalTreeService, MindMapService, RadialTreeService, ComplexHierarchicalTreeService } from '@syncfusion/ej2-angular-diagrams';
import { DataBindingService, SnappingService, PrintAndExportService, BpmnDiagramsService} from '@syncfusion/ej2-angular-diagrams';
import { SymmetricLayoutService, ConnectorBridgingService, UndoRedoService, LayoutAnimationService} from '@syncfusion/ej2-angular-diagrams';
import { DiagramContextMenuService, ConnectorEditingService } from '@syncfusion/ej2-angular-diagrams';

import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';


import { DiagramAllModule, SymbolPaletteAllModule, OverviewAllModule } from '@syncfusion/ej2-angular-diagrams';


@NgModule({
  declarations: [
    AppComponent,
    CourseDialogComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgGanttEditorModule,
    FormBuilderModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    DiagramAllModule,
    ListViewModule,
    SymbolPaletteAllModule,
    OverviewAllModule,
    ModalModule,
    FormsModule,
    ToolbarModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSliderModule,
    DiagramModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ModalModule.forRoot(),



  ],
  providers: [HierarchicalTreeService, MindMapService, RadialTreeService, ComplexHierarchicalTreeService, DataBindingService, SnappingService, PrintAndExportService, BpmnDiagramsService, SymmetricLayoutService, ConnectorBridgingService, UndoRedoService, LayoutAnimationService, DiagramContextMenuService, ConnectorEditingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

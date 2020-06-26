import { Component, ViewChild, TemplateRef } from '@angular/core';
import { GanttEditorComponent, GanttEditorOptions } from 'ng-gantt';
//import { Gantt } from './diagram-common';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { CourseDialogComponentComponent } from './course-dialog-component/course-dialog-component.component';
import { NgModel } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { DiagramComponent, PrintAndExport, Diagram, NodeModel, BasicShapeModel, DiagramTools, MarginModel, SymbolInfo, IDragEnterEventArgs, IDragLeaveEventArgs, IDragOverEventArgs, IClickEventArgs, IHistoryChangeArgs, IDoubleClickEventArgs, ITextEditEventArgs, IScrollChangeEventArgs, ISelectionChangeEventArgs, ISizeChangeEventArgs, IConnectionChangeEventArgs, IEndChangeEventArgs, IPropertyChangeEventArgs, IDraggingEventArgs, IRotationEventArgs, ICollectionChangeEventArgs, IMouseEventArgs, DiagramBeforeMenuOpenEventArgs, PaletteModel, ContextMenuSettingsModel, UndoRedo, DiagramContextMenu, Snapping, ShadowModel, IExportOptions, FileFormats } from '@syncfusion/ej2-angular-diagrams';
import { ChangeEventArgs as CheckBoxChangeEventArgs } from '@syncfusion/ej2-buttons';
import {
  ConnectorModel, NodeConstraints,
  SnapSettingsModel, SnapConstraints, GradientType, GradientModel, LinearGradientModel, RadialGradientModel
} from '@syncfusion/ej2-angular-diagrams';
import { MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { ListView } from '@syncfusion/ej2-lists';
import { ExpandMode } from '@syncfusion/ej2-navigations';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ToolbarComponent } from '@syncfusion/ej2-angular-navigations';
import { ItemModel } from '@syncfusion/ej2-splitbuttons';

Diagram.Inject(UndoRedo, DiagramContextMenu, Snapping);
Diagram.Inject(PrintAndExport);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None

})
export class AppComponent {

  title = 'gantt-chart';
  @ViewChild('diagram', { static: false }) public diagram: DiagramComponent;
  public multiplePage: boolean = false;
  public constraints: NodeConstraints;
  public shadow: ShadowModel;
  public snapSettings: SnapSettingsModel = { constraints: SnapConstraints.All };

  public symbolMargin: MarginModel = { left: 15, right: 15, top: 15, bottom: 15 };

  // tslint:disable-next-line:member-ordering
  public expandMode: ExpandMode = 'Multiple';

  // tslint:disable-next-line:member-ordering
  public data: { [key: string]: Object }[] = [
    { text: 'Drag enter', id: 'dragEnter' },
    { text: 'Drag leave', id: 'dragLeave' },
    { text: 'Drag over', id: 'dragOver' },
    { text: 'Click', id: 'click', isChecked: true },
    { text: 'History change', id: 'historyChange', isChecked: true },
    { text: 'Double click', id: 'doubleClick' },
    { text: 'Text edit', id: 'textEdit', isChecked: true },
    { text: 'Scroll change', id: 'scrollChange' },
    { text: 'Selection change', id: 'selectionChange', isChecked: true },
    { text: 'Size change', id: 'sizeChange', isChecked: true },
    { text: 'Connection change', id: 'connectionChange', isChecked: true },
    { text: 'SourcePoint change', id: 'sourcePointChange' },
    { text: 'TargetPoint change', id: 'targetPointChange' },
    { text: 'Position change', id: 'positionChange', isChecked: true },
    { text: 'Rotate change', id: 'rotateChange', isChecked: true },
    { text: 'Collection change', id: 'collectionChange', isChecked: true },
    { text: 'Mouse enter', id: 'mouseEnter' },
    { text: 'Mouse leave', id: 'mouseLeave' },
    { text: 'Mouse over', id: 'mouseOver' },
    { text: 'Context menu open', id: 'contextMenuOpen' },
    { text: 'Context menu before item render', id: 'contextMenuBeforeItemRender' },
    { text: 'Context menu click', id: 'contextMenuClick' }
  ];

  //Initialize the basicshapes for the symbol palatte
  // tslint:disable-next-line:member-ordering
  public basicShapes: NodeModel[] = [
    { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' } },
    { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },
    { id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' } },
    { id: 'Triangle', shape: { type: 'Basic', shape: 'Triangle' } },
    { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' } },
    { id: 'Pentagon', shape: { type: 'Basic', shape: 'Pentagon' } },
    { id: 'Cylinder', shape: { type: 'Basic', shape: 'Cylinder' } },
    { id: 'Plus', shape: { type: 'Basic', shape: 'Plus' } },
    { id: 'Heptagon', shape: { type: 'Basic', shape: 'Heptagon' } },
    { id: 'Octagon', shape: { type: 'Basic', shape: 'Octagon' } },
    { id: 'Trapezoid', shape: { type: 'Basic', shape: 'Trapezoid' } },
    { id: 'Decagon', shape: { type: 'Basic', shape: 'Decagon' } },
    { id: 'RightTriangle', shape: { type: 'Basic', shape: 'RightTriangle' } },
    { id: 'Diamond', shape: { type: 'Basic', shape: 'Diamond' } },
    { id: 'Star', shape: { type: 'Basic', shape: 'Star' } }
  ];

  //Initializes connector symbols for the symbol palette
  // tslint:disable-next-line:member-ordering
  public connectorSymbols: ConnectorModel[] = [
    {
      id: 'Link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
      targetDecorator: { shape: 'Arrow' }, style: { strokeWidth: 1 }
    },
    {
      id: 'link3', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
      style: { strokeWidth: 1 }, targetDecorator: { shape: 'None' }
    },
    {
      id: 'Link21', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
      targetDecorator: { shape: 'Arrow' }, style: { strokeWidth: 1 }
    },
    {
      id: 'link23', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
      style: { strokeWidth: 1 }, targetDecorator: { shape: 'None' }
    },
    {
      id: 'link33', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
      style: { strokeWidth: 1 }, targetDecorator: { shape: 'None' }
    },
  ];
  //***************************************************************** */
  // tslint:disable-next-line:member-ordering
  public palettes: PaletteModel[] = [
    { id: 'basic', expanded: true, symbols: this.basicShapes, iconCss: 'e-ddb-icons e-basic', title: 'Basic Shapes' },
    { id: 'connectors', expanded: true, symbols: this.connectorSymbols, iconCss: 'e-ddb-icons e-connector', title: 'Connectors' }
  ];

  // tslint:disable-next-line:member-ordering
  public contextMenu: ContextMenuSettingsModel = {
    show: true,
  }

  public drawingshape: BasicShapeModel;
  public node: NodeModel;
  public exportTypes: ItemModel[] = [
    { text: 'JPG' }, { text: 'PNG' },
    { text: 'BMP' }, { text: 'SVG' }
  ];


  public getSymbolDefaults(symbol: NodeModel): void {
    symbol.width = 50;
    symbol.height = 50;
    symbol.constraints = NodeConstraints.Default | NodeConstraints.AllowDrop;
  }
  ngOnInit(): void {
    this.constraints = NodeConstraints.Default | NodeConstraints.Shadow;
    this.shadow = {
      angle: 50,
      opacity: 0.8,
      distance: 9
    }
  }

  public getSymbolInfo(symbol: NodeModel): SymbolInfo {
    return { fit: true };
  }


  public contextMenuOpen(args: DiagramBeforeMenuOpenEventArgs): void {

  }
  public click(args: IClickEventArgs): void {
    this.contextMenu.show = true;
  }


  public collectionChange(args: ICollectionChangeEventArgs): void {

  }
  public selectionChange(args: ISelectionChangeEventArgs): void {

  }
  public contextMenuClick(args: MenuEventArgs): void {

  }

  onClick = (args: MouseEvent) => {
    let data: HTMLElement = document.getElementById('EventLog');
    console.log('kdjfyh')
    for (let i: number = data.childNodes.length - 1; i >= 0; i--) {
      data.removeChild(data.childNodes[i]);
    }
  }

  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    node.style.fill = '#3CB371';
    node.style.strokeColor = 'Black';
    //node.style.gradient.type = "Linear"
    node.style.strokeWidth = 2;
    return node;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  public created(args: Object): void {
    //JSON to create a rectangle
    // this.drawingshape = { type: 'Basic', shape: 'Rectangle' };
    // this.node = {
    //   shape: this.drawingshape
    // };
    // this.diagram.drawingObject = this.node;
    //To draw an object once, activate draw once
    this.diagram.tool = DiagramTools.DrawOnce;
    this.diagram.dataBind();
    this.diagram.undo();
    // Restores the last undone action
    this.diagram.redo();
  }
  public onselect(args: MenuEventArgs): void {
    let exportOptions: IExportOptions = {};
    exportOptions.format = args.item.id as FileFormats;
    exportOptions.mode = 'Download';
    exportOptions.region = 'PageSettings';
    exportOptions.multiplePage = this.multiplePage;
    exportOptions.fileName = 'Export';
    exportOptions.pageHeight = 400;
    exportOptions.pageWidth = 400;
    this.diagram.exportDiagram(exportOptions);
  }
  public download(): void {
    let data = this.diagram.saveDiagram();
    let aa = this.diagram.getNodeObject('RectangleCfDTn');
    console.log(aa);
    if (window.navigator.msSaveBlob) {
      let blob: Blob = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
      window.navigator.msSaveOrOpenBlob(blob, 'Diagram.json');
    } else {
      let dataStr: string = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
      let a: HTMLAnchorElement = document.createElement('a');
      a.href = dataStr;
      a.download = 'Diagram.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  }
  public toolbarEditorClick(args: ClickEventArgs): void {
    let printOptions: IExportOptions = {};
    if (args.item.text === 'Print') {
      printOptions.mode = 'Data';
      printOptions.region = 'PageSettings';
      printOptions.multiplePage = this.multiplePage;
      printOptions.pageHeight = 400;
      printOptions.pageWidth = 400;
      this.diagram.print(printOptions);
    }
  }

}

